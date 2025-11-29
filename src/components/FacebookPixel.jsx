import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const FacebookPixel = () => {
    const location = useLocation();

    useEffect(() => {
        // Track PageView when location changes
        // We don't track on initial load here because index.html handles it
        // But we need to track on subsequent route changes
        if (window.fbq) {
            window.fbq('track', 'PageView');
        }
    }, [location]);

    return null;
};

export default FacebookPixel;
