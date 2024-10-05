// /app/page.jsx
"use client"
import { ReactTyped } from 'react-typed';
import { useRef } from 'react';
import NavBar from './components/NavBar';
import Community from './community';
import UseCase from './usecase';
import AddWallet from './wallet';
import Legal from './Legal';
import Foundation from './foundation';
import Market from './market';

const Home = () => {
  const communityRef = useRef(null);
  const foundationRef = useRef(null);
  const useCaseRef = useRef(null);

  const scrollTo = (section) => {
    const ref = {
      'community': communityRef,
      'foundation': foundationRef,
      'useCase': useCaseRef
    }[section];

    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <NavBar scrollTo={scrollTo} />
      <div className="flex flex-col justify-center items-center min-h-screen pt-24 px-4 text-center">
        <ReactTyped 
          typeSpeed={40} 
          strings={["STURAN NETWORK"]} 
          backSpeed={50} 
          loop 
          className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-bold text-color-primary mb-5"
        />
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-5">To Everyone</h1>
        <p className="text-xs sm:text-sm md:text-base lg:text-lg">A Decentralized crowdfunding using blockchain Technology</p>
      </div>
      <div ref={foundationRef}>
        <Foundation />
      </div>
      <Market />
      <AddWallet />
      <Legal />
      <div ref={communityRef}>
        <Community />
      </div>
      <div ref={useCaseRef}>
        <UseCase />
      </div>
    </>
  )
}

export default Home