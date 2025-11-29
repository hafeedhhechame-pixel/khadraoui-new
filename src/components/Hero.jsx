import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section className="relative bg-gray-900 text-white py-24 lg:py-32 overflow-hidden">
            <div className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center opacity-90"></div>
            <div className="absolute inset-0 bg-black/30"></div>
            <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
            <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>



            <div className="container mx-auto px-4 relative z-10 text-center md:text-right">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-fade-in-up" style={{ textShadow: '2px 4px 8px rgba(0,0,0,0.5)' }}>
                    اجعل منزلك <span className="text-yellow-400">جنة خضراء</span> <br /> مع خضراوي
                </h1>
                <p className="text-xl md:text-2xl mb-10 text-white max-w-2xl font-light leading-relaxed animate-fade-in-up animation-delay-300" style={{ textShadow: '1px 2px 4px rgba(0,0,0,0.5)' }}>
                    نوفر لك أجود أنواع الأشجار والنباتات، مع خدمة توصيل سريعة ونصائح زراعية مجانية لتضمن نمو محاصيلك.
                </p>
                <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start animate-fade-in-up animation-delay-600">
                    <Link to="/products" className="group bg-gradient-to-r from-yellow-500 to-yellow-400 hover:from-yellow-400 hover:to-yellow-300 text-green-900 font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl relative overflow-hidden">
                        <span className="relative z-10">تصفح المنتجات</span>
                        <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                    </Link>
                    <Link to="/contact" className="group bg-white/20 backdrop-blur-md border-2 border-white/50 text-white hover:bg-white hover:text-green-900 font-bold py-4 px-10 rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl">
                        تواصل معنا
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Hero;
