import React, { useState, useRef, useEffect } from 'react';

const FloatingMessenger = () => {
    const facebookPageId = "61583400568542";
    const messengerUrl = `https://m.me/${facebookPageId}`;

    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isDragging, setIsDragging] = useState(false);
    const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
    const buttonRef = useRef(null);

    // Load saved position from localStorage
    useEffect(() => {
        const savedPosition = localStorage.getItem('messenger-button-position');
        if (savedPosition) {
            setPosition(JSON.parse(savedPosition));
        } else {
            // Default position: bottom-32 right-36 (more to the left than WhatsApp)
            setPosition({ x: window.innerWidth - 180, y: window.innerHeight - 160 });
        }
    }, []);

    const handleMouseDown = (e) => {
        if (e.target.closest('a')) {
            setIsDragging(true);
            setDragStart({
                x: e.clientX - position.x,
                y: e.clientY - position.y
            });
            e.preventDefault();
        }
    };

    const handleMouseMove = (e) => {
        if (isDragging) {
            const newX = e.clientX - dragStart.x;
            const newY = e.clientY - dragStart.y;

            // Keep button within viewport
            const maxX = window.innerWidth - 80;
            const maxY = window.innerHeight - 80;

            const boundedX = Math.max(0, Math.min(newX, maxX));
            const boundedY = Math.max(0, Math.min(newY, maxY));

            setPosition({ x: boundedX, y: boundedY });
        }
    };

    const handleMouseUp = () => {
        if (isDragging) {
            setIsDragging(false);
            // Save position to localStorage
            localStorage.setItem('messenger-button-position', JSON.stringify(position));
        }
    };

    useEffect(() => {
        if (isDragging) {
            document.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('mouseup', handleMouseUp);
            return () => {
                document.removeEventListener('mousemove', handleMouseMove);
                document.removeEventListener('mouseup', handleMouseUp);
            };
        }
    }, [isDragging, dragStart, position]);

    const handleClick = (e) => {
        if (isDragging) {
            e.preventDefault();
        }
    };

    return (
        <a
            ref={buttonRef}
            href={messengerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed z-50 bg-[#0084FF] hover:bg-[#0073E6] text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center group"
            style={{
                left: `${position.x}px`,
                top: `${position.y}px`,
                cursor: isDragging ? 'grabbing' : 'grab'
            }}
            aria-label="تواصل معنا عبر مسنجر"
            onMouseDown={handleMouseDown}
            onClick={handleClick}
        >
            {/* Messenger Icon */}
            <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
                <path d="M12 2C6.477 2 2 6.145 2 11.243c0 2.912 1.449 5.506 3.713 7.201V22l3.46-1.897c.924.254 1.903.39 2.827.39 5.523 0 10-4.145 10-9.243C22 6.145 17.523 2 12 2zm.993 12.416l-2.556-2.73-4.99 2.73 5.488-5.822 2.617 2.73 4.929-2.73-5.488 5.822z" />
            </svg>

            <span className="absolute right-full mr-3 bg-white text-gray-800 px-3 py-1 rounded-lg shadow-md text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap hidden md:block pointer-events-none">
                مسنجر
            </span>

            {/* Pulse Effect */}
            {!isDragging && (
                <span className="absolute inset-0 rounded-full bg-[#0084FF] opacity-75 animate-ping -z-10"></span>
            )}
        </a>
    );
};

export default FloatingMessenger;
