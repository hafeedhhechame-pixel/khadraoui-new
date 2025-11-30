import React from 'react';
import { Link } from 'react-router-dom';
import { Truck } from 'lucide-react';

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
                    {text.ctaPrimary}
                        </Link>
            <Link to={isFrench ? "/fr/contact" : "/contact"} className="group bg-green-900 hover:bg-green-800 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 shadow-lg text-center">
                {text.ctaSecondary}
            </Link>
        </div>
                </div >
            </div >
        </section >
    );
};

export default HeroSection;
