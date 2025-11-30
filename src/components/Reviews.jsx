import React from 'react';
import { Star, Quote } from 'lucide-react';

const Reviews = ({ lang = 'ar' }) => {
    const content = {
        ar: {
            title: 'ماذا يقول عملاؤنا؟',
            subtitle: 'ثقتكم هي سر نجاحنا',
            reviews: [
                {
                    id: 1,
                    name: "أحمد بن محمد",
                    location: "الجزائر العاصمة",
                    rating: 5,
                    text: "ما شاء الله، الشتلات وصلت في حالة ممتازة والتغليف كان محكماً جداً. شكراً لكم على المصداقية.",
                    date: "منذ يومين"
                },
                {
                    id: 2,
                    name: "سارة .ع",
                    location: "وهران",
                    rating: 5,
                    text: "تعامل راقي وسرعة في التوصيل. شجرة الليمون بدأت تزهر عندي، أنصح الجميع بالتعامل معهم.",
                    date: "منذ أسبوع"
                },
                {
                    id: 3,
                    name: "كريم .س",
                    location: "قسنطينة",
                    rating: 5,
                    text: "أفضل مشتلة تعاملت معها. النصائح التي قدموها لي بعد الشراء كانت مفيدة جداً.",
                    date: "منذ 3 أيام"
                }
            ]
        },
        fr: {
            title: 'Ce que disent nos clients',
            subtitle: 'Votre confiance est notre secret de réussite',
            reviews: [
                {
                    id: 1,
                    name: "Ahmed Ben Mohamed",
                    location: "Alger",
                    rating: 5,
                    text: "Machallah, les plants sont arrivés en excellent état et l'emballage était très soigné. Merci pour votre crédibilité.",
                    date: "Il y a 2 jours"
                },
                {
                    id: 2,
                    name: "Sarah A.",
                    location: "Oran",
                    rating: 5,
                    text: "Service haut de gamme et livraison rapide. Le citronnier commence à fleurir chez moi, je recommande à tout le monde.",
                    date: "Il y a une semaine"
                },
                {
                    id: 3,
                    name: "Karim S.",
                    location: "Constantine",
                    rating: 5,
                    text: "La meilleure pépinière avec laquelle j'ai traité. Les conseils qu'ils m'ont donnés après l'achat étaient très utiles.",
                    date: "Il y a 3 jours"
                }
            ]
        }
    };

    const t = content[lang] || content.ar;
    const reviews = t.reviews;

    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">{t.title}</h2>
                    <div className="w-24 h-1 bg-green-600 mx-auto mb-4"></div>
                    <p className="text-xl text-gray-600">{t.subtitle}</p>
                </div>

                {/* Reviews Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {reviews.map((review) => (
                        <div key={review.id} className="bg-gray-50 p-8 rounded-2xl shadow-lg relative hover:-translate-y-2 transition-transform duration-300">
                            {/* Quote Icon */}
                            <div className="absolute top-4 left-4 text-green-200">
                                <Quote size={40} />
                            </div>

                            {/* Stars */}
                            <div className="flex text-yellow-400 mb-4">
                                {[...Array(review.rating)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-current" />
                                ))}
                            </div>

                            {/* Text */}
                            <p className="text-gray-700 mb-6 leading-relaxed relative z-10">
                                "{review.text}"
                            </p>

                            {/* Author Info */}
                            <div className="flex items-center border-t pt-4">
                                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold text-lg ml-3">
                                    {review.name.charAt(0)}
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900">{review.name}</h4>
                                    <p className="text-sm text-gray-500">{review.location}</p>
                                </div>
                                <span className="mr-auto text-xs text-gray-400">{review.date}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Reviews;
