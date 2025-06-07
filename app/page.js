import React from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Segment from './components/Segment'

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
    </div>
  )
}

export default Page;
