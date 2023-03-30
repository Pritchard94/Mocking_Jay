import Header from "../components/Header";
import Hero from "../components/Hero";

import React from 'react'
import Banner from "../components/Banner";
import Banner2 from "../components/Banner2";
import Singlediv from "../components/singlediv";
import Brands from "../components/Brands";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
        <Header/>
        <Hero/>
        <Banner/>
        <Banner2/>
        <Singlediv/>
        <Brands/>
        <Footer/>
      
    </div>
  )
}

export default Home
