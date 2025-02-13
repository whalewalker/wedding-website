import React, {ForwardRefExoticComponent} from 'react';
import {useWedding} from '../context';
import {Calendar, Clock, LucideProps, MapPin} from 'lucide-react';
import 'leaflet/dist/leaflet.css';


const VenueDetail = ({icon: Icon, title, children}: {
    icon: ForwardRefExoticComponent<Omit<LucideProps, "ref">>,
    title: string,
    children: React.ReactNode
}) => (<div className="flex items-start gap-4 group">
        <div className="p-3 bg-green-50 rounded-xl group-hover:bg-green-100 transition-colors duration-300">
            <Icon className="h-6 w-6 text-green-500"/>
        </div>
        <div>
            <h4 className="font-medium text-gray-800 mb-1">{title}</h4>
            <div className="text-gray-600">{children}</div>
        </div>
    </div>
);

export const Venue = () => {
    const {coupleDetails} = useWedding();

    const venueImages = [
        new URL('../assets/home-img-1.png', import.meta.url).href,
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 py-16">
            <div className="text-center space-y-4 mb-16">
                <h2 className=" text-4xl md:text-5xl font-dancing mb-4z">
                    Celebration Venue
                </h2>
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
                                className={"absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-700"}
                            />
                        ))}
                    </div>

                    <div className="bg-white rounded-2xl shadow-lg p-6 space-y-6">
                        <h3 className="text-3xl font-dancing text-gray-800">{coupleDetails.venue.name}</h3>
                        <div className="space-y-6">
                            <VenueDetail icon={MapPin} title="Location">
                                {coupleDetails.venue.address}
                            </VenueDetail>

                            <VenueDetail icon={Calendar} title="Date">
                                {new Date(coupleDetails.date).toLocaleDateString('en-US', {
                                    weekday: 'long',
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                })}
                            </VenueDetail>

                            <VenueDetail icon={Clock} title="Schedule">
                                <div className="space-y-2">
                                    <div className="flex justify-between items-center">
                                        <span> Traditional wedding</span>
                                        <span className="font-medium">&nbsp;12:00 PM</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span>Ceremony</span>
                                        <span className="font-medium">&nbsp;4:00 PM</span></div>
                                    <div className="h-px bg-gray-100"></div>
                                </div>
                            </VenueDetail>
                        </div>
                    </div>
                </div>

                <div className="space-y-6">
                    <div className="relative w-full h-0 pb-[100%] rounded-2xl overflow-hidden shadow-lg">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31713.404260475036!2d3.0710429118853932!3d6.499449396239201!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b83706453fec3%3A0x3835517c1bfa1715!2sPacific%20Crown%20Hotel%20And%20Suite!5e0!3m2!1sen!2sng!4v1739403885338!5m2!1sen!2sng"
                            className="absolute inset-0 w-full h-full border-0" allowFullScreen loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Venue;