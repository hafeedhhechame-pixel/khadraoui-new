import React from 'react';
import { useLocation } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
    const location = useLocation();
    const lang = location.pathname.startsWith('/fr') ? 'fr' : 'ar';
    const isFrench = lang === 'fr';

    const t = {
        ar: {
            title: 'تواصل معنا',
            contactInfo: 'معلومات الاتصال',
            phone: 'الهاتف',
            email: 'البريد الإلكتروني',
            location: 'الموقع',
            locationText: 'وسط المدينة، الوادي، الجزائر',
            hours: 'ساعات العمل',
            hoursText: 'السبت - الخميس: 8:00 صباحاً - 6:00 مساءً'
        },
        fr: {
            title: 'Contactez-nous',
            contactInfo: 'Informations de contact',
            phone: 'Téléphone',
            email: 'Email',
            location: 'Localisation',
            locationText: 'Centre-ville, El Oued, Algérie',
            hours: 'Heures d\'ouverture',
            hoursText: 'Samedi - Jeudi: 8h00 - 18h00'
        }
    };

    const text = t[lang];

    return (
        <div className="bg-gray-50 min-h-screen py-12">
            <div className="container mx-auto px-4">
                <img src="/images/logo.png" alt="خضراوي" className="h-24 md:h-28 mx-auto mb-6" />
                <h1 className="text-4xl font-bold text-center text-green-800 mb-12">{text.title}</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">

                    {/* Contact Info */}
                    <div className="bg-white p-8 rounded-2xl shadow-lg">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">{text.contactInfo}</h2>
                        <div className="space-y-6">
                            <div className="flex items-start">
                                <div className={`bg-green-100 p-3 rounded-full ${isFrench ? 'mr-4' : 'ml-4'}`}>
                                    <Phone className="w-6 h-6 text-green-600" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900">{text.phone}</h3>
                                    <p className="text-gray-600 text-lg" dir="ltr">+213 799 33 06 12</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className={`bg-green-100 p-3 rounded-full ${isFrench ? 'mr-4' : 'ml-4'}`}>
                                    <Mail className="w-6 h-6 text-green-600" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900">{text.email}</h3>
                                    <p className="text-gray-600">contact@khadraoui.dz</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className={`bg-green-100 p-3 rounded-full ${isFrench ? 'mr-4' : 'ml-4'}`}>
                                    <MapPin className="w-6 h-6 text-green-600" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900">{text.location}</h3>
                                    <p className="text-gray-600">{text.locationText}</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className={`bg-green-100 p-3 rounded-full ${isFrench ? 'mr-4' : 'ml-4'}`}>
                                    <Clock className="w-6 h-6 text-green-600" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900">{text.hours}</h3>
                                    <p className="text-gray-600">{text.hoursText}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Map */}
                    <div className="bg-gray-200 rounded-2xl overflow-hidden shadow-lg h-96 md:h-auto relative min-h-[400px]">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105885.09337586866!2d6.772826694600644!3d33.3685846663242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1258fb0c5b0c5b0d%3A0x5b0c5b0c5b0c5b0d!2sEl%20Oued!5e0!3m2!1sen!2sdz!4v1625678901234!5m2!1sen!2sdz"
                            width="100%"
                            height="100%"
                            style={{ border: 0, minHeight: '400px' }}
                            allowFullScreen=""
                            loading="lazy"
                            title="موقع خضراوي"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
