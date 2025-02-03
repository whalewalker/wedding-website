import React, {createContext, ReactNode, useContext} from 'react';

interface WeddingContextType {
    coupleDetails: {
        groomName: string;
        brideName: string;
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
        groomOccupation: "Software Engineer",
        brideOccupation: "Architect",
        story: "We met at a local coffee shop...",
        date: "June 15, 2024",
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