import React from 'react';
import { Shield, Truck, Award, HeadphonesIcon } from 'lucide-react';

const TrustBadges = () => {
    const badges = [
        {
            icon: Shield,
            title: 'ضمان الجودة',
            description: '100% شتلات أصلية',
            color: 'from-green-500 to-green-600'
        },
        {
            image: '/images/trendbox-logo.jpg',
            title: 'شراكة لوجستية',
            description: 'توصيل عبر TrendBox',
            color: 'from-blue-500 to-blue-600',
            isImage: true
        },
        {
            icon: Award,
            title: 'خبرة 7 سنوات',
            description: 'في مجال الزراعة',
            color: 'from-yellow-500 to-yellow-600'
        },
        {
            icon: HeadphonesIcon,
            title: 'دعم متواصل',
            description: 'نصائح مجانية',
            color: 'from-purple-500 to-purple-600'
        }
    ];

    return (
        <section className="py-12 bg-white border-y border-gray-100">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {badges.map((badge, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center text-center p-4 rounded-xl hover:bg-gray-50 transition-all duration-300 group"
                        >
                            <div className={`bg-gradient-to-br ${badge.color} p-4 rounded-full mb-3 group-hover:scale-110 transition-transform duration-300 shadow-lg flex items-center justify-center w-16 h-16`}>
                                {badge.isImage ? (
                                    <img
                                        src={badge.image}
                                        alt={badge.title}
                                        className="w-full h-full object-contain rounded-full bg-white"
                                    />
                                ) : (
                                    <badge.icon className="w-8 h-8 text-white" />
                                )}
                            </div>
                            <h3 className="font-bold text-gray-800 mb-1 text-sm md:text-base">{badge.title}</h3>
                            <p className="text-gray-500 text-xs md:text-sm">{badge.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrustBadges;
