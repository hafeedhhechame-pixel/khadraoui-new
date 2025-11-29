import React from 'react';
import Header from './Header';
import Footer from './Footer';
import FloatingWhatsApp from './FloatingWhatsApp';
import FloatingMessenger from './FloatingMessenger';

const Layout = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen font-cairo" dir="rtl">
            <Header />
            <main className="flex-grow">
                {children}
            </main>
            <FloatingWhatsApp />
            <FloatingMessenger />
            <Footer />
        </div>
    );
};

export default Layout;
