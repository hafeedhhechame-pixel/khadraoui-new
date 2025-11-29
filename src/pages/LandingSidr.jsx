import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Phone, Check, Star, MapPin, ShieldCheck, Truck } from 'lucide-react';
import OrderForm from '../components/OrderForm';
import FAQ from '../components/FAQ';
import TrustBadges from '../components/TrustBadges';
import Testimonials from '../components/Testimonials';
import StickyCTA from '../components/StickyCTA';
import UrgencyBar from '../components/UrgencyBar';

const LandingSidr = () => {
    // Facebook Pixel ViewContent Event
    useEffect(() => {
        if (window.fbq) {
            window.fbq('track', 'ViewContent', {
                content_name: 'شجيرة السدر اليمني الأصيلة',
                content_ids: ['sidr-001'],
                content_type: 'product',
                value: 1100,
                currency: 'DZD'
            });
        }
    }, []);

    const product = {
        name: "شجيرة السدر اليمني الأصيلة",
        price: 1100,
        oldPrice: 1500,
        image: "/images/sidr-1.jpg",
        features: [
            "تتحمل أقسى الظروف المناخية (الحرارة والجفاف)",
            "تنمو بسرعة وتعطي ظلاً وارفاً",
            "ثمار النبق اللذيذة والمفيدة صحياً",
            "أوراقها تستخدم في العلاج والطب النبوي",
            "مناسبة جداً لأجواء الجزائر والجنوب"
        ]
    };

    const whatsappMessage = `مرحباً، أريد طلب شجيرة السدر اليمني بسعر ${product.price} د.ج`;
    const whatsappLink = `https://wa.me/213799330612?text=${encodeURIComponent(whatsappMessage)}`;

    const scrollToOrder = () => {
        document.getElementById('order-form').scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="bg-gray-50 min-h-screen font-sans pb-20 md:pb-0" dir="rtl">
            <Helmet>
                <title>{product.name} | خضراوي</title>
                <meta name="description" content="احصل على شجيرة السدر اليمني الأصيلة. تتحمل الحرارة، سريعة النمو، ومفيدة جداً. اطلبها الآن بسعر 1100 د.ج فقط." />
            </Helmet>

            <StickyCTA price={product.price} onClick={scrollToOrder} />

            {/* Navbar Simple */}
            <nav className="bg-white shadow-sm py-4">
                <div className="container mx-auto px-4 flex justify-center items-center">
                    <div className="text-2xl font-bold text-green-700">خضراوي</div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="bg-gradient-to-b from-white to-gray-50 overflow-hidden">
                <div className="container mx-auto px-4 py-12 md:py-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        {/* Image */}
                        <div className="relative order-2 md:order-1">
                            <div className="absolute inset-0 bg-gradient-to-br from-green-100 to-green-200 rounded-3xl transform rotate-3 scale-105 -z-10 opacity-50"></div>
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full rounded-2xl shadow-2xl transform hover:scale-105 transition duration-500"
                            />
                            <div className="absolute top-4 right-4 bg-gradient-to-r from-red-500 to-red-600 text-white px-5 py-2.5 rounded-full font-bold shadow-lg animate-pulse">
                                <span className="text-lg">🔥 عرض خاص</span>
                            </div>
                            <div className="absolute -bottom-4 -right-4 bg-white px-6 py-4 rounded-xl shadow-xl">
                                <div className="flex items-center gap-2">
                                    <div className="flex text-yellow-400">
                                        <Star className="w-4 h-4 fill-current" />
                                        <Star className="w-4 h-4 fill-current" />
                                        <Star className="w-4 h-4 fill-current" />
                                        <Star className="w-4 h-4 fill-current" />
                                        <Star className="w-4 h-4 fill-current" />
                                    </div>
                                    <span className="text-gray-700 text-sm font-bold">5.0</span>
                                </div>
                                <p className="text-xs text-gray-500 mt-1">+500 عميل سعيد</p>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="order-1 md:order-2">
                            <div className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-bold mb-4">
                                ✨ الأكثر مبيعاً
                            </div>

                            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                                {product.name}
                            </h1>

                            <p className="text-2xl md:text-3xl font-bold text-green-600 mb-6">
                                بركة وجمال في منزلك 🌿
                            </p>

                            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                                الشجرة المباركة التي يبحث عنها الجميع. تتحمل العطش، تعطي الظل، وثمارها دواء وشفاء. الخيار الأفضل لحديقتك أو أمام منزلك.
                            </p>

                            <UrgencyBar />

                            {/* Price */}
                            <div className="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-2xl mb-8 border-2 border-green-200">
                                <div className="flex items-baseline gap-4">
                                    <div className="text-5xl font-bold text-green-700">{product.price} د.ج</div>
                                    <div className="text-2xl text-gray-400 line-through">{product.oldPrice} د.ج</div>
                                    <div className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                                        وفر {product.oldPrice - product.price} د.ج
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center gap-3 text-gray-600 mb-8">
                                <ShieldCheck className="w-5 h-5 text-green-600" />
                                <span className="font-medium">دفع عند الاستلام</span>
                                <span className="text-gray-300">•</span>
                                <span className="font-medium">ضمان الجودة 100%</span>
                            </div>

                            <button
                                onClick={scrollToOrder}
                                className="w-full md:w-auto bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-10 rounded-full shadow-lg transition text-lg animate-bounce"
                            >
                                اطلب شتلتك الآن
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <TrustBadges />

            {/* Features Grid */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">لماذا تختار السدر اليمني؟</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {product.features.map((feature, index) => (
                            <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition flex items-start gap-4">
                                <div className="bg-green-100 p-3 rounded-full text-green-600 shrink-0">
                                    <Check className="w-6 h-6" />
                                </div>
                                <p className="text-lg text-gray-700 font-medium pt-2">{feature}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Testimonials />

            {/* FAQ Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">أسئلة يتكرر طرحها</h2>
                        <p className="text-gray-600">كل ما تحتاج معرفته عن شجرة السدر اليمني</p>
                    </div>
                    <FAQ questions={[
                        {
                            question: "هل هذه الشجرة مناسبة لمناخي؟",
                            answer: "نعم، شجرة السدر اليمني معروفة بمقاومتها الشديدة للحرارة والجفاف، وهي مثالية للمناخ الجزائري خاصة في المناطق الحارة والجنوبية."
                        },
                        {
                            question: "كم تستغرق لتنمو؟",
                            answer: "السدر اليمني سريع النمو جداً. يمكن أن يصل ارتفاعها إلى مترين خلال سنة واحدة مع العناية الجيدة والري المنتظم في البداية."
                        },
                        {
                            question: "هل تحتاج لعناية خاصة؟",
                            answer: "لا، هي شجرة قوية جداً. تحتاج فقط للري المنتظم في الأشهر الأولى حتى تثبت جذورها، بعدها تعتمد على نفسها وتتحمل العطش."
                        },
                        {
                            question: "متى تثمر؟",
                            answer: "تبدأ بالإثمار عادة من السنة الثانية أو الثالثة. ثمارها (النبق) لذيذة ومفيدة جداً، وأوراقها تستخدم في العلاج."
                        },
                        {
                            question: "كيف يتم التوصيل؟",
                            answer: "نوصلها لك حتى باب منزلك أو لمكتب التوصيل في ولايتك. الشتلة تكون مغلفة بإحكام لضمان وصولها سليمة 100%."
                        }
                    ]} />
                </div>
            </section>

            {/* Order Form Section */}
            <section id="order-form" className="py-16 bg-gradient-to-b from-gray-50 to-white">
                <div className="container mx-auto px-4 max-w-2xl">
                    <OrderForm product={product} />
                </div>
            </section>

            {/* Delivery Info */}
            <section className="py-12 bg-white border-t">
                <div className="container mx-auto px-4 text-center">
                    <div className="inline-flex items-center justify-center p-4 bg-green-50 rounded-full mb-6">
                        <Truck className="w-8 h-8 text-green-600 ml-3" />
                        <span className="text-xl font-bold text-green-800">توصيل متوفر لـ 58 ولاية</span>
                    </div>
                    <p className="text-gray-600 max-w-2xl mx-auto mb-8">
                        نضمن لك وصول الشتلة سليمة وبحالة ممتازة. الدفع يكون بعد استلامك للطلبية والتأكد منها.
                    </p>
                    <button
                        onClick={scrollToOrder}
                        className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-10 rounded-full shadow-lg transition"
                    >
                        اطلب شتلتك الآن
                    </button>
                </div>
            </section>

            {/* Footer Simple */}
            <footer className="bg-gray-900 text-white py-8 text-center">
                <p>© {new Date().getFullYear()} خضراوي. جميع الحقوق محفوظة.</p>
            </footer>
        </div>
    );
};

export default LandingSidr;
