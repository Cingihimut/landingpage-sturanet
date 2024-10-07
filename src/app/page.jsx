"use client"
import { ReactTyped } from 'react-typed';
import { useRef } from 'react';
import NavBar from './components/NavBar';
import AddWallet from './wallet';
import Legal from './Legal';
import Foundation from './foundation';
import Market from './market';

const Home = () => {
  const foundationRef = useRef(null);

  const scrollTo = (section) => {
    const ref = {
      'foundation': foundationRef,
    }[section];

    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <NavBar scrollTo={scrollTo} />
      <div className="flex flex-col justify-center items-center min-h-screen px-4 text-center">
        <ReactTyped
          typeSpeed={40}
          strings={["STURAN NETWORK"]}
          backSpeed={50}
          loop
          className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-bold text-color-primary mb-5"
        />
        <p className="text-xs sm:text-sm md:text-base lg:text-lg">A Decentralized crowdfunding</p>
        <p className="text-xs sm:text-sm md:text-base lg:text-lg">Be a part of the goodness for our surroundings</p>
      </div>
      <div ref={foundationRef}>
        <Foundation />
      </div>
      <Market />
      <AddWallet />
      <Legal />
    </>
  )
}

export default Home