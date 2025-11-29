import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone, Facebook } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src="/images/logo.png" alt="خضراوي" className="h-24 md:h-28" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 space-x-reverse">
          <Link to="/" className="text-gray-700 hover:text-green-600 transition">الرئيسية</Link>
          <Link to="/products" className="text-gray-700 hover:text-green-600 transition">المنتجات</Link>
          <Link to="/contact" className="text-gray-700 hover:text-green-600 transition">اتصل بنا</Link>
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center space-x-4 space-x-reverse">
          <a href="https://wa.me/213799330612" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-700 hover:text-green-500 transition">
            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 ml-2">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
            </svg>
            <span>واتساب</span>
          </a>
          <a href="https://www.facebook.com/profile.php?id=61583400568542" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-700 hover:text-blue-600 transition">
            <Facebook className="w-5 h-5 ml-2" />
            <span>فيسبوك</span>
          </a>
          <a href="tel:+213799330612" className="flex items-center text-gray-700 hover:text-green-600">
            <Phone className="w-5 h-5 ml-2" />
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
            <Link to="/" className="text-gray-700 hover:text-green-600" onClick={() => setIsMenuOpen(false)}>الرئيسية</Link>
            <Link to="/products" className="text-gray-700 hover:text-green-600" onClick={() => setIsMenuOpen(false)}>المنتجات</Link>
            <Link to="/contact" className="text-gray-700 hover:text-green-600" onClick={() => setIsMenuOpen(false)}>اتصل بنا</Link>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
