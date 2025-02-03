import React from 'react';
import {Gift} from 'lucide-react';

export const Contribution: React.FC = () => {
    return (
        <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl md:text-5xl text-center font-dancing mb-16">
                Gift Registry
            </h2>

            <div className="max-w-2xl mx-auto text-center space-y-8">
                <div className="flex justify-center">
                    <Gift className="h-16 w-16 text-rose-500"/>
                </div>

                <p className="text-gray-600 leading-relaxed">
                    Your presence at our wedding is the greatest gift of all. However, if you
                    wish to honor us with a gift, we have created a registry to help you
                    select something special.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                    <a
                        href="#"
                        className="p-6 border border-rose-200 rounded-lg hover:border-rose-500 transition-colors group"
                    >
                        <h3 className="text-xl font-dancing mb-2 group-hover:text-rose-500">
                            Wedding Registry
                        </h3>
                        <p className="text-gray-600">View our curated wishlist</p>
                    </a>

                    <a
                        href="#"
                        className="p-6 border border-rose-200 rounded-lg hover:border-rose-500 transition-colors group"
                    >
                        <h3 className="text-xl font-dancing mb-2 group-hover:text-rose-500">
                            Cash Gift
                        </h3>
                        <p className="text-gray-600">Contribute to our future together</p>
                    </a>
                </div>
            </div>
        </div>
    );
};
