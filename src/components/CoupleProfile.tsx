import {SocialIcon} from "./SocialIcon.tsx";
import {SocialPlatform} from "../types";
import React from "react";

interface SocialLinks {
    facebook?: string;
    instagram?: string;
    twitter?: string;
    linkedin?: string;
}

interface CoupleProfileProps {
    image: string;
    name: string;
    occupation: string;
    description: string;
    socialLinks: SocialLinks;
    reversed?: boolean;
}

export const CoupleProfile: React.FC<CoupleProfileProps> = ({
                                                                image,
                                                                name,
                                                                occupation,
                                                                description,
                                                                socialLinks,
                                                                reversed = false
                                                            }) => {
    return (
        <div className={`flex flex-col ${reversed ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 items-center`}>
            <div className="w-full md:w-1/2">
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden group">
                    <img
                        src={image}
                        alt={name}
                        className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                    />
                    <div
                        className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>

                    <div
                        className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <div className="flex justify-center space-x-4">
                            {Object.entries(socialLinks).map(([platform, url]) => (
                                url && <SocialIcon key={platform} platform={platform as SocialPlatform} url={url}/>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full md:w-1/2 text-center md:text-left">
                <h3 className="text-3xl md:text-4xl font-dancing mb-2">{name}</h3>
                <p className="text-rose-500 font-medium mb-4">{occupation}</p>
                <p className="text-gray-600 leading-relaxed mb-6">{description}</p>
            </div>
        </div>
    );
};