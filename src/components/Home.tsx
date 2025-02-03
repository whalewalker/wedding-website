import React from 'react';
import {useWedding} from '../context';

export const Home: React.FC = () => {
    const {coupleDetails} = useWedding();

    return (
        <div className="relative h-screen flex items-center justify-center">
            <div
                className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] bg-cover bg-center"
                style={{filter: 'brightness(0.7)'}}
            />
            <div className="relative text-center text-white">
                <h1 className="text-6xl md:text-8xl font-dancing mb-4">
                    {coupleDetails.groomName} & {coupleDetails.brideName}
                </h1>
                <p className="text-xl md:text-2xl font-light">
                    We're Getting Married
                </p>
                <p className="text-lg md:text-xl mt-4">
                    {coupleDetails.date}
                </p>
                <button className="mt-8 px-6 py-3 bg-rose-500 hover:bg-rose-600 rounded-full transition-colors">
                    Save the Date
                </button>
            </div>
        </div>
    );
};