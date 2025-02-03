import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {WeddingProvider} from './context';
import {AboutUs, Contribution, Couple, Footer, Gallery, Home, Navbar, Venue} from "./components";


const App: React.FC = () => {
    return (
        <WeddingProvider>
            <Router>
                <div className="min-h-screen bg-rose-200">
                    <Navbar/>
                    <main>
                        <section id="home" className="min-h-screen">
                            <Home/>
                        </section>
                        <section id="couple" className="min-h-screen py-16">
                            <Couple/>
                        </section>
                        <section id="gallery" className="min-h-screen py-16">
                            <Gallery/>
                        </section>
                        <section id="about-us" className="min-h-screen py-16">
                            <AboutUs/>
                        </section>
                        <section id="venue" className="min-h-screen py-16">
                            <Venue/>
                        </section>
                        <section id="contribution" className="min-h-screen py-16">
                            <Contribution/>
                        </section>
                    </main>
                    <Footer/>
                </div>
            </Router>
        </WeddingProvider>
    )
        ;
};

export default App;