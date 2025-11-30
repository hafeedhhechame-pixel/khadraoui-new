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
            <div className="w-full lg:w-1/2 h-[50vh] lg:h-full bg-white flex items-center justify-center p-8 lg:p-0 relative z-10">
                <img
                    src="/images/logo.png"
                    alt="Khadraoui Logo"
                    className="w-full h-full object-contain max-w-md lg:max-w-full drop-shadow-xl animate-fade-in"
                />
            </div>

            {/* Right Side - Truck & Content */}
            <div className="w-full lg:w-1/2 h-auto lg:h-full bg-gradient-to-br from-green-900 via-green-800 to-gray-900 text-white flex flex-col justify-center items-center p-8 lg:p-16 relative">
            </h2>

            <p className="text-green-100 text-lg mb-8 opacity-90 hidden md:block">
                {text.desc}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
                <Link to={isFrench ? "/fr/products" : "/products"} className="group bg-yellow-500 hover:bg-yellow-400 text-green-900 font-bold py-4 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-center">
                    {text.ctaPrimary}
                </Link>
                <Link to={isFrench ? "/fr/contact" : "/contact"} className="group bg-white/10 backdrop-blur-md border border-white/30 hover:bg-white/20 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 shadow-lg text-center">
                    {text.ctaSecondary}
                </Link>
            </div>
        </div>
            </div >
        </section >
    );
};

export default HeroSection;
