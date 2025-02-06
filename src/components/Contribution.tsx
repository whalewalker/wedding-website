import {useState} from 'react';
import {CheckCircle, Copy, CreditCard, ExternalLink, Gift, Share2} from 'lucide-react';

const WishlistItem = ({title, price, image, purchased}: {
    title: string;
    price: string;
    image: string;
    purchased: boolean
}) => (<div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden group">
        <div className="relative aspect-square">
            <img src={image} alt={title} className="w-full h-full object-cover"/>
            {purchased && (
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                    <span className="text-white font-medium">Already Gifted</span>
                </div>
            )}
        </div>
        <div className="p-4 space-y-2">
            <h4 className="font-medium text-gray-800 group-hover:text-rose-600 transition-colors">{title}</h4>
            <div className="flex justify-between items-center">
                <span className="text-rose-600 font-medium">${price}</span>
                <button
                    className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all
                     ${purchased
                        ? 'bg-gray-100 text-gray-500'
                        : 'bg-rose-50 text-rose-600 hover:bg-rose-100'}`}
                    disabled={purchased}
                >
                    {purchased ? 'Gifted' : 'Gift This'}
                </button>
            </div>
        </div>
    </div>
);

const AccountDetail = ({bank, number, name, copyText}: {
    bank: string;
    number: string;
    name: string;
    copyText: string
}) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(copyText);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="p-4 bg-white rounded-xl border border-gray-100 space-y-2">
            <div className="flex justify-between items-center">
                <span className="text-gray-600">{bank}</span>
                <button
                    onClick={handleCopy}
                    className="p-2 hover:bg-gray-50 rounded-lg transition-colors"
                >
                    {copied ? <CheckCircle className="h-5 w-5 text-green-500"/> :
                        <Copy className="h-5 w-5 text-gray-400"/>}
                </button>
            </div>
            <div className="font-medium">{number}</div>
            <div className="text-sm text-gray-500">{name}</div>
        </div>
    );
};

export const Contribution = () => {
    const [activeTab, setActiveTab] = useState('wishlist');
    const wishlistItems = [
        {
            title: "Coffee Maker",
            price: "299",
            image: new URL('../assets/home-img-1.png', import.meta.url).href,
            purchased: false
        },
        {
            title: "Stand Mixer",
            price: "449",
            image: new URL('../assets/home-img-1.png', import.meta.url).href,
            purchased: true
        },
        {
            title: "Dinner Set",
            price: "199",
            image: new URL('../assets/home-img-1.png', import.meta.url).href,
            purchased: false
        },
        {
            title: "Smart Home Kit",
            price: "279",
            image: new URL('../assets/home-img-1.png', import.meta.url).href,
            purchased: false
        },
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 py-16">
            <div className="text-center space-y-4 mb-16">
                <h2 className="text-5xl font-dancing bg-gradient-to-r from-rose-600 to-pink-600
                     bg-clip-text text-transparent animate-[fadeIn_1s_ease-out_forwards]">
                    Gift Registry
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    Your presence at our wedding is the greatest gift of all. However, if you wish to honor us
                    with a gift, we've created this registry to help you choose something special.
                </p>
            </div>

            <div className="max-w-4xl mx-auto">
                {/* Tab Navigation */}
                <div className="flex justify-center gap-4 mb-12">
                    <button
                        onClick={() => setActiveTab('wishlist')}
                        className={`px-6 py-2 rounded-full font-medium transition-all duration-300
                     ${activeTab === 'wishlist'
                            ? 'bg-rose-500 text-white shadow-lg shadow-rose-200'
                            : 'bg-rose-50 text-rose-600 hover:bg-rose-100'}`}
                    >
            <span className="flex items-center gap-2">
              <Gift className="h-4 w-4"/>
              Wishlist
            </span>
                    </button>
                    <button
                        onClick={() => setActiveTab('monetary')}
                        className={`px-6 py-2 rounded-full font-medium transition-all duration-300
                     ${activeTab === 'monetary'
                            ? 'bg-rose-500 text-white shadow-lg shadow-rose-200'
                            : 'bg-rose-50 text-rose-600 hover:bg-rose-100'}`}
                    >
            <span className="flex items-center gap-2">
              <CreditCard className="h-4 w-4"/>
              Monetary Gift
            </span>
                    </button>
                </div>

                {/* Wishlist Tab */}
                {activeTab === 'wishlist' && (
                    <div className="space-y-8 animate-[fadeIn_0.5s_ease-out_forwards]">
                        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                            {wishlistItems.map((item, index) => (
                                <WishlistItem key={index} {...item} />
                            ))}
                        </div>
                        <div className="flex justify-center">
                            <button className="flex items-center gap-2 px-6 py-3 bg-gray-50 hover:bg-gray-100
                               rounded-full text-gray-600 transition-colors">
                                <ExternalLink className="h-4 w-4"/>
                                View Full Registry
                            </button>
                        </div>
                    </div>
                )}

                {/* Monetary Gift Tab */}
                {activeTab === 'monetary' && (
                    <div className="space-y-8 animate-[fadeIn_0.5s_ease-out_forwards]">
                        <div className="bg-rose-50/50 rounded-2xl p-8 space-y-6">
                            <div className="space-y-4">
                                <h3 className="text-xl font-medium text-gray-800">Bank Account Details</h3>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <AccountDetail
                                        bank="Chase Bank"
                                        number="1234 5678 9012 3456"
                                        name="John & Jane Doe"
                                        copyText="1234567890123456"
                                    />
                                    <AccountDetail
                                        bank="Bank of America"
                                        number="9876 5432 1098 7654"
                                        name="John & Jane Doe"
                                        copyText="9876543210987654"
                                    />
                                </div>
                            </div>

                            <div className="flex justify-center pt-4">
                                <button className="flex items-center gap-2 px-6 py-2 bg-white rounded-full
                                 text-rose-600 hover:bg-rose-50 transition-colors">
                                    <Share2 className="h-4 w-4"/>
                                    Share Account Details
                                </button>
                            </div>
                        </div>

                        <div className="text-center text-gray-600">
                            <p>Your contribution will help us build our future together.</p>
                            <p>Thank you for your generosity! ❤️</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Contribution;