import React, {useEffect, useState} from 'react';
import {ChevronLeft, ChevronRight} from 'lucide-react';

interface MediaItem {
    type: 'image' | 'video';
    url: string;
}

interface BackgroundCarouselProps {
    media: MediaItem[];
    interval?: number;
}

export const BackgroundCarousel: React.FC<BackgroundCarouselProps> = ({
                                                                          media,
                                                                          interval = 5000
                                                                      }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    useEffect(() => {

        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % media.length);
        }, interval);

        return () => clearInterval(timer);
    }, [media.length, interval]);

    const navigate = (direction: 'prev' | 'next') => {
        setCurrentIndex((prev) => {
            if (direction === 'prev') {
                return prev === 0 ? media.length - 1 : prev - 1;
            }
            return (prev + 1) % media.length;
        });
    };

    return (
        <div className="absolute inset-0 overflow-hidden">
            {media.map((item, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ${
                        index === currentIndex ? 'opacity-100' : 'opacity-0'
                    }`}
                >
                    {item.type === 'image' ? (
                        <img
                            src={item.url}
                            alt={`Background ${index + 1}`}
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                    ) : (
                        <video
                            src={item.url}
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                    )}
                </div>
            ))}

            {/* Navigation Controls */}
            <div className="absolute inset-x-0 bottom-8 flex justify-center space-x-2">
                {media.map((_, index) => (
                    <button
                        key={index}
                        className={`w-2 h-2 rounded-full transition-colors ${
                            index === currentIndex ? 'bg-white' : 'bg-white/50'
                        }`}
                        onClick={() => setCurrentIndex(index)}
                    />
                ))}
            </div>

            {/* Arrow Controls */}
            <button
                onClick={() => navigate('prev')}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/20 text-white hover:bg-black/40 transition-colors"
            >
                <ChevronLeft className="w-6 h-6"/>
            </button>
            <button
                onClick={() => navigate('next')}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/20 text-white hover:bg-black/40 transition-colors"
            >
                <ChevronRight className="w-6 h-6"/>
            </button>
        </div>
    );
};
