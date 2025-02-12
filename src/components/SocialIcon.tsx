import React from 'react';
import {Facebook, Instagram, Linkedin, Twitter} from 'lucide-react';
import {SocialPlatform} from "../types";

interface SocialIconProps {
    platform: SocialPlatform;
    url: string;
}

export const SocialIcon: React.FC<SocialIconProps> = ({platform, url}) => {
    const icons = {
        facebook: Facebook,
        instagram: Instagram,
        twitter: Twitter,
        linkedin: Linkedin
    };

    const Icon = icons[platform];

    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-green-50 hover:bg-green-100 text-green-500 transition-all hover:scale-110">
            <Icon className="w-5 h-5"/>
        </a>
    );
};