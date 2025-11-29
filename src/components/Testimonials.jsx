import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
    const reviews = [
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
        },
        {
            name: "أمينة .م",
            location: "الجزائر العاصمة",
            text: "كنت مترددة نطلب شجر عبر الانترنت، لكن التجربة كانت هايلة. الشتلة خضراء ومنعشة، وخدمة العملاء جاوبوني على كل استفساراتي.",
            rating: 5
        }
    ];

    return (
        <section className="py-16 bg-green-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">ماذا يقول عملاؤنا؟</h2>
                    <p className="text-gray-600">قصص نجاح حقيقية من زبائننا الكرام</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {reviews.map((review, index) => (
                        <div key={index} className="bg-white p-8 rounded-2xl shadow-md relative">
                            <Quote className="absolute top-4 left-4 w-8 h-8 text-green-100 rotate-180" />
                            <div className="flex text-yellow-400 mb-4">
                                {[...Array(review.rating)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-current" />
                                ))}
                            </div>
                            <p className="text-gray-700 mb-6 leading-relaxed">"{review.text}"</p>
                            <div className="flex items-center gap-3 border-t pt-4">
                                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-700 font-bold">
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
