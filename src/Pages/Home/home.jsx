import React from "react";
import Topbar from '../../Components/Topbar/topbar';
import Hero from '../../Components/Herosec/herosection';
import About from '../../Components/AboutUs/about';
import Footer from '../../Components/Footer/footer';
import Contact from '../../Components/ContactUs/contact';

const Home = () => {
    return (
      <div>
        <Topbar />
        <Hero />
        <div id="aboutus">
          <About />
        </div>
        <div id="contactus">
          <Contact />
        </div>
        <Footer />
      </div>
    );
  };
  
  export default Home;
  