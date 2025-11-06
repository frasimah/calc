import React, { useState, useEffect, useCallback } from 'react';
import './form_block.scss';
import { PatternFormat } from 'react-number-format';
import RecaptchaScript from '../RecaptchaScript/RecaptchaScript';
import InvisibleRecaptcha from '../RecaptchaScript/InvisibleRecaptcha';
import { Link } from 'react-router-dom';

const FormBlock = ({ setModalType, calculatorData }) => {
    const [disabledBtn, setDisabledBtn] = useState(true);
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        site: '',
        consent: false, // Добавим для чекбокса
    });
    const [recaptchaToken, setRecaptchaToken] = useState(null);

    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handlePhoneChange = (values) => {

        const { formattedValue } = values; // Получаем форматированное значение
        setFormData({
            ...formData,
            phone: formattedValue,
        });
    };

    // Функция для проверки условий доступности кнопки
    const checkFormValidity = useCallback(() => {
        // Проверяем, что все обязательные поля заполнены и чекбокс установлен
        // const phoneRegex = /^\+7\s?\(\d{3}\)\s?\d{3}\s?\d{2}\s?\d{2}$/; // Проверка на формат номера с кодом страны +7 и 10 цифр
        const phoneRegex = /^\d\s\d{3}\s\d{3}\s\d{2}\s\d{2}$/; // Проверка на формат номера с кодом страны +7 и 10 цифр
        if (formData.name && phoneRegex.test(formData.phone) && formData.consent) {
            setDisabledBtn(false);
        } else {
            setDisabledBtn(true);
        }
    }, [formData]);

    // Используем useEffect для отслеживания изменений в форме
    useEffect(() => {
        checkFormValidity();
    }, [checkFormValidity]); // Функция мемоизирована, зависимость корректна

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!recaptchaToken) {
            console.log('reCAPTCHA token is missing');
            return;
        }

        // Проверяем, что номер состоит из цифр и длина строки без маски
        setModalType('loading');

        const finalPayload = {
            ...formData,
            recaptchaToken,
        };

        if (calculatorData) {
            finalPayload.calculatorData = typeof calculatorData === 'string'
                ? calculatorData
                : JSON.stringify(calculatorData);
            finalPayload.action = 'calculator'
        }

        fetch('/send_old.php', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(finalPayload),
        })
            .then((response) => response.json()) // Преобразуем ответ в JSON
            .then((data) => {
                if (data.Result === "Success") {
                    setModalType('success');
                } else {
                    setModalType('error');
                }
            })
            .catch((error) => {
                console.error('Error:', error);
                setModalType('error');
            });
    };

    return (
        <>
            <RecaptchaScript />
            <form onSubmit={handleSubmit}>
                <div className={'item'}>
                    <input
                        type={'text'}
                        value={formData.name}
                        required={true}
                        name={'name'}
                        placeholder={'Ваше имя*'}
                        onChange={handleChange}
                    />
                </div>
                <div className={'item'}>
                    <PatternFormat
                        name='phone'
                        format="# ### ### ## ##"
                        // format="+7 (###) ### ## ##"
                        mask=" "
                        placeholder="Ваш телефон*"
                        required
                        value={formData.phone}
                        onValueChange={handlePhoneChange}
                    />
                </div>
                <div className={'item'}>
                    <input
                        type={'text'}
                        value={formData.site}
                        required={false}
                        name={'site'}
                        placeholder={'Сайт'}
                        onChange={handleChange}
                    />
                </div>
                <div className="modal_check">
                    <input
                        type="checkbox"
                        required={true}
                        className="custom-checkbox"
                        id="get_touch-check"
                        name='consent'
                        checked={formData.consent}
                        onChange={handleChange} // При изменении чекбокса обновляем состояние
                    />
                    <label htmlFor="get_touch-check">Я согласен на обработку <Link to="/privacy">персональных данных*</Link></label>
                </div>
                <div className="btn_sub">
                    <input type={'submit'} value={'отправить'} className={'btn_sub-btn'} disabled={disabledBtn} />
                </div>
                <InvisibleRecaptcha onVerify={setRecaptchaToken} />
            </form>
        </>
    );
};

export default FormBlock;
