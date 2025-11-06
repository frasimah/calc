import { Link } from 'react-router-dom';
import '../components/Custom404/styles/Custom404.scss';
import { Helmet } from 'react-helmet';

function Custom404() {
   return (
      <>
         <Helmet>
            <title>404 — Страница не найдена | Reffection</title>
            <meta name="robots" content="noindex, nofollow" />
            <meta name="description" content="Страница не найдена. Возможно, она была удалена или вы ошиблись в адресе." />

            {/* Open Graph */}
            <meta property="og:type" content="website" />
            <meta property="og:title" content="404 — Страница не найдена | Reffection" />
            <meta property="og:description" content="Страница не найдена. Возможно, она была удалена или вы ошиблись в адресе." />

            {/* Twitter */}
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:title" content="404 — Страница не найдена | Reffection" />
            <meta name="twitter:description" content="Страница не найдена. Возможно, она была удалена или вы ошиблись в адресе." />
         </Helmet>
         <section className="error_page">
            <div className="container">
               <div className="error_page_wrap">
                  <h1 className="error_page_wrap-title">404</h1>
                  <div className="error_page_wrap-text typ_text onest">
                     <p>
                        Мы не можем найти страницу, которую вы искали. Возможно, она была удалена, переехала или никогда не существовала.
                     </p>
                  </div>
                  <Link to="/" className="error_page_wrap-link btn gray light_gray">на главную</Link>
               </div>
            </div>
         </section>

      </>
   );
}

export default Custom404;