import React, {useState} from 'react';
import {Heart} from 'lucide-react';
import {GalleryImage} from '../types';
import {ImageModal} from "./ImageModal.tsx";

export const Gallery: React.FC = () => {
    const [selectedImage, setSelectedImage] = useState<number | null>(null);

    // Sample gallery data with different grid spans
    const galleryImages: GalleryImage[] = [
        {
            id: 1,
            src: new URL('../assets/home-img-1.png', import.meta.url).href,
            alt: 'First Date',
            width: 800,
            height: 1200,
            gridSpan: {row: 2, col: 2}
        },
        {
            id: 2,
            src: new URL('../assets/home-img-2.png', import.meta.url).href,
            alt: 'Engagement',
            width: 600,
            height: 600
        },
        {
            id: 3,
            src: new URL('../assets/home-img-3.png', import.meta.url).href,
            alt: 'Proposal',
            width: 600,
            height: 800,
            gridSpan: {row: 2}
        },
        {
            id: 4,
            src: new URL('../assets/home-img-4.png', import.meta.url).href,
            alt: 'Together',
            width: 800,
            height: 600
        },
        {
            id: 5,
            src: new URL('../assets/home-img-5.png', import.meta.url).href,
            alt: 'Happiness',
            width: 600,
            height: 600
        },
        {
            id: 6,
            src: new URL('../assets/home-img-6.png', import.meta.url).href,
            alt: 'Love',
            width: 800,
            height: 1200,
            gridSpan: {row: 2}
        },
        {
            id: 7,
            src: new URL('../assets/home-img-7.png', import.meta.url).href,
            alt: 'Celebration',
            width: 800,
            height: 1200,
            gridSpan: {row: 2}
        },
        {
            id: 8,
            src: new URL('../assets/home-img-8.png', import.meta.url).href,
            alt: 'Adventure',
            width: 800,
            height: 1200,
            gridSpan: {row: 2}
        },
        {
            id: 9,
            src: new URL('../assets/home-img-9.png', import.meta.url).href,
            alt: 'Fantasy',
            width: 800,
            height: 1200,
            gridSpan: {row: 2}
        },
        {
            id: 10,
            src: new URL('../assets/home-img-1.png', import.meta.url).href,
            alt: 'Live Laugh Love',
            width: 900,
            height: 1200,
            gridSpan: {row: 2}
        }
    ];

    const handleNavigate = (direction: 'prev' | 'next') => {
        if (selectedImage === null) return;

        setSelectedImage(prev => {
            if (!prev && prev !== 0) return null;
            if (direction === 'prev') {
                return prev === 0 ? galleryImages.length - 1 : prev - 1;
            }
            return (prev + 1) % galleryImages.length;
        });
    };

    return (
        <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-dancing mb-4">
                    Our Beautiful Moments
                </h2>
                <div className="flex items-center justify-center gap-2">
                    <div className="w-16 h-px bg-rose-200"/>
                    <Heart className="w-6 h-6 text-rose-500"/>
                    <div className="w-16 h-px bg-rose-200"/>
                </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {galleryImages.map((image, index) => (
                    <div
                        key={image.id}
                        className={`relative cursor-pointer group overflow-hidden rounded-xl
              ${image.gridSpan?.row ? `row-span-${image.gridSpan.row}` : ''}
              ${image.gridSpan?.col ? `col-span-${image.gridSpan.col}` : ''}
            `}
                        style={{
                            aspectRatio: `${image.width} / ${image.height}`
                        }}
                        onClick={() => setSelectedImage(index)}
                    >
                        <img
                            src={image.src}
                            alt={image.alt}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div
                            className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <p className="text-white text-lg font-dancing transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                {image.alt}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {selectedImage !== null && (
                <ImageModal
                    images={galleryImages}
                    currentIndex={selectedImage}
                    onClose={() => setSelectedImage(null)}
                    onNavigate={handleNavigate}
                />
            )}
        </div>
    );
};