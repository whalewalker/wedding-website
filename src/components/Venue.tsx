import React from 'react';
import {useWedding} from '../context';
import {Calendar, Clock, MapPin} from 'lucide-react';

export const Venue: React.FC = () => {
    const {coupleDetails} = useWedding();

    return (
        <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl md:text-5xl text-center font-dancing mb-16">
                Wedding Venue
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                    <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                        <img
                            src="https://i.pinimg.com/564x/50/ac/5e/50ac5efa14835dca3851d13f28ef6106.jpg"
                            alt="Venue"
                            className="object-cover w-full h-full"
                        />
                    </div>
                    {/*<div className="relative aspect-[4/3] rounded-lg overflow-hidden">*/}
                    {/*    <img*/}
                    {/*        src="https://i.pinimg.com/564x/50/ac/5e/50ac5efa14835dca3851d13f28ef6106.jpg"*/}
                    {/*        alt="Venue interior"*/}
                    {/*        className="object-cover w-full h-full"*/}
                    {/*    />*/}
                    {/*</div>*/}
                </div>

                <div className="space-y-8">
                    <h3 className="text-3xl font-dancing">{coupleDetails.venue.name}</h3>

                    <div className="space-y-4">
                        <div className="flex items-start gap-4">
                            <MapPin className="h-6 w-6 text-rose-500 mt-1"/>
                            <div>
                                <h4 className="font-semibold mb-1">Location</h4>
                                <p className="text-gray-600">{coupleDetails.venue.address}</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <Calendar className="h-6 w-6 text-rose-500 mt-1"/>
                            <div>
                                <h4 className="font-semibold mb-1">Date</h4>
                                <p className="text-gray-600">{coupleDetails.date}</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <Clock className="h-6 w-6 text-rose-500 mt-1"/>
                            <div>
                                <h4 className="font-semibold mb-1">Schedule</h4>
                                <p className="text-gray-600">
                                    Ceremony: 2:00 PM<br/>
                                    Reception: 6:00 PM
                                </p>
                            </div>
                        </div>
                    </div>

                    <button
                        className="w-full md:w-auto px-6 py-3 bg-rose-500 hover:bg-rose-600 text-white rounded-full transition-colors">
                        Get Directions
                    </button>
                </div>
            </div>
        </div>
    );
};
