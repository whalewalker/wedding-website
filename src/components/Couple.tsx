import React from 'react';
import {useWedding} from '../context';
import {Heart} from 'lucide-react';
import {CoupleProfile} from "./CoupleProfile.tsx";

export const Couple: React.FC = () => {
    const {coupleDetails} = useWedding();

    return (
        <div className="max-w-7xl mx-auto px-4 py-16">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-dancing mb-4">
                    Happy Couple
                </h2>
                <div className="flex items-center justify-center gap-2 text-green-500">
                    <div className="w-16 h-px bg-green-200"/>
                    <Heart className="w-6 h-6 animate-pulse"/>
                    <div className="w-16 h-px bg-green-200"/>
                </div>
            </div>

            <div className="space-y-16 md:space-y-24">
                <CoupleProfile
                    image={new URL('../assets/home-img-8.png', import.meta.url).href}
                    name={coupleDetails.groomName}
                    occupation={coupleDetails.groomOccupation}
                    description="The groom is a dedicated and hardworking individual, known for his kindness and generosity. He is loved by his family and friends and is always ready to lend a helping hand."
                    socialLinks={{
                        facebook: "https://facebook.com/groom",
                        instagram: "https://instagram.com/groom",
                        twitter: "https://twitter.com/groom",
                        linkedin: "https://linkedin.com/in/groom"
                    }}
                />

                <div className="relative">
                    <div className="absolute left-1/2 -translate-x-1/2 -top-8">
                        <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center">
                            <Heart className="w-8 h-8 text-green-500"/>
                        </div>
                    </div>
                </div>

                <CoupleProfile
                    image={new URL('../assets/home-img-9.png', import.meta.url).href}
                    name={coupleDetails.brideName}
                    occupation={coupleDetails.brideOccupation}
                    description="The bride is a talented and passionate individual, dedicated to her career and loved by all who know her. She brings joy and warmth to every room she enters."
                    socialLinks={{
                        facebook: "https://facebook.com/bride",
                        instagram: "https://instagram.com/bride",
                        twitter: "https://twitter.com/bride",
                        linkedin: "https://linkedin.com/in/bride"
                    }}
                    reversed
                />
            </div>
        </div>
    );
};
