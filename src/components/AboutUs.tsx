import {ForwardRefExoticComponent, useState} from 'react';
import {useWedding} from '../context';
import {Calendar, Clock, Heart, LucideProps, MapPin, Music, Sparkles, Stars} from 'lucide-react';


const StorySection = ({icon: Icon, title, content, delay}: {
    icon: ForwardRefExoticComponent<Omit<LucideProps, "ref">>,
    title: string,
    content: string,
    delay: number
}) => {
    return (
        <div
            className="translate-y-6 animate-[fadeIn_1.2s_cubic-bezier(0.4,0,0.2,1)_forwards] space-y-4 group"
            style={{animationDelay: `${delay}ms`}}
        >
            <div className="flex items-center gap-4 group">
                <div className="p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl shadow-lg
                      group-hover:shadow-green-200/50 transition-all duration-500
                      group-hover:scale-110">
                    <Icon className="h-6 w-6 text-green-500 group-hover:text-green-600 transition-colors"
                          strokeWidth={1.5}/>
                </div>
                <h3 className="text-2xl font-dancing bg-gradient-to-r from-green-800 to-green-900
                       bg-clip-text text-transparent">{title}</h3>
            </div>
            <p className="text-gray-600 leading-relaxed pl-16 animate-[fadeIn_1s_ease-out_forwards]"
               style={{animationDelay: `${delay + 200}ms`}}>
                {content}
            </p>
        </div>
    );
};

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
    const [isImageLoaded, setImageLoaded] = useState(false);

    return (
        <div className="max-w-7xl mx-auto px-4 py-20 space-y-32">
            {/* Hero Section */}
            <div className="text-center space-y-8">
                <div className="relative inline-block">
                    <h2 className="text-4xl md:text-5xl font-dancing mb-4">
                        Our Love Story
                    </h2>
                    <Sparkles className="absolute -top-8 -right-8 h-8 w-8 text-green-400 animate-pulse"/>
                    <Stars className="absolute -bottom-8 -left-8 h-8 w-8 text-green-600 animate-pulse"/>
                </div>
                <div
                    className="flex justify-center items-center gap-4 animate-[fadeIn_1s_ease-out_0.7s_forwards]">
                    <div className="h-px w-24 bg-gradient-to-r from-transparent via-green-300 to-transparent"></div>
                    <Heart className="h-8 w-8 text-green-500 animate-pulse" strokeWidth={1.5}/>
                    <div className="h-px w-24 bg-gradient-to-r from-transparent via-green-300 to-transparent"></div>
                </div>
            </div>

            {/* Main Story Section */}
            <div className="grid md:grid-cols-2 gap-16 items-center">
                <div className="relative group">
                    <div className="absolute -inset-4 bg-gradient-to-r from-green-100 to-green-200 rounded-2xl
                            group-hover:opacity-100 transition-opacity duration-700 blur-xl">
                    </div>
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden
                         animate-[slideIn_1.2s_cubic-bezier(0.4,0,0.2,1)_forwards]">
                        <img
                            src={new URL('../assets/home-img-2.png', import.meta.url).href}
                            alt="Our Story"
                            className={`object-cover w-full h-full transition-all duration-1000 
                         group-hover:scale-110 ${isImageLoaded ? 'opacity-100' : 'opacity-50'}`}
                            onLoad={() => setImageLoaded(true)}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                    </div>
                </div>

                <div className="space-y-12">
                    <StorySection icon={Heart} title="How We Met" content={coupleDetails.story} delay={500}/>
                    <StorySection icon={Calendar} title="First Date" content={coupleDetails.firstDate} delay={700}/>
                    <StorySection icon={MapPin} title="The Proposal" content={coupleDetails.proposal} delay={900}/>
                </div>
            </div>

            {/* Timeline Section */}
            <div className="space-y-16">
                <h3 className="text-4xl font-dancing text-center bg-gradient-to-r from-green-800 to-green-900
                                       bg-clip-text text-transparent">Our Journey Together</h3>
                <div className="space-y-12">
                    <TimelineItem year="2012"
                                  text="I first met Adetola in 2012, shortly after we completed our WAEC (West African Examination Council) exams. At the time, we didn’t know each other; we had only crossed paths while writing the exams. However, after the exams, we began chatting and became friends."
                                  isLeft={true} icon={Heart}/>
                    <TimelineItem year="2019"
                                  text="Fast forward to 2019, we were still in touch as friends, though we had lost contact for some time. We reconnected that same year at a church conference in Lagos. Adetola had traveled from Ogun State, where she was schooling, while I was in Lagos. At the time, I was in my final year, and she was in her third year."
                                  isLeft={false} icon={Clock}/>
                    <TimelineItem year="2021"
                                  text="As I approached the end of my time in school, I began trusting God for a life partner. During this period of prayer, I felt the Lord speak to me about her. I kept this revelation to myself until 2021. That year, Adetola and some of her colleagues visited Lagos for a beach outing. I saw it as an opportunity to express my feelings, so I professed my love to her and shared my intention for us to journey through life together."
                                  isLeft={true} icon={Sparkles}/>
                    <TimelineItem year="2024"
                                  text="We courted from that time until December 7, 2024, when I officially proposed to her. By God’s grace, we’ll be getting married this year, on April 17, 2025. It’s been a beautiful journey so far, and we look forward to building a wonderful home together."
                                  isLeft={false} icon={Music}/>
                </div>
            </div>

            {/* Quote Section */}
            <div className="text-center space-y-6 max-w-2xl mx-auto">
                <div className="relative inline-block">
                    <div className="text-7xl text-green-200 font-serif opacity-80">"</div>
                    <Sparkles className="absolute -top-4 -right-4 h-6 w-6 text-green-300 animate-pulse"/>
                </div>
                <p className="text-2xl text-green-900 italic font-light">
                    &quot;Every good gift and every perfect gift is from above, and comes down from the Father of
                    lights&quot;
                    <br/>
                    <strong className="block mt-2 text-green-700 text-lg">- James 1:17</strong></p>
                <div className="flex justify-center items-center gap-4 mt-8">
          <span className="text-xl font-dancing bg-gradient-to-r  from-green-800 to-green-900
                          bg-clip-text text-transparent">{coupleDetails.groomName}</span>
                    <Heart className="h-5 w-5 text-green-500 animate-pulse"/>
                    <span className="text-xl font-dancing bg-gradient-to-r from-green-800 to-green-900
                          bg-clip-text text-transparent">{coupleDetails.brideName}</span>
                </div>
            </div>
        </div>
    );
};

