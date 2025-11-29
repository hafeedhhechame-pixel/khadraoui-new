import React, { useState, useEffect } from 'react';
import { ShoppingCart } from 'lucide-react';

const StickyCTA = ({ price, onClick }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Show button after scrolling down 300px
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] z-50 md:hidden animate-slide-up">
            <div className="flex items-center gap-4">
                <div className="flex-1">
                    <p className="text-xs text-gray-500">السعر الحالي</p>
                    <p className="text-xl font-bold text-green-700">{price} د.ج</p>
                </div>
                <button
                    onClick={onClick}
                    className="flex-1 bg-green-600 text-white font-bold py-3 px-6 rounded-xl shadow-lg hover:bg-green-700 transition flex items-center justify-center gap-2"
                >
                    <ShoppingCart className="w-5 h-5" />
                    اطلب الآن
                </button>
            </div>
        </div>
    );
};

export default StickyCTA;
