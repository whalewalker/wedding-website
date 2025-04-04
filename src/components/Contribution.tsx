import {useState} from 'react';
import {CheckCircle, Copy} from 'lucide-react';


const AccountDetail = ({bank, number, name, copyText, sortCode, swiftCode, branch}: {
    bank: string;
    number: string;
    name: string;
    copyText: string,
    sortCode?: string;
    swiftCode?: string;
    branch?: string;
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
            <div className="text-sm text-gray-500">
                {sortCode && <><strong>Sort Code:</strong> {sortCode} | </>}
                {swiftCode && <><strong>Swift Code:</strong> {swiftCode} | </>}
                {branch && <><strong>Branch:</strong> {branch}</>}
            </div>
        </div>
    );
};

export const Contribution = () => {
    return (
        <div className="max-w-7xl mx-auto py-10">
            <div className="text-center space-y-4 mb-16">
                <h2 className=" text-4xl md:text-5xl font-dancing mb-4z">
                    Contributions & Gifts
                </h2>
                <p className="text-green-800 max-w-2xl mx-auto">
                    Your presence at our wedding is the greatest gift of all! However, if you wish to bless us with a
                    gift, we would truly appreciate your kindness and thoughtfulness.
                </p>
            </div>
            <div className="space-y-8 animate-[fadeIn_0.5s_ease-out_forwards]">
                <div className="bg-rose-50/50 rounded-2xl p-8 space-y-6">
                    <div className="space-y-4">
                        <h3 className="text-xl font-medium text-gray-800">Bank Account Details</h3>
                        <div className="grid sm:grid-cols-2 gap-4">
                            <AccountDetail
                                bank="Zenith Bank (Naira)"
                                number="2191 6920 20"
                                name="Awwal Damilare Akinremi"
                                copyText="2191692020"
                            />
                            <AccountDetail
                                bank="Zenith Bank (Dollar)"
                                number="5000 0433 14"
                                name="Awwal Damilare Akinremi"
                                copyText="5000043314"
                                swiftCode="ZEIBNGLA"
                                sortCode="057151410"
                                branch="Tejuosho Market, Lagos"
                            />
                            <AccountDetail
                                bank="Zenith Bank (Pounds)"
                                number="5061 4164 25"
                                name="Awwal Damilare Akinremi"
                                copyText="5061416425"
                                swiftCode="ZEIBNGLA"
                                sortCode="057151410"
                                branch="Tejuosho Market, Lagos"
                            />
                            <AccountDetail
                                bank="Zenith Bank (Euro)"
                                number="5081 1378 23"
                                name="Awwal Damilare Akinremi"
                                copyText="5081137823"
                                swiftCode="ZEIBNGLA"
                                sortCode="057151410"
                                branch="Tejuosho Market, Lagos"
                            />
                            {/*<AccountDetail*/}
                            {/*    bank="Zenith Bank"*/}
                            {/*    number="SWIFTCODE: ZEIBNGLA"*/}
                            {/*    name="Tejuosho Market"*/}
                            {/*    copyText="ZEIBNGLA"*/}
                            {/*/>*/}
                        </div>
                    </div>
                </div>

                <div className="text-center text-green-800">
                    <p>Thank you for your love and generosity! 💚</p>
                </div>
            </div>
        </div>
    );
};