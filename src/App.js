import { useState } from 'react'
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import FrontPage from './pages/FrontPage';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Privacy from "./pages/Privacy";

import './App.scss';
import Consent from './pages/Consent';
import Contacts from './pages/Contacts';
import Preloader from './components/utilities/Preloader/Preloader';
import BtnTop from './components/utilities/BtnTop/BtnTop';
import Custom404 from './pages/404';
import ConsentSecond from './pages/ConsentSecond';
import PrivacySecond from './pages/PrivacySecond';
import EdTech from './pages/EdTech';
import Partners from './pages/Partners';
import CarDealers from './pages/CarDealers';
import PrivacyThird from './pages/PrivacyThird';
import ConsentThird from './pages/ConsentThird';
import SegmentScoring from './pages/product/SegmentScoring';
import RetargetingTriggerLeads from './pages/product/RetargetingTriggerLeads';
import CallCenterTelephony from './pages/product/CallCenterTelephony';
import MetaTags from './components/utilities/MetaTags/MetaTags';
import ScrollToHash from './components/utilities/ScrollToHash/ScrollToHash';
import Price from './pages/Price';
import LandingKitchens from './pages/LandingKitchens';

function App() {
    const [activeMenu, setActiveMenu] = useState(false)
    const [overflowActiveMenu, setOverflowActiveMenu] = useState(false)

    return (
        <>
            <MetaTags />
            <div className={`App ${activeMenu ? 'active' : ''} ${overflowActiveMenu || activeMenu ? 'overflow' : ''}`}>
                <Router>
                    <Header activeMenu={setActiveMenu} overflowActiveMenu={setOverflowActiveMenu} />
                    <main>
                        <Preloader>
                            <Route path="/" element={<FrontPage />} />
                            <Route path="/privacy" element={<Privacy />} />
                            <Route path="/price" element={<Price />} />
                            <Route path="/privacy-second" element={<PrivacySecond />} />
                            <Route path="/privacy-third" element={<PrivacyThird />} />
                            <Route path="/consent" element={<Consent />} />
                            <Route path="/consent-second" element={<ConsentSecond />} />
                            <Route path="/consent-third" element={<ConsentThird />} />
                            <Route path="/contacts" element={<Contacts />} />
                            <Route path="/partners" element={<Partners />} />
                            <Route path="/edtech" element={<EdTech />} />
                            <Route path="/kitchens" element={<LandingKitchens />} />
                            <Route path="/car-dealers" element={<CarDealers />} />
                            <Route path="/product/segment-scoring" element={<SegmentScoring />} />
                            <Route path="/product/retargeting-trigger-leads" element={<RetargetingTriggerLeads />} />
                            <Route path="/product/call-center" element={<CallCenterTelephony />} />
                            <Route path="*" element={<Custom404 />} />
                            <Route path="/404" element={<Custom404 />} />
                        </Preloader>
                    </main>
                    <Footer />
                    <BtnTop />
                    <ScrollToHash />
                </Router>
            </div>
        </>
    );
}

export default App;
