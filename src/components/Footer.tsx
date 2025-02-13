import React from 'react';
import {Heart} from 'lucide-react';
import {useWedding} from "../context";

export const Footer: React.FC = () => {
    const {coupleDetails: {coupleTitle, date}} = useWedding();
    return (
        <footer className="bg-green-100 py-8 mt-16">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <div className="flex items-center justify-center gap-2 mb-4">
                    <span className="text-xl font-dancing">{coupleTitle}</span>
                    <Heart className="h-4 w-4 text-green-500"/>
                    <span
                        className="text-xl font-dancing text-green-800">{new Date(date).toLocaleDateString('en-GB').split('/').join('.')}</span>
                </div>

                <p className="text-green-900">
                    Made with love for our special day 💚 </p>
            </div>
        </footer>
    );
};