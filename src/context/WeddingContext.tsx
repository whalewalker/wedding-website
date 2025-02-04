import React, {createContext, ReactNode, useContext} from 'react';

interface WeddingContextType {
    coupleDetails: {
        groomName: string;
        brideName: string;
        coupleTitle: string;
        groomOccupation: string;
        brideOccupation: string;
        story: string;
        date: string;
        venue: {
            name: string;
            address: string;
            mapUrl: string;
        };
    };
}

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