import React, { useState, useEffect } from 'react';
import { Clock, AlertCircle } from 'lucide-react';

const UrgencyBar = () => {
    const [timeLeft, setTimeLeft] = useState({
        hours: 3,
        minutes: 45,
        seconds: 0
    });

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prev => {
                if (prev.seconds > 0) {
                    return { ...prev, seconds: prev.seconds - 1 };
                } else if (prev.minutes > 0) {
                    return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
                } else if (prev.hours > 0) {
                    return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
                } else {
                    // Reset or stop
                    return { hours: 3, minutes: 45, seconds: 0 };
                }
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const formatTime = (val) => val.toString().padStart(2, '0');

    return (
        <div className="bg-red-50 border border-red-100 rounded-xl p-4 mb-6 flex items-center justify-between gap-3 animate-pulse">
            <div className="flex items-center gap-3">
                <div className="bg-red-100 p-2 rounded-full text-red-600">
                    <Clock className="w-5 h-5" />
                </div>
                <div>
                    <p className="text-red-800 font-bold text-sm">عرض محدود!</p>
                    <p className="text-red-600 text-xs">ينتهي العرض خلال:</p>
                </div>
            </div>

            <div className="flex items-center gap-1 text-red-700 font-mono font-bold text-lg" dir="ltr">
                <span className="bg-white px-2 py-1 rounded border border-red-100">{formatTime(timeLeft.hours)}</span>
                <span>:</span>
                <span className="bg-white px-2 py-1 rounded border border-red-100">{formatTime(timeLeft.minutes)}</span>
                <span>:</span>
                <span className="bg-white px-2 py-1 rounded border border-red-100">{formatTime(timeLeft.seconds)}</span>
            </div>
        </div>
    );
};

export default UrgencyBar;
