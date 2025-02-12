import React, {useState} from 'react';
import {Heart} from 'lucide-react';
import {CountdownDisplay} from './CountdownDisplay';
import {useWedding} from '../context';

export const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const {coupleDetails: {coupleTitle, date}} = useWedding();

    const navItems = [
        {href: '#home', label: 'Home'},
        {href: '#couple', label: 'Couple'},
        {href: '#gallery', label: 'Gallery'},
        {href: '#about-us', label: 'About Us'},
        {href: '#venue', label: 'Venue'},
        {href: '#contribution', label: 'Registry'},
    ];

    return (
        <nav className="fixed w-full bg-green-100 backdrop-blur-sm shadow-md z-50">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center">
                        <Heart className="h-6 w-6 text-green-500"/>
                        <span className="ml-2 text-xl font-dancing text-green-700">{coupleTitle}</span>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                className="text-green-700 hover:text-gray-600 transition-colors"
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>

                    {/* Countdown in Navbar */}
                    <CountdownDisplay targetDate={date} variant="small"/>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                            />
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            {navItems.map((item) => (
                                <a
                                    key={item.href}
                                    href={item.href}
                                    className="block px-3 py-2 text-gray-600 hover:text-green-500"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.label}
                                </a>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};