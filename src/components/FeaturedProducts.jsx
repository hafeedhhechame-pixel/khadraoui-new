import React from 'react';
import { Link } from 'react-router-dom';
import productsData from '../data/products.json';

const FeaturedProducts = () => {
    const featured = productsData.products.slice(0, 4);

    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">منتجاتنا المميزة</h2>
                    <p className="text-gray-600">اخترنا لك الأفضل من مجموعتنا المتنوعة</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                    {featured.map((product) => (
                        <div key={product.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
                            <div className="h-48 bg-gray-200 relative">
                                {/* Placeholder for image if not found */}
                                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                                    {product.name}
                                </div>
                                {/* Actual image tag would go here */}
                                {/* <img src={product.image} alt={product.name} className="w-full h-full object-cover" /> */}
                            </div>
                            <div className="p-6">
                                <span className="text-xs text-green-600 font-semibold bg-green-100 px-2 py-1 rounded-full">
                                    {product.category}
                                </span>
                                <h3 className="text-lg font-bold text-gray-800 mt-2 mb-2">{product.name}</h3>
                                <div className="flex justify-between items-center mt-4">
                                    <span className="text-green-700 font-bold text-xl">{product.price} د.ج</span>
                                    <button className="bg-green-600 text-white p-2 rounded-full hover:bg-green-700 transition">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <Link to="/products" className="inline-block border-2 border-green-600 text-green-600 font-bold py-3 px-8 rounded-full hover:bg-green-600 hover:text-white transition">
                        عرض كل المنتجات
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default FeaturedProducts;
