import React, {createContext, ReactNode, useContext} from 'react';
import {WeddingContextType} from "../types";


const defaultContext: WeddingContextType = {
    coupleDetails: {
        groomName: "Damilare Akinremi",
        brideName: "Adetola Bolarinwa",
        coupleTitle: "Dami & Tola",
        groomOccupation: "Software Engineer",
        brideOccupation: "Architect",
        date: new Date(2025, 3, 17).toDateString(),
        venue: {
            name: "Pacific Hotel",
            address: "Pacific hotel - Odunade event centre, Exodus Carwash Bus-stop, Badagry-Expressway, Lagos",
            mapUrl: "https://maps.example.com",
            location: {
                lat: 6.495371317369671,
                lng: 3.0146947770696637,
            }
        },
        firstDate: "Our first date was a magical evening at the city's botanical garden, where we talked for hours under the stars.",
        story: "We first met in 2012 after our WAEC exams and became friends. In 2019, we reconnected at a church conference and stayed in touch. In 2021, I expressed my feelings, and she said 'yes' on October 17, 2021.",
        proposal: "I proposed on December 7, 2024, after courting for three years. We are excited to get married on April 17, 2025."
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