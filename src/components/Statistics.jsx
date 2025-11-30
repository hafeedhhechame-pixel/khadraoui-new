import React, { useState, useEffect } from 'react';
import { Users, Package, Award, TrendingUp } from 'lucide-react';

const Statistics = ({ lang = 'ar' }) => {
    const [counts, setCounts] = useState({
        customers: 0,
        products: 0,
        experience: 0,
        satisfaction: 0
    });

    useEffect(() => {
        const targets = {
            customers: 1200,
            products: 18,
            experience: 7,
            satisfaction: 98
        };

        const duration = 2000;
        const steps = 60;
        const interval = duration / steps;

        let currentStep = 0;
        const timer = setInterval(() => {
            currentStep++;
            const progress = currentStep / steps;

            setCounts({
                customers: Math.floor(targets.customers * progress),
                products: Math.floor(targets.products * progress),
                experience: Math.floor(targets.experience * progress),
                satisfaction: Math.floor(targets.satisfaction * progress)
            });

            if (currentStep >= steps) {
                clearInterval(timer);
                setCounts(targets);
            }
        }, interval);

        return () => clearInterval(timer);
    }, []);

    const t = {
        ar: {
            title: 'أرقامنا تتحدث عنا',
            customers: 'عميل سعيد',
            products: 'نوع من النباتات',
            experience: 'سنوات خبرة',
            satisfaction: 'نسبة الرضا'
        },
        fr: {
            title: 'Nos Chiffres Parlent',
            customers: 'Clients Satisfaits',
            products: 'Variétés de Plantes',
            experience: 'Années d\'Expérience',
            satisfaction: 'Taux de Satisfaction'
        }
    };

    const text = t[lang] || t.ar;

    const stats = [
        {
            icon: Users,
            value: counts.customers,
            suffix: '+',
            label: text.customers,
            color: 'from-blue-500 to-blue-600'
        },
        {
            icon: Package,
            value: counts.products,
            suffix: '+',
            label: text.products,
            color: 'from-green-500 to-green-600'
        },
        {
            icon: Award,
            value: counts.experience,
            suffix: '+',
            label: text.experience,
            color: 'from-purple-500 to-purple-600'
        },
        {
            icon: TrendingUp,
            value: counts.satisfaction,
            suffix: '%',
            label: text.satisfaction,
            color: 'from-orange-500 to-orange-600'
        }
    ];

    return (
        <section className="py-16 bg-gradient-to-br from-green-600 via-green-700 to-green-800 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                    backgroundSize: '40px 40px'
                }}></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-white mb-4">{text.title}</h2>
                    <div className="w-24 h-1 bg-white mx-auto"></div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-center transform hover:scale-105 transition-all duration-300 hover:bg-white/20 border border-white/20"
                        >
                            <div className={`bg-gradient-to-br ${stat.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                                <stat.icon className="w-8 h-8 text-white" />
                            </div>
                            <div className="text-5xl font-bold text-white mb-2">
                                {stat.value}{stat.suffix}
                            </div>
                            <div className="text-xl text-green-100 font-medium">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Statistics;
