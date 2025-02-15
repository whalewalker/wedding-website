import React, {useEffect, useRef, useState} from 'react';
import {Pause, Play, Volume2, VolumeX} from 'lucide-react';

interface AudioPlayerProps {
    audioUrl: string;
}

export const AudioPlayer: React.FC<AudioPlayerProps> = ({audioUrl}) => {
    const [isPlaying, setIsPlaying] = useState(true);
    const [isMuted, setIsMuted] = useState(false);
    const [volume, setVolume] = useState(0.2);
    const audioRef = useRef<HTMLAudioElement>(null);

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = volume;
            const playAudio = async () => {
                try {
                    await audioRef.current?.play();
                } catch (error) {
                    console.error("Autoplay blocked:", error);
                    setIsPlaying(false);
                }
            };
            playAudio();
        }
    }, [audioUrl]);

    const togglePlay = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const toggleMute = () => {
        if (audioRef.current) {
            audioRef.current.muted = !isMuted;
            setIsMuted(!isMuted);
        }
    };

    const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newVolume = parseFloat(e.target.value);
        setVolume(newVolume);
        if (audioRef.current) {
            audioRef.current.volume = newVolume;
        }
    };

    return (
        <div
            className="fixed bottom-4 right-4 flex items-center space-x-4 bg-green-500/10 backdrop-blur-sm rounded-full px-4 py-2 text-green-100 z-50">
            <button onClick={togglePlay} className="p-2 hover:text-green-300 transition-colors">
                {isPlaying ? <Pause className="w-6 h-6"/> : <Play className="w-6 h-6"/>}
            </button>

            <button onClick={toggleMute} className="p-2 hover:text-green-300 transition-colors">
                {isMuted ? <VolumeX className="w-6 h-6"/> : <Volume2 className="w-6 h-6"/>}
            </button>

            <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={volume}
                onChange={handleVolumeChange}
                className="w-24 accent-green-500"
            />

            <audio ref={audioRef} src={audioUrl} loop className="hidden"/>
        </div>
    );
};
