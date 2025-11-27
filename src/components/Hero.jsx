import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section className="relative bg-green-900 text-white py-20 overflow-hidden">
            <div className="absolute inset-0 opacity-20 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center"></div>
            <div className="container mx-auto px-4 relative z-10 text-center md:text-right">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                    اجعل منزلك جنة خضراء <br /> مع خضراوي
                </h1>
                <p className="text-xl md:text-2xl mb-8 text-green-100 max-w-2xl">
                    نوفر لك أجود أنواع الأشجار والنباتات، مع خدمة توصيل سريعة ونصائح زراعية مجانية.
                </p>
                <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
                    <Link to="/products" className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full transition transform hover:scale-105">
                        تصفح المنتجات
                    </Link>
                    <Link to="/contact" className="bg-white text-green-900 hover:bg-gray-100 font-bold py-3 px-8 rounded-full transition">
                        تواصل معنا
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Hero;
