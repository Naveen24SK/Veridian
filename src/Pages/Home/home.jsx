import React from "react";
import Topbar from '../../Components/Topbar/topbar';
import Hero from '../../Components/Herosec/herosection';
import About from '../../Components/AboutUs/about';
import Footer from '../../Components/Footer/footer';
import Contact from '../../Components/ContactUs/contact';

const Home = ()=>{
    return (
        <div>
            <Topbar />
            <Hero />
            <h1>Welcome to our Home Page!</h1>
            <About />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;