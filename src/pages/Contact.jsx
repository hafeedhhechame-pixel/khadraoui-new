import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
    return (
        <div className="bg-gray-50 min-h-screen py-12">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold text-center text-green-800 mb-12">تواصل معنا</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">

                    {/* Contact Info */}
                    <div className="bg-white p-8 rounded-2xl shadow-lg">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">معلومات الاتصال</h2>
                        <div className="space-y-6">
                            <div className="flex items-start">
                                <div className="bg-green-100 p-3 rounded-full ml-4">
                                    <Phone className="w-6 h-6 text-green-600" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900">الهاتف</h3>
                                    <p className="text-gray-600" dir="ltr">+213 12 34 56 789</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="bg-green-100 p-3 rounded-full ml-4">
                                    <Mail className="w-6 h-6 text-green-600" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900">البريد الإلكتروني</h3>
                                    <p className="text-gray-600">contact@khadraoui.dz</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="bg-green-100 p-3 rounded-full ml-4">
                                    <MapPin className="w-6 h-6 text-green-600" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900">الموقع</h3>
                                    <p className="text-gray-600">وسط المدينة، الوادي، الجزائر</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="bg-green-100 p-3 rounded-full ml-4">
                                    <Clock className="w-6 h-6 text-green-600" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900">ساعات العمل</h3>
                                    <p className="text-gray-600">السبت - الخميس: 8:00 صباحاً - 6:00 مساءً</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Map Placeholder */}
                    <div className="bg-gray-200 rounded-2xl overflow-hidden shadow-lg h-96 md:h-auto relative">
                        <div className="absolute inset-0 flex items-center justify-center text-gray-500 font-bold text-xl">
                            خريطة جوجل (مكان العنصر النائب)
                        </div>
                        {/* Embed Google Map here */}
                        {/* <iframe src="..." width="100%" height="100%" ...></iframe> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
