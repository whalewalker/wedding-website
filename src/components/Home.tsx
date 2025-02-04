import React from 'react';
import {useWedding} from '../context';
import {CountdownDisplay} from "./CountdownDisplay.tsx";
import {BackgroundCarousel} from './BackgroundCarousel';
import {AudioPlayer} from './AudioPlayer';

export const Home: React.FC = () => {
    const {coupleDetails} = useWedding();


    const mediaItems = [
        {type: 'image' as const, url: 'src/assets/home-img-1.png'},
        {type: 'image' as const, url: 'src/assets/home-img-2.png'},
        {type: 'image' as const, url: 'src/assets/home-img-3.png'},
        {type: 'image' as const, url: 'src/assets/home-img-4.png'},
        {type: 'image' as const, url: 'src/assets/home-img-5.png'},
        {type: 'image' as const, url: 'src/assets/home-img-6.png'},
    ];

    return (
        <div className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background Carousel */}
            <BackgroundCarousel media={mediaItems}/>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40"/>

            {/* Content */}
            <div className="relative text-center text-white space-y-8 px-4">
                <h1 className="text-6xl md:text-8xl font-dancing mb-4">
                    {coupleDetails.groomName} & {coupleDetails.brideName}
                </h1>
                <p className="text-xl md:text-2xl font-light">
                    We're Getting Married
                </p>
                <p className="text-lg md:text-xl">
                    {coupleDetails.date}
                </p>

                <div className="max-w-4xl mx-auto">
                    <CountdownDisplay targetDate={coupleDetails.date}/>
                </div>

                <button className="mt-8 px-6 py-3 bg-rose-500 hover:bg-rose-600 rounded-full transition-colors">
                    Save the Date
                </button>
            </div>

            {/* Audio Player */}
            <AudioPlayer audioUrl="src/assets/videoplayback.mp4"/>
        </div>
    );
};