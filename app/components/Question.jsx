"use client"
import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";

const Question = () => {
    const faqData = [
        {
            id: 1,
            question: "What is Vaayu and what does it specialize in?",
            answer: "Vaayu is a leading drone technology company that specializes in developing innovative, high-performance drones for various applications including aerial photography, surveillance, mapping, and commercial operations. We focus on creating cutting-edge solutions that combine advanced flight capabilities with user-friendly interfaces."
        },
        {
            id: 2,
            question: "How does Vaayu stand out in the drone industry?",
            answer: "Vaayu stands out through our commitment to innovation, superior build quality, and exceptional customer service. Our drones feature advanced AI-powered flight systems, extended battery life, and proprietary stabilization technology that delivers professional-grade results for both commercial and consumer applications."
        },
        {
            id: 3,
            question: "What makes Vaayu drones unique for Consumers?",
            answer: "Our consumer drones are designed with simplicity and performance in mind. They feature intuitive controls, automatic safety features, 4K camera capabilities, intelligent flight modes, and robust construction. We also provide comprehensive support and regular software updates to enhance the user experience."
        }
    ];

    const [openItems, setOpenItems] = useState({});

    const toggleItem = (id) => {
        setOpenItems(prev => ({
            ...prev,
            [id]: !prev[id]
        }));
    };

    return (
        <div className='py-16 w-full bg-(--Segment) flex items-center justify-center px-4 font-poppins relative overflow-hidden'>
            <Image
                src={"/Images/QBG.png"}
                width={450}
                height={450}
                alt="Background"
                className="absolute -left-48 bottom-0 z-0 opacity-20 pointer-events-none"
            />
            <div className='w-full max-w-6xl bg-(--QR) rounded-xl shadow-lg overflow-hidden '>
                <div className='flex flex-col lg:flex-row'>
                    {/* Left Section */}
                    <div className='w-full lg:w-2/5 flex flex-col justify-center p-8 lg:p-12'>
                        <h2 className='text-3xl lg:text-4xl font-bold mb-6 text-gray-800'>
                            Have Questions?
                        </h2>
                        <p className='text-gray-600 mb-8 text-lg leading-relaxed'>
                            Our customer support is available Monday to Friday: 10am-6:30pm.
                        </p>
                        <span
                            role="button"
                            tabIndex={0}
                            className="w-max px-6 py-3 rounded-3xl font-medium text-white bg-gradient-to-r from-[var(--LG1)] to-[var(--LG2)] cursor-pointer"
                            onClick={() => window.location.href = "mailto:vaayudelivery24@gmail.com?subject=Hello&body=Message%20here"}
                            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') window.location.href = "mailto:vaayudelivery24@gmail.com?subject=Hello&body=Message%20here"; }}
                        >
                            Chat Now
                        </span>
                    </div>

                    <div className='w-full lg:w-3/5 bg-(--QBG) p-4 lg:p-12 flex items-center justify-center lg:m-16 rounded-2xl md:m-0'>
                        <div className='w-full h-[300px] overflow-hidden'>
                            <div
                                className='h-full overflow-y-auto pr-2 w-full py-4'
                                style={{
                                    scrollbarWidth: 'none',
                                    msOverflowStyle: 'none',
                                }}
                            >
                                <style jsx>{`
                                    div::-webkit-scrollbar {
                                        display: none;
                                    }
                                `}</style>

                                <div className='flex flex-col gap-4'>
                                    {faqData.map((item, index) => (
                                        <div key={item.id} className='w-full'>
                                            <div className=''>
                                                <button
                                                    className='w-full flex items-center justify-between p-4 text-left rounded-lg'
                                                    onClick={() => toggleItem(item.id)}
                                                >
                                                    <span className="font-bold text-gray-800 pr-4">
                                                        {item.question}
                                                    </span>
                                                    <div className='bg-(--QBTN) rounded-full w-6 h-6 p-1 flex items-center justify-center flex-shrink-0'>
                                                        {openItems[item.id] ? (
                                                            <ChevronUp className="w-8 h-8 text-black" />
                                                        ) : (
                                                            <ChevronDown className="w-8 h-8 text-black" />
                                                        )}
                                                    </div>
                                                </button>

                                                {openItems[item.id] && (
                                                    <div className="px-4 pb-4 transition-all duration-300 ease-in-out">
                                                        <p className="text-gray-600 leading-relaxed">
                                                            {item.answer}
                                                        </p>
                                                    </div>
                                                )}
                                            </div>

                                            {index < faqData.length - 1 && (
                                                <div className="my-2 w-full h-[2px] bg-(--QBTN) rounded-full" />
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Question;