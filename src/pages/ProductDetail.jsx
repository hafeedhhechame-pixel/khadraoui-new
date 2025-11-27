import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowRight, Phone, ShoppingCart } from 'lucide-react';
import productsData from '../data/products.json';

const ProductDetail = () => {
    const { id } = useParams();
    const product = productsData.products.find(p => p.id === parseInt(id));

    if (!product) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">المنتج غير موجود</h2>
                <Link to="/products" className="text-green-600 hover:underline flex items-center">
                    <ArrowRight className="ml-2" /> العودة للمنتجات
                </Link>
            </div>
        );
    }

    return (
        <div className="bg-white min-h-screen py-12">
            <div className="container mx-auto px-4">
                <Link to="/products" className="inline-flex items-center text-gray-600 hover:text-green-600 mb-8 transition">
                    <ArrowRight className="ml-2 w-5 h-5" /> العودة للمنتجات
                </Link>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                    {/* Image */}
                    <div className="bg-gray-100 rounded-2xl overflow-hidden h-96 relative shadow-lg">
                        <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-2xl">
                            {product.name}
                        </div>
                        {/* <img src={product.image} alt={product.name} className="w-full h-full object-cover" /> */}
                    </div>

                    {/* Info */}
                    <div>
                        <span className="text-green-600 font-semibold bg-green-100 px-3 py-1 rounded-full text-sm">
                            {product.category}
                        </span>
                        <h1 className="text-4xl font-bold text-gray-900 mt-4 mb-2">{product.name}</h1>
                        <p className="text-3xl font-bold text-green-700 mb-6">{product.price} د.ج</p>

                        <div className="prose prose-lg text-gray-600 mb-8">
                            <p>{product.description}</p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href={`https://wa.me/213123456789?text=أريد طلب ${product.name}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-xl flex items-center justify-center transition shadow-lg hover:shadow-xl"
                            >
                                <ShoppingCart className="ml-2" />
                                اطلب عبر واتساب
                            </a>
                            <a
                                href="tel:+213123456789"
                                className="flex-1 bg-white border-2 border-green-600 text-green-600 hover:bg-green-50 font-bold py-4 px-8 rounded-xl flex items-center justify-center transition"
                            >
                                <Phone className="ml-2" />
                                اتصل للطلب
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
