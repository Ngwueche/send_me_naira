import React from 'react'
import Features from "../component/Features";
import Footer from "../component/Footer";
import Header from "../component/Header";
import OurSolution from "../component/OurSolution";
import Workings from "../component/Workings";


function Home() {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <OurSolution/>
      <Workings />
      <Features />
      <Footer />
    </div>
  )
}

export default Home
