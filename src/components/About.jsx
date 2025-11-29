import React from 'react';
import { Leaf, Heart, Award, Users } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="py-16 bg-white">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-12">
                    <img src="/images/logo.png" alt="خضراوي" className="h-24 md:h-28 mx-auto mb-6" />
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">من نحن</h2>
                    <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        خضراوي هو مشروعك الأول والموثوق لشراء الأشجار والنباتات في الجزائر. نحن نؤمن بأن كل بيت يستحق لمسة خضراء تضفي الحياة والجمال على المكان.
                    </p>
                </div>

                {/* Mission & Vision */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                        <div className="flex items-center mb-4">
                            <div className="bg-green-600 p-3 rounded-full">
                                <Leaf className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800 mr-4">رؤيتنا</h3>
                        </div>
                        <p className="text-gray-700 leading-relaxed">
                            أن نكون الخيار الأول لكل من يبحث عن الجودة والتنوع في عالم النباتات، ونساهم في نشر الوعي البيئي وتخضير كل بيت جزائري.
                        </p>
                    </div>

                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                        <div className="flex items-center mb-4">
                            <div className="bg-blue-600 p-3 rounded-full">
                                <Heart className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800 mr-4">مهمتنا</h3>
                        </div>
                        <p className="text-gray-700 leading-relaxed">
                            نوفر لك أفضل أنواع الشتلات والأشجار بجودة عالية وأسعار مناسبة، مع خدمة توصيل سريعة ونصائح مجانية للعناية بنباتاتك.
                        </p>
                    </div>
                </div>

                {/* Values */}
                <div className="mb-12">
                    <h3 className="text-3xl font-bold text-center text-gray-800 mb-8">قيمنا</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center p-6 bg-gray-50 rounded-xl hover:bg-green-50 transition-colors">
                            <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Award className="w-8 h-8 text-white" />
                            </div>
                            <h4 className="text-xl font-bold text-gray-800 mb-3">الجودة العالية</h4>
                            <p className="text-gray-600">
                                نختار شتلاتنا بعناية فائقة لضمان صحتها وقوتها، ونقدم لك فقط الأفضل.
                            </p>
                        </div>

                        <div className="text-center p-6 bg-gray-50 rounded-xl hover:bg-green-50 transition-colors">
                            <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Users className="w-8 h-8 text-white" />
                            </div>
                            <h4 className="text-xl font-bold text-gray-800 mb-3">خدمة العملاء</h4>
                            <p className="text-gray-600">
                                رضاك هو أولويتنا، ونحن دائماً هنا لمساعدتك والإجابة على استفساراتك.
                            </p>
                        </div>

                        <div className="text-center p-6 bg-gray-50 rounded-xl hover:bg-green-50 transition-colors">
                            <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Leaf className="w-8 h-8 text-white" />
                            </div>
                            <h4 className="text-xl font-bold text-gray-800 mb-3">الاستدامة</h4>
                            <p className="text-gray-600">
                                نؤمن بأهمية الحفاظ على البيئة ونشجع على زراعة النباتات المحلية والمستدامة.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Why Choose Us */}
                <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-10 rounded-2xl shadow-xl">
                    <h3 className="text-3xl font-bold text-center mb-8">لماذا تختار خضراوي؟</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="flex items-start">
                            <div className="bg-white/20 p-2 rounded-lg ml-4 mt-1">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div>
                                <h4 className="font-bold text-lg mb-1">تشكيلة واسعة</h4>
                                <p className="text-green-100">نوفر أنواعاً متعددة من الأشجار المثمرة والنباتات الزينة</p>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <div className="bg-white/20 p-2 rounded-lg ml-4 mt-1">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div>
                                <h4 className="font-bold text-lg mb-1">أسعار منافسة</h4>
                                <p className="text-green-100">نقدم أفضل الأسعار مع الحفاظ على الجودة العالية</p>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <div className="bg-white/20 p-2 rounded-lg ml-4 mt-1">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div>
                                <h4 className="font-bold text-lg mb-1">توصيل سريع</h4>
                                <p className="text-green-100">نوصل طلبك إلى باب منزلك بأمان وسرعة</p>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <div className="bg-white/20 p-2 rounded-lg ml-4 mt-1">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div>
                                <h4 className="font-bold text-lg mb-1">استشارات مجانية</h4>
                                <p className="text-green-100">نساعدك في اختيار النباتات المناسبة والعناية بها</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
