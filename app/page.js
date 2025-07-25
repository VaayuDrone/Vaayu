import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Segment from './components/Segment';
import Selling from './components/Selling';
import Shop from './components/Shop';
import Images from './components/Images';
import Innovation from './components/Innovation';
import Review from './components/Review';
import Question from './components/Question';
import Contact from './components/Contact';

const Page = () => {
  return (
    <div className="relative overflow-hidden">
      <div
        className="absolute top-0 right-0 z-0 w-[800px] h-[600px] max-w-full bg-[url('/Images/Background.png')] bg-no-repeat bg-[length:800px_600px] bg-right pointer-events-none"
      />
      <div className="relative z-10">
        <Navbar />
        <Header />
      </div>
      <Segment />
      <Selling/>
      <Shop/>
      <Images/>
      <Innovation/>
      <Review/>
      <Question/>
      <Contact/>
    </div>
  )
}

export default Page;
