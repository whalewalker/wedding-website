import React from 'react';
import {useWedding} from '../context';

export const Couple: React.FC = () => {
    const {coupleDetails} = useWedding();

    return (
        <div className="max-w-7xl mx-auto px-4 py-16">
            <h2 className="text-4xl md:text-5xl text-center font-dancing mb-16">
                Happy Couple
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
                {/* Groom */}
                <div className="text-center">
                    <div className="relative w-64 h-64 mx-auto mb-6">
                        <img
                            src="https://www.bellanaija.com/wp-content/uploads/2016/09/TWC-OUCH-BN-Style-BellaNaija.com-06.jpg"
                            alt="Groom"
                            className="rounded-full object-cover"
                        />
                    </div>
                    <h3 className="text-2xl font-dancing mb-2">{coupleDetails.groomName}</h3>
                    <p className="text-gray-600 mb-4">{coupleDetails.groomOccupation}</p>
                </div>

                {/* Bride */}
                <div className="text-center">
                    <div className="relative w-64 h-64 mx-auto mb-6">
                        <img
                            src="https://www.bellanaijaweddings.com/wp-content/uploads/2022/06/Bare2Beauty-Bridal-Inspo.jpg"
                            alt="Bride"
                            className="rounded-full object-cover"
                        />
                    </div>
                    <h3 className="text-2xl font-dancing mb-2">{coupleDetails.brideName}</h3>
                    <p className="text-gray-600 mb-4">{coupleDetails.brideOccupation}</p>
                </div>
            </div>
        </div>
    );
};