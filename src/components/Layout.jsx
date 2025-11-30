import React from 'react';
import Header from './Header';
import Footer from './Footer';
import FloatingWhatsApp from './FloatingWhatsApp';
import FloatingMessenger from './FloatingMessenger';

import { useLocation } from 'react-router-dom';

const Layout = ({ children, lang }) => {
    const location = useLocation();
    const isFrench = location.pathname.startsWith('/fr') || location.pathname.includes('/fr') || lang === 'fr';
    const currentLang = isFrench ? 'fr' : 'ar';

    return (
        <div className="flex flex-col min-h-screen font-cairo" dir={isFrench ? 'ltr' : 'rtl'}>
            <Header lang={currentLang} />
            <main className="flex-grow">
                {children}
            </main>
            <FloatingWhatsApp />
            <FloatingMessenger />
            <Footer lang={currentLang} />
        </div>
    );
};

export default Layout;
