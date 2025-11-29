import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const NotFound = () => {
    return (
        <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
            <SEO title="Page Not Found" description="The page you are looking for does not exist." />
            <h1 className="text-6xl font-bold text-green-800 mb-4">404</h1>
            <h2 className="text-2xl font-semibold mb-6">Page Not Found</h2>
            <p className="text-gray-600 mb-8 max-w-md">
                The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </p>
            <Link
                to="/"
                className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-lg transition-colors"
            >
                Go Back Home
            </Link>
        </div>
    );
};

export default NotFound;
