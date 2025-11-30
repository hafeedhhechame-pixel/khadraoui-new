import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Layout from './components/Layout';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Contact from './pages/Contact';
import About from './pages/About';
import LandingSidr from './pages/LandingSidr';
import LandingSidrFr from './pages/LandingSidrFr';
import NotFound from './pages/NotFound';
import ScrollToTop from './components/ScrollToTop';

import FacebookPixel from './components/FacebookPixel';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <FacebookPixel />
        <ScrollToTop />
        <Layout>
          <Routes>
            {/* Arabic Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />

            {/* French Routes */}
            <Route path="/fr" element={<Home />} />
            <Route path="/fr/products" element={<Products />} />
            <Route path="/fr/products/:id" element={<ProductDetail />} />
            <Route path="/fr/contact" element={<Contact />} />
            <Route path="/fr/about" element={<About />} />

            {/* Landing Pages */}
            <Route path="/landing/sidr" element={<LandingSidr />} />
            <Route path="/landing/sidr/fr" element={<LandingSidrFr />} />

            {/* 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </Router>
    </HelmetProvider>
  );
}

export default App;
