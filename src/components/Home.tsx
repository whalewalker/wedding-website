import React from 'react';
import {useWedding} from '../context';
import {CountdownDisplay} from "./CountdownDisplay.tsx";
import {BackgroundCarousel} from './BackgroundCarousel';
import {AudioPlayer} from './AudioPlayer';
import {MediaItem} from "../types";

export const Home: React.FC = () => {
    const {coupleDetails} = useWedding();


    const mediaItems: MediaItem[] = [
        {type: 'image' as const, url: new URL('../assets/home-img-1.png', import.meta.url).href, imgPosition: 'top'},
        {type: 'image' as const, url: new URL('../assets/home-img-2.png', import.meta.url).href, imgPosition: 'center'},
        {type: 'image' as const, url: new URL('../assets/home-img-9.png', import.meta.url).href, imgPosition: 'top'},
        {type: 'image' as const, url: new URL('../assets/home-img-6.png', import.meta.url).href, imgPosition: 'top'},
        {type: 'image' as const, url: new URL('../assets/home-img-7.png', import.meta.url).href, imgPosition: 'center'},
        {type: 'image' as const, url: new URL('../assets/home-img-8.png', import.meta.url).href, imgPosition: 'top'},
    ];
    return (
        <div className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background Carousel */}
            <BackgroundCarousel media={mediaItems}/>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40"/>

            {/* Content */}
            <div className="relative text-center text-green-100 space-y-8 px-4">
                <h1 className="text-6xl md:text-8xl font-dancing mb-4">
                    {coupleDetails.brideName} & {coupleDetails.groomName}
                </h1>
                <p className="text-xl md:text-2xl font-light">
                    We're Getting Married
                </p>
                <p className="text-lg md:text-xl">
                    {new Date(coupleDetails.date).toLocaleDateString('en-US', {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                    })}
                </p>

                <div className="max-w-4xl mx-auto">
                    <CountdownDisplay targetDate={coupleDetails.date}/>
                </div>
            </div>

            {/* Audio Player */}
            <AudioPlayer audioUrl={new URL('../assets/videoplayback.mp3', import.meta.url).href}/>
        </div>
    );
};