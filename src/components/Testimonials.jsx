import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = ({ lang = 'ar' }) => {
    const content = {
        ar: {
            title: 'ماذا يقول عملاؤنا؟',
            subtitle: 'قصص نجاح حقيقية من زبائننا الكرام',
            reviews: [
                {
                    name: "عبد الرحمن .خ",
                    location: "غرداية",
                    text: "استثمرت في 10 شجيرات للسدر اليمني واليوم الحمد لله مكتفي ذاتيا من العمل.",
                    rating: 5,
                    featured: true
                },
                {
                    name: "أحمد بن علي",
                    location: "بسكرة",
                    text: "ما شاء الله، الشتلة وصلتني في حالة ممتازة ومغلفة بإحكام. زرعتها عندي شهرين والنمو تاعها سريع جداً. أنصح بها.",
                    rating: 5
                },
                {
                    name: "سليم قسنطيني",
                    location: "وهران",
                    text: "تعامل راقي وتوصيل سريع. الشجرة فعلاً تتحمل الحرارة، حطيتها في الفناء والظل تاعها بدا يبان. شكراً خضراوي.",
                    rating: 5
                }
            ]
        },
        fr: {
            title: 'Ce que disent nos clients',
            subtitle: 'De vraies histoires de réussite',
            reviews: [
                {
                    name: "Abderrahmane K.",
                    location: "Ghardaïa",
                    text: "J'ai investi dans 10 arbustes de Sidr Yéménite et aujourd'hui, Dieu merci, je suis autosuffisant.",
                    rating: 5,
                    featured: true
                },
                {
                    name: "Ahmed Ben Ali",
                    location: "Biskra",
                    text: "Machallah, la plante est arrivée en excellent état et bien emballée. Je l'ai plantée il y a deux mois et sa croissance est très rapide. Je recommande.",
                    rating: 5
                },
                {
                    name: "Salim Constantini",
                    location: "Oran",
                    text: "Service haut de gamme et livraison rapide. L'arbre résiste vraiment à la chaleur, je l'ai mis dans la cour et son ombre commence à apparaître. Merci Khadraoui.",
                    rating: 5
                }
            ]
        }
    };

    const t = content[lang] || content.ar;
    const reviews = t.reviews;

    return (
        <section className="py-16 bg-green-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">{t.title}</h2>
                    <p className="text-gray-600">{t.subtitle}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {reviews.map((review, index) => (
                        <div
                            key={index}
                            className={`p-8 rounded-2xl shadow-md relative transition-transform hover:-translate-y-1 ${review.featured
                                ? 'bg-white border-2 border-primary ring-4 ring-green-50 transform scale-105 md:scale-110 z-10'
                                : 'bg-white'
                                }`}
                        >
                            <Quote className={`absolute top-4 left-4 w-8 h-8 rotate-180 ${review.featured ? 'text-primary' : 'text-gray-200'}`} />
                            <div className="flex text-yellow-400 mb-4">
                                {[...Array(review.rating)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-current" />
                                ))}
                            </div>
                            <p className={`mb-6 leading-relaxed ${review.featured ? 'text-gray-800 font-bold text-lg' : 'text-gray-700'}`}>
                                "{review.text}"
                            </p>
                            <div className="flex items-center gap-3 border-t pt-4">
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${review.featured ? 'bg-primary text-white' : 'bg-green-100 text-green-700'
                                    }`}>
                                    {review.name[0]}
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900">{review.name}</h4>
                                    <span className="text-xs text-gray-500">{review.location}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
