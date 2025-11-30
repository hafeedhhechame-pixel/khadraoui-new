import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = ({ lang = 'ar' }) => {
    const t = {
        ar: {
            titlePart1: 'اجعل منزلك',
            titlePart2: 'جنة خضراء',
            titlePart3: 'مع خضراوي',
            desc: 'نوفر لك أجود أنواع الأشجار والنباتات، مع خدمة توصيل سريعة ونصائح زراعية مجانية لتضمن نمو محاصيلك.',
            ctaPrimary: 'تصفح المنتجات',
            ctaSecondary: 'تواصل معنا',
            delivery: 'التوصيل متوفر لـ 58 ولاية'
        },
        fr: {
            titlePart1: 'Transformez votre maison',
            titlePart2: 'en Paradis Vert',
            titlePart3: 'avec Khadraoui',
            desc: 'Nous vous fournissons les meilleurs arbres et plantes, avec une livraison rapide et des conseils agricoles gratuits pour garantir la croissance de vos cultures.',
            ctaPrimary: 'Voir les Produits',
            ctaSecondary: 'Contactez-nous',
            delivery: 'Livraison disponible pour 58 Wilayas'
        }
    };

    const text = t[lang] || t.ar;
    const isFrench = lang === 'fr';

    return (
        <section className="relative bg-white overflow-hidden min-h-[600px] lg:h-[85vh] flex flex-col lg:flex-row">
            {/* Left Side - Full Logo */}
            <div className="w-full lg:w-1/2 h-[50vh] lg:h-full bg-gradient-to-br from-green-700 via-green-600 to-green-500 flex items-center justify-center p-8 lg:p-0 relative z-10">
                <img
                    src="/images/logo.png"
                    alt="Khadraoui Logo"
                    className="w-full h-full object-contain max-w-md lg:max-w-full drop-shadow-2xl animate-fade-in"
                    style={{ mixBlendMode: 'multiply' }}
                />
            </div>

            {/* Right Side - Professional Van Background */}
            <div className="w-full lg:w-1/2 h-auto lg:h-full relative text-white flex flex-col justify-center items-center p-8 lg:p-16"
                style={{
                    backgroundImage: 'url(/images/professional_van.png)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}>

                {/* Dark Overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/50 to-black/60"></div>

                <div className="relative z-10 flex flex-col items-center text-center max-w-lg">
                    {/* Delivery Text */}
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-white drop-shadow-2xl">
                        {text.delivery}
                    </h2>

                    <p className="text-white text-lg mb-8 opacity-90 hidden md:block drop-shadow-lg">
                        {text.desc}
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
                        <Link to={isFrench ? "/fr/products" : "/products"} className="group bg-yellow-500 hover:bg-yellow-400 text-green-900 font-bold py-4 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-center">
                            {text.ctaPrimary}
                        </Link>
                        <Link to={isFrench ? "/fr/contact" : "/contact"} className="group bg-white hover:bg-gray-100 text-green-900 font-bold py-4 px-8 rounded-full transition-all duration-300 shadow-lg text-center">
                            {text.ctaSecondary}
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
