import React from 'react';
import {Heart} from 'lucide-react';
import {useWedding} from "../context";

export const Footer: React.FC = () => {
    const {coupleDetails: {coupleTitle}} = useWedding();
    return (
        <footer className="bg-white py-8 mt-16">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <div className="flex items-center justify-center gap-2 mb-4">
                    <span className="text-xl font-dancing">{coupleTitle}</span>
                    <Heart className="h-4 w-4 text-rose-500"/>
                    <span className="text-xl font-dancing">15.06.2024</span>
                </div>

                <p className="text-gray-600">
                    Made with love for our special day
                </p>
            </div>
        </footer>
    );
};