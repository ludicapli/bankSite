import React from 'react';
import styles from '../lib/styles/styles';

import NavBar from "./Components/NavBar";
import Billing from "./Components/Billing";
import CardDeal from "./Components/CardDeal";
import Business from "./Components/Business";
import Client from "./Components/Client";
import Cta from "./Components/CTA";
import Stats from "./Components/Stats";
import Footer from "./Components/Footer";
import Testimonial from "./Components/Testimonial";
import Hero from "./Components/Hero";

const App = () => (

    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <NavBar />
        </div>
      </div>


      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Business />
          <Billing />
          <CardDeal />
          <Testimonial />
          <Client />
          <Cta />
          <Footer />
        </div>
      </div>


    </div>

)


export default App