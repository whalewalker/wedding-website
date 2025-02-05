import React, {createContext, ReactNode, useContext} from 'react';
import {WeddingContextType} from "../types";


const defaultContext: WeddingContextType = {
    coupleDetails: {
        groomName: "Damilare Williams",
        brideName: "Adetola Bolarinwa",
        coupleTitle: "Dami & Tola",
        groomOccupation: "Software Engineer",
        brideOccupation: "Architect",
        story: "We met at a local coffee shop...",
        date: new Date(2025, 5, 10).toDateString(),
        venue: {
            name: "Grand Palace",
            address: "123 Wedding Lane, Romance City",
            mapUrl: "https://maps.example.com",
        },
        firstDate: "Our first date was a magical evening at the city's botanical garden, where we talked for hours under the stars.",
        proposal: "The proposal happened during a surprise getaway to a cozy mountain cabin, surrounded by breathtaking views and heartfelt moments."
    },
};

const WeddingContext = createContext<WeddingContextType>(defaultContext);

export const WeddingProvider: React.FC<{ children: ReactNode }> = ({children}) => {
    return (
        <WeddingContext.Provider value={defaultContext}>
            {children}
        </WeddingContext.Provider>
    );
};

export const useWedding = () => useContext(WeddingContext);