import React from 'react';
import {ChevronLeft, ChevronRight, X} from 'lucide-react';
import {GalleryImage} from "../types";

interface ImageModalProps {
    images: GalleryImage[];
    currentIndex: number;
    onClose: () => void;
    onNavigate: (direction: 'prev' | 'next' | number) => void;
}

export const ImageModal: React.FC<ImageModalProps> = ({
                                                          images,
                                                          currentIndex,
                                                          onClose,
                                                          onNavigate,
                                                      }) => {
    return (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
             onClick={onClose}>
            <div className="absolute top-4 right-4 z-50">
                <button
                    className="p-2 text-white/70 hover:text-white transition-colors"
                    onClick={onClose}
                >
                    <X className="w-8 h-8"/>
                </button>
            </div>

            <button
                className="absolute left-4 top-1/2 -translate-y-1/2 p-4 text-white/70 hover:text-white transition-colors z-50"
                onClick={(e) => {
                    e.stopPropagation();
                    onNavigate('prev');
                }}
            >
                <ChevronLeft className="w-8 h-8"/>
            </button>

            <button
                className="absolute right-4 top-1/2 -translate-y-1/2 p-4 text-white/70 hover:text-white transition-colors z-50"
                onClick={(e) => {
                    e.stopPropagation();
                    onNavigate('next');
                }}
            >
                <ChevronRight className="w-8 h-8"/>
            </button>

            <div className="relative max-w-[90vw] max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
                <img
                    src={images[currentIndex].src}
                    alt={images[currentIndex].alt}
                    className="max-w-full max-h-[90vh] object-contain"
                />

                <div
                    className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent text-white">
                    <p className="text-center">
                        {currentIndex + 1} / {images.length}
                    </p>
                </div>
            </div>

            {/* Thumbnails */}
            <div
                className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 overflow-x-auto max-w-[90vw] p-2">
                {images.map((image, index) => (
                    <button
                        key={image.id}
                        className={`relative flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden transition-transform hover:scale-110 
                            ${index === currentIndex ? 'ring-2 ring-green-500' : 'opacity-50 hover:opacity-100'}`}
                        onClick={(e) => {
                            e.stopPropagation();
                            onNavigate(index);
                        }}
                    >
                        <img
                            src={image.src}
                            alt={`Thumbnail ${index + 1}`}
                            className="w-full h-full object-cover"
                        />
                    </button>
                ))}
            </div>

        </div>
    );
};