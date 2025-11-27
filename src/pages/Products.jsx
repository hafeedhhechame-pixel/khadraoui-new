import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import productsData from '../data/products.json';

const Products = () => {
    const [category, setCategory] = useState('الكل');

    const categories = ['الكل', ...new Set(productsData.products.map(p => p.category))];

    const filteredProducts = category === 'الكل'
        ? productsData.products
        : productsData.products.filter(p => p.category === category);

    return (
        <div className="bg-gray-50 min-h-screen py-12">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold text-center text-green-800 mb-8">منتجاتنا</h1>

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
                        <Link to={`/products/${product.id}`} key={product.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300 block">
                            <div className="h-64 bg-gray-200 relative">
                                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                                    {product.name}
                                </div>
                                {/* <img src={product.image} alt={product.name} className="w-full h-full object-cover" /> */}
                            </div>
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-xl font-bold text-gray-800">{product.name}</h3>
                                    <span className="text-green-600 font-bold">{product.price} د.ج</span>
                                </div>
                                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>
                                <span className="text-xs text-green-600 bg-green-100 px-2 py-1 rounded-full">
                                    {product.category}
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Products;
