import React, { useState } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import { ArrowRight, Phone, ShoppingCart } from 'lucide-react';
import productsData from '../data/products.json';

import SEO from '../components/SEO';
import OrderForm from '../components/OrderForm';

const ProductDetail = () => {
    const { id } = useParams();
    const location = useLocation();
    const lang = location.pathname.startsWith('/fr') ? 'fr' : 'ar';
    const isFrench = lang === 'fr';

    const product = productsData.products.find(p => p.id === parseInt(id));

    // Facebook Pixel ViewContent Event
    React.useEffect(() => {
        if (product && window.fbq) {
            window.fbq('track', 'ViewContent', {
                content_name: product.name,
                content_ids: [product.id.toString()],
                content_type: 'product',
                value: product.price,
                currency: 'DZD'
            });
        }
    }, [product]);

    // State to manage the currently selected image
    const [selectedImage, setSelectedImage] = useState(product ? product.image : '');

    const t = {
        ar: {
            notFound: 'المنتج غير موجود',
            backToProducts: 'العودة للمنتجات',
            currency: 'د.ج'
        },
        fr: {
            notFound: 'Produit Introuvable',
            backToProducts: 'Retour aux Produits',
            currency: 'DZD'
        }
    };

    const text = t[lang];

    if (!product) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
                <SEO title="Product Not Found" description="The product you are looking for does not exist." />
                <h2 className="text-2xl font-bold text-gray-800 mb-4">{text.notFound}</h2>
                <Link to={isFrench ? "/fr/products" : "/products"} className="text-green-600 hover:underline flex items-center">
                    <ArrowRight className={isFrench ? "mr-2" : "ml-2"} /> {text.backToProducts}
                </Link>
            </div>
        );
    }

    // Use images array if available, otherwise fallback to single image
    const images = product.images || [product.image];

    const productName = isFrench ? product.name_fr : product.name;
    const productDesc = isFrench ? product.description_fr : product.description;
    const productCategory = isFrench ? product.category_fr : product.category;

    return (
        <div className="bg-white min-h-screen py-12">
            <SEO
                title={productName}
                description={productDesc}
                canonical={`https://khadraoui.dz/${isFrench ? 'fr/' : ''}products/${product.id}`}
                type="product"
            />
            <div className="container mx-auto px-4">
                <Link to={isFrench ? "/fr/products" : "/products"} className="inline-flex items-center text-gray-600 hover:text-green-600 mb-8 transition">
                    <ArrowRight className={`w-5 h-5 ${isFrench ? 'mr-2' : 'ml-2'}`} /> {text.backToProducts}
                </Link>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                    {/* Image Gallery Section */}
                    <div className="space-y-4">
                        {/* Main Image */}
                        <div className="bg-gray-100 rounded-2xl overflow-hidden h-96 relative shadow-lg">
                            <img
                                src={selectedImage || product.image}
                                alt={productName}
                                className="w-full h-full object-cover transition duration-500 transform hover:scale-105"
                            />
                        </div>

                        {/* Thumbnails */}
                        {images.length > 1 && (
                            <div className="flex gap-4 overflow-x-auto pb-2">
                                {images.map((img, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setSelectedImage(img)}
                                        className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition ${selectedImage === img ? 'border-green-600 ring-2 ring-green-100' : 'border-transparent hover:border-green-300'
                                            }`}
                                    >
                                        <img src={img} alt={`${productName} ${index + 1}`} className="w-full h-full object-cover" />
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Info */}
                    <div>
                        <span className="text-green-600 font-semibold bg-green-100 px-3 py-1 rounded-full text-sm">
                            {productCategory}
                        </span>
                        <h1 className="text-4xl font-bold text-gray-900 mt-4 mb-2">{productName}</h1>
                        <p className="text-3xl font-bold text-green-700 mb-6">{product.price} {text.currency}</p>

                        <div className="prose prose-lg text-gray-600 mb-8">
                            <p>{productDesc}</p>
                        </div>
                    </div>
                </div>

                {/* Order Form Section */}
                <div className="mt-16 max-w-2xl mx-auto">
                    <OrderForm product={product} lang={lang} />
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
