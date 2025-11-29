import React from 'react';
import { Link } from 'react-router-dom';
import productsData from '../data/products.json';

const FeaturedProducts = () => {
    // IDs for Lemon (1), Olive (4), Fig (6), Sidr (7), Bougainvillea (8), Moringa (9)
    const availableIds = [1, 4, 6, 7, 8, 9];
    const featured = productsData.products.filter(product => availableIds.includes(product.id));

    return (
        <section className="py-20 bg-gradient-to-b from-white to-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-14">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">المنتجات المتوفرة</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-green-600 mx-auto mb-4"></div>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">اخترنا لك الأفضل من مجموعتنا المتنوعة من الأشجار والنباتات</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {featured.map((product) => (
                        <Link to={`/products/${product.id}`} key={product.id} className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 border border-gray-100 relative">
                            <div className="h-56 bg-gradient-to-br from-green-50 to-green-100 relative overflow-hidden">
                                <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />

                                {/* NEW Badge for Moringa */}
                                {product.id === 9 && (
                                    <div className="absolute top-3 left-3 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg animate-pulse">
                                        جديد!
                                    </div>
                                )}

                                {/* Category Badge */}
                                <div className="absolute top-3 right-3">
                                    <span className="bg-white/95 backdrop-blur-sm text-green-700 text-xs font-bold px-3 py-1.5 rounded-full shadow-md">
                                        {product.category}
                                    </span>
                                </div>

                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>
                            <div className="p-5">
                                <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-green-600 transition-colors line-clamp-2">{product.name}</h3>
                                <p className="text-gray-500 text-sm line-clamp-2 mb-4">{product.description}</p>
                                <div className="flex justify-between items-center">
                                    <span className="text-2xl font-bold bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent">
                                        {product.price} <span className="text-sm font-normal text-gray-500">د.ج</span>
                                    </span>
                                    <button className="bg-gradient-to-r from-green-500 to-green-600 text-white p-2.5 rounded-full hover:from-green-600 hover:to-green-700 transition-all shadow-md group-hover:shadow-lg transform group-hover:scale-110">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </Link>
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
