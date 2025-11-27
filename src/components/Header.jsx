```javascript
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-green-700">
          خضراوي
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 space-x-reverse">
          <Link to="/" className="text-gray-700 hover:text-green-600 transition">الرئيسية</Link>
          <Link to="/products" className="text-gray-700 hover:text-green-600 transition">المنتجات</Link>
          <Link to="/contact" className="text-gray-700 hover:text-green-600 transition">اتصل بنا</Link>
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center space-x-4 space-x-reverse">
          <a href="tel:+213123456789" className="flex items-center text-gray-700 hover:text-green-600">
            <Phone className="w-5 h-5 ml-2" />
            <span>0123 45 67 89</span>
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
```
