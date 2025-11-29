import React from 'react';
import { Facebook, Instagram, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-green-800 text-white pt-12 pb-6">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-right" dir="rtl">

                    {/* About */}
                    <div>
                        <img src="/images/logo.png" alt="خضراوي" className="h-20 mb-4" />
                        <h3 className="text-xl font-bold mb-4">خضراوي</h3>
                        <p className="text-green-100 leading-relaxed">
                            مشروعك الأول لبيع الأشجار والنباتات في الجزائر. نوفر لك أفضل الشتلات بجودة عالية وخدمة توصيل ممتازة.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">روابط سريعة</h3>
                        <ul className="space-y-2">
                            <li><a href="/" className="text-green-100 hover:text-white">الرئيسية</a></li>
                            <li><a href="/products" className="text-green-100 hover:text-white">المنتجات</a></li>
                            <li><a href="/#about" className="text-green-100 hover:text-white">من نحن</a></li>
                            <li><a href="/contact" className="text-green-100 hover:text-white">اتصل بنا</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">تواصل معنا</h3>
                        <ul className="space-y-4">
                            <li className="flex items-center justify-start">
                                <MapPin className="w-5 h-5 ml-2 text-green-300" />
                                <span>الوادي، الجزائر</span>
                            </li>
                            <li className="flex items-center justify-start">
                                <Phone className="w-5 h-5 ml-2 text-green-300" />
                                <span dir="ltr">+213 799 33 06 12</span>
                            </li>
                            <li className="flex items-center justify-start">
                                <Mail className="w-5 h-5 ml-2 text-green-300" />
                                <span>contact@khadraoui.dz</span>
                            </li>
                        </ul>

                        {/* Social Media */}
                        <div className="flex space-x-4 space-x-reverse mt-6">
                            <a href="https://www.facebook.com/profile.php?id=61583400568542" target="_blank" rel="noopener noreferrer" className="bg-green-700 p-2 rounded-full hover:bg-green-600 transition">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="#" className="bg-green-700 p-2 rounded-full hover:bg-green-600 transition">
                                <Instagram className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-green-700 mt-8 pt-6 text-center text-green-200 text-sm">
                    © {new Date().getFullYear()} خضراوي. جميع الحقوق محفوظة.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
