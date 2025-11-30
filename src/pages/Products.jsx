import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import productsData from '../data/products.json';

const Products = () => {
    const location = useLocation();
    const lang = location.pathname.startsWith('/fr') ? 'fr' : 'ar';
    const t = {
        ar: {
            title: 'منتجاتنا',
            all: 'الكل',
            currency: 'د.ج',
            viewDetails: 'عرض التفاصيل'
        },
        fr: {
            title: 'Nos Produits',
            all: 'Tous',
            currency: 'DZD',
            viewDetails: 'Voir Détails'
        }
    };

    const text = t[lang] || t.ar;
    const isFrench = lang === 'fr';

    const [category, setCategory] = useState(text.all);

    // Reset category when language changes
    useEffect(() => {
        setCategory(text.all);
    }, [lang, text.all]);

    // Get unique categories based on language
    const getCategory = (p) => isFrench ? (p.category_fr || p.category) : p.category;

    const categories = [text.all, ...new Set(productsData.products.map(p => getCategory(p)))];

    const filteredProducts = category === text.all
        ? productsData.products
        : productsData.products.filter(p => getCategory(p) === category);

    return (
        <div className="bg-gray-50 min-h-screen py-12">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold text-center text-green-800 mb-8">{text.title}</h1>

                {/* Filter */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setCategory(cat)}
                            className={`px-6 py-2 rounded-full font-semibold transition ${category === cat
                                ? 'bg-green-600 text-white shadow-lg'
                                : 'bg-white text-gray-700 hover:bg-green-50'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {filteredProducts.map((product) => (
                        <Link to={isFrench ? `/fr/products/${product.id}` : `/products/${product.id}`} key={product.id} className="group bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                            <div className="h-64 bg-gray-100 relative overflow-hidden">
                                <img src={product.image} alt={isFrench ? product.name_fr : product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                <div className="absolute top-4 right-4">
                                    <span className="bg-white/90 backdrop-blur-sm text-green-700 text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                                        {isFrench ? product.category_fr : product.category}
                                    </span>
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-green-600 transition-colors">
                                    {isFrench ? product.name_fr : product.name}
                                </h3>
                                <p className="text-gray-500 text-sm mb-4 line-clamp-2">
                                    {isFrench ? product.description_fr : product.description}
                                </p>
                                <div className="flex justify-between items-center">
                                    <span className="text-2xl font-bold text-green-700">
                                        {product.price} <span className="text-sm font-normal text-gray-500">{text.currency}</span>
                                    </span>
                                    <button className="bg-green-100 text-green-700 p-3 rounded-full hover:bg-green-600 hover:text-white transition-colors shadow-sm group-hover:shadow-md">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Products;
