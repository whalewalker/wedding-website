export type SocialPlatform = 'facebook' | 'instagram' | 'twitter' | 'linkedin';

export interface GalleryImage {
    id: number;
    src: string;
    alt: string;
    width: number;
    height: number;
    gridSpan?: {
        row?: number;
        col?: number;
    };
}

export interface WeddingContextType {
    coupleDetails: {
        groomName: string;
        brideName: string;
        coupleTitle: string;
        groomOccupation: string;
        brideOccupation: string;
        firstDate: string;
        proposal: string;
        story: string;
        date: string;
        venue: {
            name: string;
            address: string;
            mapUrl: string;
        };
    };
}
