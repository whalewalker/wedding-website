import React, {useState} from 'react';
import {X} from 'lucide-react';

export const Gallery: React.FC = () => {
    const [selectedImage, setSelectedImage] = useState<number | null>(null);

    const images = [
        'https://i.pinimg.com/564x/50/ac/5e/50ac5efa14835dca3851d13f28ef6106.jpg',
        'https://people.com/thmb/1Gm2M0unJS_893X8J8sJYVNN8SE=/4000x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(511x0:513x2)/NATURI-NAUGHTON-26bb52e8bbd9498a9eda6afacba3fb33.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTADgNK7a6xpXtwgzMSh8zbOj_iVsaFXpM5Ow&s',
        'https://dotty-bridal.transforms.svdcdn.com/production/A1205-04_auto_webpformat_jpgwidth_2000__16430.jpg?w=640&h=960&auto=compress%2Cformat&fit=crop&dm=1724331211&s=d6c31869926e9cf41c81606773b9fe02',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLQAAhsyoldG9Tlq3hVF68573_WnWRlNtzAQ&s',
        'data:image/jpeg;base64,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',
    ];

    return (
        <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl md:text-5xl text-center font-dancing mb-16">
                Our Beautiful Moments
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {images.map((src, index) => (
                    <div
                        key={index}
                        className="relative aspect-[4/3] cursor-pointer overflow-hidden rounded-lg"
                        onClick={() => setSelectedImage(index)}
                    >
                        <img
                            src={src}
                            alt={`Gallery image ${index + 1}`}
                            className="object-cover w-full h-full transform hover:scale-110 transition-transform duration-300"
                        />
                    </div>
                ))}
            </div>

            {/* Modal */}
            {selectedImage !== null && (
                <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
                    <button
                        className="absolute top-4 right-4 text-white"
                        onClick={() => setSelectedImage(null)}
                    >
                        <X className="h-8 w-8"/>
                    </button>
                    <img
                        src={images[selectedImage]}
                        alt={`Gallery image ${selectedImage + 1}`}
                        className="max-h-[90vh] max-w-[90vw] object-contain"
                    />
                </div>
            )}
        </div>
    );
};
