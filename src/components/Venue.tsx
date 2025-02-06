import React, {ForwardRefExoticComponent, useState} from 'react';
import {useWedding} from '../context';
import {Bus, Calendar, Car, Clock, LucideProps, MapPin, Navigation, Train} from 'lucide-react';
import {GoogleMap, LoadScript, Marker} from '@react-google-maps/api';

const MapComponent = ({location}: { location: { lat: number, lng: number } }) => {
    const mapStyles = {
        height: "100%",
        width: "100%"
    };

    const defaultCenter = {
        lat: location.lat, // Add your venue's latitude
        lng: location.lng  // Add your venue's longitude
    };

    return (
        <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
            <GoogleMap
                mapContainerStyle={mapStyles}
                zoom={15}
                center={defaultCenter}
            >
                <Marker position={defaultCenter}/>
            </GoogleMap>
        </LoadScript>
    );
};

const TransportOption = ({icon: Icon, title, details}: {
    icon: ForwardRefExoticComponent<Omit<LucideProps, "ref">>,
    title: string,
    details: string
}) => (
    <div className="p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
        <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-rose-50 rounded-lg">
                <Icon className="h-5 w-5 text-rose-500"/>
            </div>
            <h4 className="font-medium">{title}</h4>
        </div>
        <p className="text-gray-600 text-sm pl-11">{details}</p>
    </div>
);

const VenueDetail = ({icon: Icon, title, children}: {
    icon: ForwardRefExoticComponent<Omit<LucideProps, "ref">>,
    title: string,
    children: React.ReactNode
}) => (<div className="flex items-start gap-4 group">
        <div className="p-3 bg-rose-50 rounded-xl group-hover:bg-rose-100 transition-colors duration-300">
            <Icon className="h-6 w-6 text-rose-500"/>
        </div>
        <div>
            <h4 className="font-medium text-gray-800 mb-1">{title}</h4>
            <div className="text-gray-600">{children}</div>
        </div>
    </div>
);

export const Venue = () => {
    const {coupleDetails} = useWedding();
    const [activeImage, setActiveImage] = useState(0);

    const venueImages = [
        new URL('../assets/home-img-1.png', import.meta.url).href,
        new URL('../assets/home-img-2.png', import.meta.url).href,
        new URL('../assets/home-img-3.png', import.meta.url).href
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 py-16">
            <div className="text-center space-y-4 mb-16">
                <h2 className="text-5xl font-dancing bg-gradient-to-r from-rose-600 to-pink-600
                     bg-clip-text text-transparent animate-[fadeIn_1s_ease-out_forwards]">
                    Celebration Venue
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    Join us for an unforgettable celebration at this beautiful location
                </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
                <div className="space-y-6">
                    <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl">
                        <div className="absolute inset-0 bg-black/20 z-10"></div>
                        {venueImages.map((src, index) => (
                            <img
                                key={index}
                                src={src}
                                alt={`Venue view ${index + 1}`}
                                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700
                          ${activeImage === index ? 'opacity-100' : 'opacity-0'}`}
                            />
                        ))}
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                            {venueImages.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActiveImage(index)}
                                    className={`w-2 h-2 rounded-full transition-all duration-300 
                            ${activeImage === index ? 'bg-white w-6' : 'bg-white/60'}`}
                                />
                            ))}
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl shadow-lg p-6 space-y-6">
                        <h3 className="text-3xl font-dancing text-gray-800">{coupleDetails.venue.name}</h3>
                        <div className="space-y-6">
                            <VenueDetail icon={MapPin} title="Location">
                                {coupleDetails.venue.address}
                            </VenueDetail>

                            <VenueDetail icon={Calendar} title="Date">
                                {coupleDetails.date}
                            </VenueDetail>

                            <VenueDetail icon={Clock} title="Schedule">
                                <div className="space-y-2">
                                    <div className="flex justify-between items-center">
                                        <span>Ceremony</span>
                                        <span className="font-medium">2:00 PM</span>
                                    </div>
                                    <div className="h-px bg-gray-100"></div>
                                    <div className="flex justify-between items-center">
                                        <span>Reception</span>
                                        <span className="font-medium">6:00 PM</span>
                                    </div>
                                </div>
                            </VenueDetail>
                        </div>
                    </div>
                </div>

                <div className="space-y-6">
                    <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg">
                        {/* Replace this div with actual Google Maps component */}
                        <MapComponent location={coupleDetails.venue.location}/>
                        <div className="w-full h-full bg-gray-100 animate-pulse flex items-center justify-center">
                            <Navigation className="h-8 w-8 text-gray-400"/>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h4 className="text-xl font-medium">Getting There</h4>
                        <div className="grid sm:grid-cols-2 gap-4">
                            <TransportOption
                                icon={Car}
                                title="By Car"
                                details="15 minutes from city center. Free parking available."
                            />
                            <TransportOption
                                icon={Train}
                                title="By Train"
                                details="Nearest station: Central Station (10 min walk)"
                            />
                            <TransportOption
                                icon={Bus}
                                title="By Bus"
                                details="Bus routes 101, 102 stop nearby"
                            />
                            <button
                                onClick={() => window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(coupleDetails.venue.address)}`)}
                                className="flex items-center justify-center gap-2 p-4 bg-rose-500 text-white rounded-xl
                         hover:bg-rose-600 transition-colors duration-300"
                            >
                                <Navigation className="h-5 w-5"/>
                                Get Directions
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Venue;