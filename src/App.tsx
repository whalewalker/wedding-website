import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {WeddingProvider} from './context';
import {Home, Navbar} from "./components";


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
                    </main>
                </div>
            </Router>
        </WeddingProvider>
    );
};

export default App;