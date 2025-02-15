import {ForwardRefExoticComponent, useState} from 'react';
import {useWedding} from '../context';
import {Clock, Heart, LucideProps, Music, Sparkles} from 'lucide-react';


const TimelineItem = ({year, text, isLeft, icon: Icon}: {
    year: string, text: string, isLeft: boolean, icon: ForwardRefExoticComponent<Omit<LucideProps, "ref">>,
}) => {
    return (
        <div className={`flex flex-col ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-4 group`}>
            <div className={`flex-1 p-6 bg-white rounded-xl shadow-lg
            ${isLeft ? 'md:-translate-x-4' : 'md:translate-x-4'}
            animate-[slideIn_0.8s_cubic-bezier(0.4,0,0.2,1)_forwards]
            hover:shadow-xl hover:scale-105 transition-all duration-500
            border border-green-50`}>
                <div className="flex items-center gap-3 mb-2">
                    <Icon className="h-5 w-5 text-green-500"/>
                    <div className="font-semibold text-green-600">{year}</div>
                </div>
                <p className="text-gray-600">{text}</p>
            </div>
            <div className="relative">
                <div className="w-4 h-4 bg-gradient-to-r from-green-500 to-green-600 rounded-full">
                    <div className="absolute inset-0 bg-green-300 rounded-full animate-ping opacity-75"></div>
                </div>
                <div className="absolute w-px h-24 bg-gradient-to-b from-green-300 to-transparent
              left-1/2 -translate-x-1/2"></div>
            </div>
            <div className="flex-1 hidden md:block"></div>
        </div>
    );
};

export const AboutUs = () => {
    const {coupleDetails} = useWedding();
    const [showGroomTimeline, setShowGroomTimeline] = useState(true);

    const groomTimeline = (
        <div className="space-y-12">
            <TimelineItem year="2012"
                          text="I first met Adetola in 2012, shortly after we completed our WAEC (West African Examination Council) exams. At the time, we didn’t know each other; we had only crossed paths while writing the exams. However, after the exams, we began chatting and became friends."
                          isLeft={true} icon={Heart}/>
            <TimelineItem year="2018"
                          text="Fast forward to 2018, we were still in touch as friends, though we had lost contact for some time. We reconnected that same year at a church conference in Lagos. At the time, I was in my final year, while she was in her third year."
                          isLeft={false} icon={Clock}/>
            <TimelineItem year="2021"
                          text="As I approached the end of my time in the college, I began trusting God for a life partner. During this season of prayer, I felt the Lord speak to me about her. Seeking confirmation, I sought counsel but kept it to myself until 2021. That year, Adetola and some of her colleagues visited Lagos for a beach outing. Seeing it as the perfect moment, I crossed the waters to see her, my heart filled with hope. Under the open sky, with the waves as our witnesses, I finally found the courage to profess my love."
                          isLeft={true} icon={Sparkles}/>
            <TimelineItem year="2021"
                          text="As expected, she said she would pray about it, and I respected her need for time. Then, on October 17, 2021 (my birthday) she gave me the best gift I could ever ask for: her yes. In that beautiful moment, my heart soared, and our journey together began."
                          isLeft={false} icon={Music}/>
            <TimelineItem year="2024"
                          text="We courted until December 7, 2024, when I officially proposed. By God’s grace, Abikeade mi and I will be saying I do on April 17, 2025. It’s been a beautiful journey, and we can’t wait to build a life and a home together."
                          isLeft={true} icon={Music}/>
        </div>
    );

    const brideTimeline = (
        <div className="space-y-12">
            <TimelineItem year="2012"
                          text="I first met Damilare in 2012 during our WAEC exams. Back then, we were just two students focused on passing, never imagining the beautiful story that would unfold years later. We became friends after the exams but mostly kept in touch over calls, just casual chats, nothing serious."
                          isLeft={true} icon={Heart}/>
            <TimelineItem year="2018"
                          text="Fast forward to 2018, we reconnected at a church conference in Lagos. I had traveled from Ogun State, where I was schooling, while he was in Lagos. Seeing him again after so many years felt like a mini-reunion, and from that point, we stayed in touch."
                          isLeft={false} icon={Clock}/>
            <TimelineItem year="2021"
                          text="Now, let’s talk about April 11 2021, the day my gist changed! I came to Lagos for a beach hangout with my friends, just looking to have a good time. But guess what? That was the day he decided to cross the ocean (literally... lol) to tell me how he felt. I remember lying in bed that night, wide awake, asking myself, “Did that just happen? Am I dreaming?” It was so surreal! I needed time to pray about it, and on October 17, 2021; his birthday, of all days, I gave him my answer: a big, heartfelt
                          yes. And just like that, our love journey began."
                          isLeft={true} icon={Sparkles}/>
            <TimelineItem year="2024"
                          text="From then on, we courted until December 7, 2024, when he pulled off the big proposal. And now, here we are, counting down to April 17, 2025; exactly four years after he first told me his intentions. It has been an incredible ride, and I honestly cannot wait to build forever with my Anjorin!"
                          isLeft={false} icon={Music}/>
        </div>
    );


    return (
        <div className="max-w-7xl mx-auto space-y-16">
            {/* Hero Section */}

            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-dancing mb-4">
                    Our Love Story
                </h2>
                <div className="flex items-center justify-center gap-2 text-green-500">
                    <div className="h-px w-24 bg-gradient-to-r from-transparent via-green-300 to-transparent"></div>
                    <Heart className="h-8 w-8 text-green-500 animate-pulse" strokeWidth={1.5}/>
                    <div className="h-px w-24 bg-gradient-to-r from-transparent via-green-300 to-transparent"></div>
                </div>
            </div>

            {/* Buttons to toggle timelines */}
            <div className="flex justify-center gap-4 mb-8">
                <button
                    className={`px-4 py-2 rounded-full font-semibold transition-all duration-500 ${showGroomTimeline ? 'bg-green-500 text-white' : 'bg-green-100 text-green-500'}`}
                    onClick={() => setShowGroomTimeline(true)}
                >
                    Damilare's Story
                </button>
                <button
                    className={`px-4 py-2 rounded-full font-semibold transition-all duration-500 ${!showGroomTimeline ? 'bg-green-500 text-white' : 'bg-green-100 text-green-500'}`}
                    onClick={() => setShowGroomTimeline(false)}
                >
                    Adetola's Story
                </button>
            </div>

            {/* Timeline Section */}
            <div className="space-y-16">
                <div className="space-y-12 transition-opacity duration-500">
                    {showGroomTimeline ? groomTimeline : brideTimeline}
                </div>
            </div>

            {/* Quote Section */}
            <div className="text-center space-y-6 max-w-2xl mx-auto">
                <div className="relative inline-block">
                    <div className="text-7xl text-green-200 font-serif opacity-80">"</div>
                </div>
                <p className="text-xl md:text-2xl text-green-900 italic font-light">
                    &quot;Every good gift and every perfect gift is from above, and comes down from the Father of
                    lights&quot;
                    <br/>
                    <strong className="block mt-2 text-green-700 text-lg">- James 1:17</strong>
                </p>
                <div className="flex justify-center items-center gap-4 mt-8">
                    <span
                        className="text-xl font-dancing bg-gradient-to-r from-green-800 to-green-900 bg-clip-text text-transparent">{coupleDetails.groomName}</span>
                    <Heart className="h-5 w-5 text-green-500 animate-pulse"/>
                    <span
                        className="text-xl font-dancing bg-gradient-to-r from-green-800 to-green-900 bg-clip-text text-transparent">{coupleDetails.brideName}</span>
                </div>
            </div>
        </div>
    );
};

