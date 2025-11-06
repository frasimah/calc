import React, { useState, useEffect, useCallback } from 'react';
import { useCalculator } from './hooks/useCalculator';
import { useSlider } from './hooks/useSlider';
import ServiceSelector from './components/ServiceSelector/ServiceSelector';
import AverageCheckInput from './components/AverageCheckInput/AverageCheckInput';
import ContactsSlider from './components/ContactsSlider/ContactsSlider';
import SubscriptionSelector from './components/SubscriptionSelector/SubscriptionSelector';
import ResultsCard from './components/ResultsCard/ResultsCard';
import InfoModal from './components/InfoModal/InfoModal';
import './Calculator.scss';
import FormModal from '../components/utilities/Modals/FormModal/FormModal';
import Modal from 'react-modal';


Modal.setAppElement('#root');

// Error Boundary Component
class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null, errorInfo: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        this.setState({ error, errorInfo });
        console.error("Uncaught error:", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div>
                    <h2>Something went wrong.</h2>
                    <details style={{ whiteSpace: 'pre-wrap' }}>
                        {this.state.error && this.state.error.toString()}
                        <br />
                        {this.state.errorInfo && this.state.errorInfo.componentStack}
                    </details>
                </div>
            );
        }
        return this.props.children;
    }
}


// Main Calculator Component
function Calculator() {
    const [serviceType, setServiceType] = useState(1);
    const [averageCheck, setAverageCheck] = useState(100000);
    const [techPackage, setTechPackage] = useState("Tech");
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isSubscriptionDropdownOpen, setIsSubscriptionDropdownOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [infoModalContent, setInfoModalContent] = useState('product-section');
    const [calculatorResult, setCalculatorResult] = useState(null) // Result для отправки через форму

    const sliderHookProps = useSlider(4500);
    const { value: contacts, sliderRef } = sliderHookProps;
    const results = useCalculator(serviceType, contacts, averageCheck, techPackage);

    const [modalIsOpen, setIsOpen] = useState(false);
    const [modalContent, setModalContent] = useState({});

    function openModal(product) {
        setModalContent(product);
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    const handleServiceChange = useCallback((serviceId) => {
        setServiceType(serviceId);
        setIsDropdownOpen(false);
        if (serviceId === 3) {
            setTechPackage("Call");
            setIsSubscriptionDropdownOpen(false);
        } else if (techPackage === "Call") {
            setTechPackage("Tech");
        }
    }, [techPackage]);

    const handleToggleDropdown = useCallback(() => {
        setIsDropdownOpen(prev => !prev);
        setIsSubscriptionDropdownOpen(false); // Close other dropdown
    }, []);

    const handleSubscriptionDropdownToggle = useCallback(() => {
        if (serviceType === 3) return; // Disabled for Call Center
        setIsSubscriptionDropdownOpen(prev => !prev);
        setIsDropdownOpen(false); // Close other dropdown
    }, [serviceType]);

    const handleSubscriptionChange = useCallback((subscriptionId) => {
        const idToPackage = {
            "tech": "Tech",
            "must": "Must",
            "pro": "Pro"
            // "Call" is handled by serviceType change
        };
        if (idToPackage[subscriptionId]) {
            setTechPackage(idToPackage[subscriptionId]);
        }
        setIsSubscriptionDropdownOpen(false);
    }, []);

    const handleModalToggle = useCallback((modalType) => {
        setIsModalOpen(prev => !prev);

    }, []);

    const handleModalContent = useCallback((modalType) => {
        setInfoModalContent(modalType)
    }, []);


    // Close dropdowns when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            // Check if the click is outside the main dropdown
            if (isDropdownOpen && !event.target.closest('.product-section .dropdown-selector') && !event.target.closest('.product-section .dropdown-menu')) {
                setIsDropdownOpen(false);
            }
            // Check if the click is outside the subscription dropdown
            if (isSubscriptionDropdownOpen && !event.target.closest('.subscription-section .subscription-selector') && !event.target.closest('.subscription-section .subscription-dropdown-menu')) {
                setIsSubscriptionDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isDropdownOpen, isSubscriptionDropdownOpen]);


    return (
        <section className='calculator' id='calculator'>
            <div className="container">
                <div className="calculator_wrap">
                    <div className="calculator_wrap_head row">
                        <div className="col-xl-8 col-md-7">
                            <div className="calculator_wrap_head_left">
                                <h2 className='calculator_wrap_head_left-title'>Калькулятор стоимости</h2>
                                <div className='calculator_wrap_head_left-text'>
                                    <p>Рассчитайте бюджет, охват и конверсию в лиды</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-5">
                            <div className="calculator_wrap_head-disclaimer">
                                <p>*расчет стоимости носит примерный ознакомительный характер. Точный бюджет предоставит ваш персональный менеджер</p>
                            </div>
                        </div>
                    </div>
                    <div className="calculator_wrap_body row">
                        <div className="col-xl-8">
                            <div className="calculator_wrap_body_left row">
                                <div className="col-md-6">
                                    <ServiceSelector
                                        serviceType={serviceType}
                                        onServiceChange={handleServiceChange}
                                        isDropdownOpen={isDropdownOpen}
                                        onToggleDropdown={handleToggleDropdown}
                                        onInfoClick={handleModalToggle}
                                        onInfoClickContent={handleModalContent}
                                    />
                                </div>
                                <div className="col-md-6">
                                    <SubscriptionSelector
                                        serviceType={serviceType}
                                        techPackage={techPackage}
                                        onTechPackageChange={handleSubscriptionChange}
                                        isDropdownOpen={isSubscriptionDropdownOpen}
                                        onToggleDropdown={handleSubscriptionDropdownToggle}
                                        onInfoClick={handleModalToggle}
                                        onInfoClickContent={handleModalContent}
                                    />
                                </div>
                                <div className="col-xl-12">
                                    <AverageCheckInput
                                        averageCheck={averageCheck}
                                        onAverageCheckChange={setAverageCheck}
                                    />
                                </div>
                                <div className="col-xl-12">
                                    <ContactsSlider
                                        contacts={contacts}
                                        onContactsChange={sliderHookProps.handleSliderChange}
                                        isDragging={sliderHookProps.isDragging}
                                        onThumbMouseDown={sliderHookProps.handleThumbMouseDown}
                                        onTrackClick={sliderHookProps.handleTrackClick}
                                        sliderRef={sliderRef}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4">
                            <ResultsCard
                                results={results}
                                contacts={contacts}
                                serviceType={serviceType}
                                averageCheck={averageCheck}
                                techPackage={techPackage}
                                openModal={openModal}
                                setCalculatorResult={setCalculatorResult}
                            />
                        </div>
                        <InfoModal
                            isOpen={isModalOpen}
                            onClose={handleModalToggle}
                            infoModalType={infoModalContent}
                        />
                    </div>
                </div>
                <FormModal isOpen={modalIsOpen} onRequestClose={closeModal} content={modalContent} calculatorData={calculatorResult} />
            </div>
        </section>

    );
}

// Export Calculator as default and ErrorBoundary as named export
export { ErrorBoundary };
export default Calculator;