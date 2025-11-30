import React from 'react';
import { Leaf, Heart, Award, Users } from 'lucide-react';

const About = ({ lang = 'ar' }) => {
    const t = {
        ar: {
            title: 'من نحن',
            desc: 'خضراوي هو مشروعك الأول والموثوق لشراء الأشجار والنباتات في الجزائر. نحن نؤمن بأن كل بيت يستحق لمسة خضراء تضفي الحياة والجمال على المكان.',
            vision: { title: 'رؤيتنا', desc: 'أن نكون الخيار الأول لكل من يبحث عن الجودة والتنوع في عالم النباتات، ونساهم في نشر الوعي البيئي وتخضير كل بيت جزائري.' },
            mission: { title: 'مهمتنا', desc: 'نوفر لك أفضل أنواع الشتلات والأشجار بجودة عالية وأسعار مناسبة، مع خدمة توصيل سريعة ونصائح مجانية للعناية بنباتاتك.' },
            values: {
                title: 'قيمنا',
                quality: { title: 'الجودة العالية', desc: 'نختار شتلاتنا بعناية فائقة لضمان صحتها وقوتها، ونقدم لك فقط الأفضل.' },
                service: { title: 'خدمة العملاء', desc: 'رضاك هو أولويتنا، ونحن دائماً هنا لمساعدتك والإجابة على استفساراتك.' },
                sustainability: { title: 'الاستدامة', desc: 'نؤمن بأهمية الحفاظ على البيئة ونشجع على زراعة النباتات المحلية والمستدامة.' }
            },
            why: {
                title: 'لماذا تختار خضراوي؟',
                variety: { title: 'تشكيلة واسعة', desc: 'نوفر أنواعاً متعددة من الأشجار المثمرة والنباتات الزينة' },
                price: { title: 'أسعار منافسة', desc: 'نقدم أفضل الأسعار مع الحفاظ على الجودة العالية' },
                delivery: { title: 'توصيل سريع', desc: 'نوصل طلبك إلى باب منزلك بأمان وسرعة' },
                advice: { title: 'استشارات مجانية', desc: 'نساعدك في اختيار النباتات المناسبة والعناية بها' }
            }
        },
        fr: {
            title: 'À Propos',
            desc: 'Khadraoui est votre premier choix de confiance pour acheter des arbres et des plantes en Algérie. Nous croyons que chaque maison mérite une touche verte qui ajoute vie et beauté.',
            vision: { title: 'Notre Vision', desc: 'Être le premier choix pour tous ceux qui recherchent la qualité et la diversité dans le monde des plantes, et contribuer à la sensibilisation environnementale.' },
            mission: { title: 'Notre Mission', desc: 'Nous vous fournissons les meilleurs types de plants et d\'arbres de haute qualité à des prix abordables, avec une livraison rapide et des conseils gratuits.' },
            values: {
                title: 'Nos Valeurs',
                quality: { title: 'Haute Qualité', desc: 'Nous sélectionnons nos plants avec grand soin pour garantir leur santé et leur vigueur.' },
                service: { title: 'Service Client', desc: 'Votre satisfaction est notre priorité, et nous sommes toujours là pour vous aider.' },
                sustainability: { title: 'Durabilité', desc: 'Nous croyons en l\'importance de préserver l\'environnement et encourageons la plantation durable.' }
            },
            why: {
                title: 'Pourquoi choisir Khadraoui ?',
                variety: { title: 'Large Gamme', desc: 'Nous proposons plusieurs types d\'arbres fruitiers et de plantes ornementales' },
                price: { title: 'Prix Compétitifs', desc: 'Nous offrons les meilleurs prix tout en maintenant une haute qualité' },
                delivery: { title: 'Livraison Rapide', desc: 'Nous livrons votre commande à votre porte en toute sécurité et rapidité' },
                advice: { title: 'Conseils Gratuits', desc: 'Nous vous aidons à choisir les plantes appropriées et à en prendre soin' }
            }
        }
    };

    const text = t[lang] || t.ar;
    const isFrench = lang === 'fr';

    return (
        <section id="about" className="py-16 bg-white">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-12">
                    <img src="/images/logo.png" alt="خضراوي" className="h-24 md:h-28 mx-auto mb-6" />
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">{text.title}</h2>
                    <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        {text.desc}
                    </p>
                </div>

                {/* Mission & Vision */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                        <div className="flex items-center mb-4">
                            <div className="bg-green-600 p-3 rounded-full">
                                <Leaf className="w-8 h-8 text-white" />
                            </div>
                            <h3 className={`text-2xl font-bold text-gray-800 ${isFrench ? 'ml-4' : 'mr-4'}`}>{text.vision.title}</h3>
                        </div>
                        <p className="text-gray-700 leading-relaxed">
                            {text.vision.desc}
                        </p>
                    </div>

                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                        <div className="flex items-center mb-4">
                            <div className="bg-blue-600 p-3 rounded-full">
                                <Heart className="w-8 h-8 text-white" />
                            </div>
                            <h3 className={`text-2xl font-bold text-gray-800 ${isFrench ? 'ml-4' : 'mr-4'}`}>{text.mission.title}</h3>
                        </div>
                        <p className="text-gray-700 leading-relaxed">
                            {text.mission.desc}
                        </p>
                    </div>
                </div>

                {/* Values */}
                <div className="mb-12">
                    <h3 className="text-3xl font-bold text-center text-gray-800 mb-8">{text.values.title}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center p-6 bg-gray-50 rounded-xl hover:bg-green-50 transition-colors">
                            <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Award className="w-8 h-8 text-white" />
                            </div>
                            <h4 className="text-xl font-bold text-gray-800 mb-3">{text.values.quality.title}</h4>
                            <p className="text-gray-600">
                                {text.values.quality.desc}
                            </p>
                        </div>

                        <div className="text-center p-6 bg-gray-50 rounded-xl hover:bg-green-50 transition-colors">
                            <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Users className="w-8 h-8 text-white" />
                            </div>
                            <h4 className="text-xl font-bold text-gray-800 mb-3">{text.values.service.title}</h4>
                            <p className="text-gray-600">
                                {text.values.service.desc}
                            </p>
                        </div>

                        <div className="text-center p-6 bg-gray-50 rounded-xl hover:bg-green-50 transition-colors">
                            <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Leaf className="w-8 h-8 text-white" />
                            </div>
                            <h4 className="text-xl font-bold text-gray-800 mb-3">{text.values.sustainability.title}</h4>
                            <p className="text-gray-600">
                                {text.values.sustainability.desc}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Why Choose Us */}
                <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-10 rounded-2xl shadow-xl">
                    <h3 className="text-3xl font-bold text-center mb-8">{text.why.title}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="flex items-start">
                            <div className={`bg-white/20 p-2 rounded-lg mt-1 ${isFrench ? 'mr-4' : 'ml-4'}`}>
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div>
                                <h4 className="font-bold text-lg mb-1">{text.why.variety.title}</h4>
                                <p className="text-green-100">{text.why.variety.desc}</p>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <div className={`bg-white/20 p-2 rounded-lg mt-1 ${isFrench ? 'mr-4' : 'ml-4'}`}>
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div>
                                <h4 className="font-bold text-lg mb-1">{text.why.price.title}</h4>
                                <p className="text-green-100">{text.why.price.desc}</p>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <div className={`bg-white/20 p-2 rounded-lg mt-1 ${isFrench ? 'mr-4' : 'ml-4'}`}>
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div>
                                <h4 className="font-bold text-lg mb-1">{text.why.delivery.title}</h4>
                                <p className="text-green-100">{text.why.delivery.desc}</p>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <div className={`bg-white/20 p-2 rounded-lg mt-1 ${isFrench ? 'mr-4' : 'ml-4'}`}>
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div>
                                <h4 className="font-bold text-lg mb-1">{text.why.advice.title}</h4>
                                <p className="text-green-100">{text.why.advice.desc}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
