import React from 'react';
import {useWedding} from '../context';
import {Heart} from 'lucide-react';

export const AboutUs: React.FC = () => {
    const {coupleDetails} = useWedding();

    return (
        <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl md:text-5xl text-center font-dancing mb-16">
                Our Love Story
            </h2>

            <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                    <img
                        src="https://i.pinimg.com/564x/50/ac/5e/50ac5efa14835dca3851d13f28ef6106.jpg"
                        alt="Where we met"
                        className="object-cover w-full h-full"
                    />
                </div>

                <div className="space-y-6">
                    <div className="flex items-center gap-2">
                        <Heart className="h-6 w-6 text-rose-500"/>
                        <h3 className="text-2xl font-dancing">How We Met</h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                        {coupleDetails.story}
                    </p>
                    <div className="flex items-center gap-4">
                        <div className="h-px flex-1 bg-rose-200"></div>
                        <Heart className="h-4 w-4 text-rose-500"/>
                        <div className="h-px flex-1 bg-rose-200"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};