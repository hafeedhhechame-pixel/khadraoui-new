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
        <section className="relative bg-gradient-to-r from-green-900 to-gray-900 text-white py-16 lg:py-24 overflow-hidden">
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
            <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid md:grid-cols-2 gap-8 items-center min-h-[600px]">
                    {/* Left Side - Large Logo */}
                    <div className="flex items-center justify-center animate-fade-in-up">
                        <img src="/images/logo.png" alt="Khadraoui" className="h-72 md:h-96 lg:h-[450px] w-auto drop-shadow-2xl" />
                    </div>

                    {/* Right Side - Large Truck Icon + Delivery Message */}
                    <div className="flex flex-col items-center justify-center gap-8 animate-fade-in-up animation-delay-200">
                        {/* Huge Truck Icon */}
                        <div className="bg-white/95 backdrop-blur-sm p-12 rounded-3xl shadow-2xl border-4 border-yellow-400">
                            <Truck className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 text-green-600" strokeWidth={1.5} />
                        </div>

                        {/* Large Delivery Text */}
                        <div className="text-center">
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6" style={{ textShadow: '3px 6px 12px rgba(0,0,0,0.8)' }}>
                                {text.delivery}
                            </h2>

                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                                <Link to={isFrench ? "/fr/products" : "/products"} className="group bg-gradient-to-r from-yellow-500 to-yellow-400 hover:from-yellow-400 hover:to-yellow-300 text-green-900 font-bold py-5 px-12 rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl relative overflow-hidden text-xl">
                                    <span className="relative z-10">{text.ctaPrimary}</span>
                                    <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                                </Link>
                                <Link to={isFrench ? "/fr/contact" : "/contact"} className="group bg-white/20 backdrop-blur-md border-2 border-white/50 text-white hover:bg-white hover:text-green-900 font-bold py-5 px-12 rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl text-xl">
                                    {text.ctaSecondary}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
