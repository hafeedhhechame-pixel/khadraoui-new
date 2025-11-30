import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Facebook, Globe } from 'lucide-react';

const Header = ({ lang = 'ar' }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const t = {
    ar: {
      home: 'الرئيسية',
      products: 'المنتجات',
      contact: 'اتصل بنا',
      whatsapp: 'واتساب',
      facebook: 'فيسبوك',
      langSwitch: 'Français',
      langLink: '/fr'
    },
    fr: {
      home: 'Accueil',
      products: 'Produits',
      contact: 'Contact',
      whatsapp: 'WhatsApp',
      facebook: 'Facebook',
      langSwitch: 'العربية',
      langLink: '/'
    }
  };

  const text = t[lang] || t.ar;
  const isFrench = lang === 'fr';

  // Determine the target link for language switch
  const getLangSwitchLink = () => {
    const path = location.pathname;

    // Handle landing pages specially
    if (path.includes('/landing/')) {
      if (path.includes('/fr')) {
        // Remove /fr from landing page path
        return path.replace('/fr', '');
      } else {
        // Add /fr to landing page path
        return path + '/fr';
      }
    }

    // Handle regular pages
    if (isFrench) {
      return path.replace(/^\/fr/, '') || '/';
    } else {
      return path === '/' ? '/fr' : `/fr${path}`;
    }
  };

  const navLinks = [
    { to: isFrench ? '/fr' : '/', label: text.home },
    { to: isFrench ? '/fr/products' : '/products', label: text.products },
    { to: isFrench ? '/fr/contact' : '/contact', label: text.contact },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to={isFrench ? '/fr' : '/'} className="flex items-center">
          <img src="/images/logo.png" alt="خضراوي" className="h-24 md:h-28" />
        </Link>

        {/* Desktop Navigation */}
        <nav className={`hidden md:flex ${isFrench ? 'space-x-8' : 'space-x-8 space-x-reverse'}`}>
          {navLinks.map((link, index) => (
            <Link key={index} to={link.to} className="text-gray-700 hover:text-green-600 transition font-medium">
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className={`hidden md:flex items-center ${isFrench ? 'space-x-4' : 'space-x-4 space-x-reverse'}`}>
          <Link to={getLangSwitchLink()} className="flex items-center text-gray-700 hover:text-primary transition font-bold">
            <Globe className={`w-5 h-5 ${isFrench ? 'mr-2' : 'ml-2'}`} />
            <span>{text.langSwitch}</span>
          </Link>

          <a href="https://wa.me/213799330612" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-700 hover:text-green-500 transition">
            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className={`w-5 h-5 ${isFrench ? 'mr-2' : 'ml-2'}`}>
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
            </svg>
            <span>{text.whatsapp}</span>
          </a>
          <a href="https://www.facebook.com/profile.php?id=61583400568542" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-700 hover:text-blue-600 transition">
            <Facebook className={`w-5 h-5 ${isFrench ? 'mr-2' : 'ml-2'}`} />
            <span>{text.facebook}</span>
          </a>
          <a href="tel:+213799330612" className="flex items-center text-gray-700 hover:text-green-600">
            <Phone className={`w-5 h-5 ${isFrench ? 'mr-2' : 'ml-2'}`} />
            <span dir="ltr">+213 799 33 06 12</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white border-t">
          <div className="flex flex-col p-4 space-y-4">
            {navLinks.map((link, index) => (
              <Link key={index} to={link.to} className="text-gray-700 hover:text-green-600" onClick={() => setIsMenuOpen(false)}>
                {link.label}
              </Link>
            ))}
            <Link to={getLangSwitchLink()} className="flex items-center text-gray-700 hover:text-primary font-bold" onClick={() => setIsMenuOpen(false)}>
              <Globe className={`w-5 h-5 ${isFrench ? 'mr-2' : 'ml-2'}`} />
              <span>{text.langSwitch}</span>
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
