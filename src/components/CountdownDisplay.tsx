import React from 'react';
import {useCountdown} from '../hooks';

interface CountdownDisplayProps {
    targetDate: string;
    variant?: 'large' | 'small';
}

export const CountdownDisplay: React.FC<CountdownDisplayProps> = ({targetDate, variant = 'large'}) => {
    const timeLeft = useCountdown(targetDate);

    const timeUnits = [
        {label: 'Days', value: timeLeft.days},
        {label: 'Hours', value: timeLeft.hours},
        {label: 'Minutes', value: timeLeft.minutes},
        {label: 'Seconds', value: timeLeft.seconds},
    ];

    if (variant === 'small') {
        return (
            <div className="hidden md:flex items-center space-x-4 text-green-700">
                {timeUnits.map((unit) => (
                    <div key={unit.label} className="text-center">
                        <span className="font-semibold">{unit.value.toString().padStart(2, '0')}</span>
                        <span className="text-xs ml-1">{unit.label.charAt(0)}</span>
                    </div>
                ))}
            </div>
        );
    }

    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-green-200">
            {timeUnits.map((unit) => (
                <div
                    key={unit.label}
                    className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center"
                >
                    <div className="text-3xl md:text-4xl font-bold">
                        {unit.value.toString().padStart(2, '0')}
                    </div>
                    <div className="text-sm md:text-base uppercase tracking-wider">
                        {unit.label}
                    </div>
                </div>
            ))}
        </div>
    );
};