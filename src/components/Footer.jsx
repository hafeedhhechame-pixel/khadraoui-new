import React from 'react';
import { Facebook, Instagram, MapPin, Phone, Mail } from 'lucide-react';

const Footer = ({ lang = 'ar' }) => {
    const t = {
        ar: {
            about: {
                title: 'خضراوي',
                desc: 'مشروعك الأول لشراء الأشجار والنباتات في الجزائر. نوفر لك أفضل الشتلات بجودة عالية وخدمة توصيل ممتازة.'
            },
            links: {
                title: 'روابط سريعة',
                home: 'الرئيسية',
                products: 'المنتجات',
                about: 'من نحن',
                contact: 'اتصل بنا'
            },
            contact: {
                title: 'تواصل معنا',
                location: 'الوادي، الجزائر'
            },
            rights: 'جميع الحقوق محفوظة.'
        },
        fr: {
            about: {
                title: 'Khadraoui',
                desc: 'Votre premier choix pour acheter des arbres et des plantes en Algérie. Nous fournissons les meilleurs plants avec une haute qualité et un excellent service de livraison.'
            },
            links: {
                title: 'Liens Rapides',
                home: 'Accueil',
                products: 'Produits',
                about: 'À Propos',
                contact: 'Contact'
            },
            contact: {
                title: 'Contactez-nous',
                location: 'El Oued, Algérie'
            },
            rights: 'Tous droits réservés.'
        }
    };

    const text = t[lang] || t.ar;
    const isFrench = lang === 'fr';

    return (
        <footer className="bg-green-800 text-white pt-12 pb-6">
            <div className="container mx-auto px-4">
                <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 ${isFrench ? 'text-left' : 'text-right'}`} dir={isFrench ? 'ltr' : 'rtl'}>

                    {/* About */}
                    <div>
                        <img src="/images/logo.png" alt="خضراوي" className="h-20 mb-4" />
                        <h3 className="text-xl font-bold mb-4">{text.about.title}</h3>
                        <p className="text-green-100 leading-relaxed">
                            {text.about.desc}
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">{text.links.title}</h3>
                        <ul className="space-y-2">
                            <li><a href={isFrench ? "/fr" : "/"} className="text-green-100 hover:text-white">{text.links.home}</a></li>
                            <li><a href={isFrench ? "/fr/products" : "/products"} className="text-green-100 hover:text-white">{text.links.products}</a></li>
                            <li><a href={isFrench ? "/fr/#about" : "/#about"} className="text-green-100 hover:text-white">{text.links.about}</a></li>
                            <li><a href={isFrench ? "/fr/contact" : "/contact"} className="text-green-100 hover:text-white">{text.links.contact}</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">{text.contact.title}</h3>
                        <ul className="space-y-4">
                            <li className={`flex items-center ${isFrench ? 'justify-start' : 'justify-start'}`}>
                                <MapPin className={`w-5 h-5 text-green-300 ${isFrench ? 'mr-2' : 'ml-2'}`} />
                                <span>{text.contact.location}</span>
                            </li>
                            <li className={`flex items-center ${isFrench ? 'justify-start' : 'justify-start'}`}>
                                <Phone className={`w-5 h-5 text-green-300 ${isFrench ? 'mr-2' : 'ml-2'}`} />
                                <span dir="ltr">+213 799 33 06 12</span>
                            </li>
                            <li className={`flex items-center ${isFrench ? 'justify-start' : 'justify-start'}`}>
                                <Mail className={`w-5 h-5 text-green-300 ${isFrench ? 'mr-2' : 'ml-2'}`} />
                                <span>contact@khadraoui.dz</span>
                            </li>
                        </ul>

                        {/* Social Media */}
                        <div className={`flex mt-6 ${isFrench ? 'space-x-4' : 'space-x-4 space-x-reverse'}`}>
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
                    © {new Date().getFullYear()} {text.about.title}. {text.rights}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
