"use client";
import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const element = containerRef.current;

        gsap.fromTo(
            element,
            { opacity: 0, y: 100 },
            {
                opacity: 1,
                y: 0,
                duration: 1.5,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: element,
                    start: 'top 95%',
                    end: 'bottom 50%',
                    scrub: 0.5,
                    markers: false,
                },
            }
        );
    }, []);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');
        
        const messageWords = message.trim().split(' ').filter(word => word);
        if (messageWords.length < 10) {
            setError('Message must be at least 10 words long.');
            return;
        }

        setIsLoading(true);

        try {
            const response = await axios.post('/api/send', {
                name, email, message
            });
            setSuccess('Sent successfully!');
            setName('');
            setEmail('');
            setMessage('');
        } catch (err) {
            setError('Error sending. Please try again later.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <div  className='w-full z-20 overflow-hidden bg-Work pt-10 px-4 sm:px-6 md:px-12 max-[700px]:mt-16' ref={containerRef} id='support' >
                <div className='w-full flex flex-col md:flex-row gap-8 '>
                    <div className='md:w-1/2 w-full  flex flex-col text-Black font-Grotesk '>
                        <div className='text-3xl sm:text-4xl md:text-5xl mt-8 mb-6'>Get in <span className='underline underline-offset-4 decoration-[var(--Segment)] '>Touch</span>.</div>
                        <div className='text-base sm:text-lg leading-relaxed text-wrap'>At Vaayu, We develop hydrogen-powered drones designed to deliver medicines swiftly and reliably to remote and underserved areas. Our focus is on advancing practical drone technology to support agriculture and media industries, providing efficient and sustainable solutions. By integrating innovative engineering with real-world applications, we aim to build a stronger drone ecosystem that meets critical needs responsibly.</div>
                        <div className='flex mt-8 gap-6'>
                            <a href="https://www.instagram.com/manan__batra/" target="_blank" >
                                <div>
                                    <svg aria-label="Instagram" className="x1lliihq x1n2onr6 x5n08af cursor-pointer" fill="currentColor" height="28" role="img" viewBox="0 0 24 24" width="28"><title>Instagram</title><path d="M12 2.982c2.937 0 3.285.011 4.445.064a6.087 6.087 0 0 1 2.042.379 3.408 3.408 0 0 1 1.265.823 3.408 3.408 0 0 1 .823 1.265 6.087 6.087 0 0 1 .379 2.042c.053 1.16.064 1.508.064 4.445s-.011 3.285-.064 4.445a6.087 6.087 0 0 1-.379 2.042 3.643 3.643 0 0 1-2.088 2.088 6.087 6.087 0 0 1-2.042.379c-1.16.053-1.508.064-4.445.064s-3.285-.011-4.445-.064a6.087 6.087 0 0 1-2.043-.379 3.408 3.408 0 0 1-1.264-.823 3.408 3.408 0 0 1-.823-1.265 6.087 6.087 0 0 1-.379-2.042c-.053-1.16-.064-1.508-.064-4.445s.011-3.285.064-4.445a6.087 6.087 0 0 1 .379-2.042 3.408 3.408 0 0 1 .823-1.265 3.408 3.408 0 0 1 1.265-.823 6.087 6.087 0 0 1 2.042-.379c1.16-.053 1.508-.064 4.445-.064M12 1c-2.987 0-3.362.013-4.535.066a8.074 8.074 0 0 0-2.67.511 5.392 5.392 0 0 0-1.949 1.27 5.392 5.392 0 0 0-1.269 1.948 8.074 8.074 0 0 0-.51 2.67C1.012 8.638 1 9.013 1 12s.013 3.362.066 4.535a8.074 8.074 0 0 0 .511 2.67 5.392 5.392 0 0 0 1.27 1.949 5.392 5.392 0 0 0 1.948 1.269 8.074 8.074 0 0 0 2.67.51C8.638 22.988 9.013 23 12 23s3.362-.013 4.535-.066a8.074 8.074 0 0 0 2.67-.511 5.625 5.625 0 0 0 3.218-3.218 8.074 8.074 0 0 0 .51-2.67C22.988 15.362 23 14.987 23 12s-.013-3.362-.066-4.535a8.074 8.074 0 0 0-.511-2.67 5.392 5.392 0 0 0-1.27-1.949 5.392 5.392 0 0 0-1.948-1.269 8.074 8.074 0 0 0-2.67-.51C15.362 1.012 14.987 1 12 1Zm0 5.351A5.649 5.649 0 1 0 17.649 12 5.649 5.649 0 0 0 12 6.351Zm0 9.316A3.667 3.667 0 1 1 15.667 12 3.667 3.667 0 0 1 12 15.667Zm5.872-10.859a1.32 1.32 0 1 0 1.32 1.32 1.32 1.32 0 0 0-1.32-1.32Z"></path>
                                    </svg>
                                </div>
                            </a>
                            <a href="https://github.com/MaNaNBaTrA" target="_blank">
                                <div>
                                    <svg height="28" aria-hidden="true" viewBox="0 0 24 24" version="1.1" width="28" data-view-component="true" className=" cursor-pointer octicon octicon-mark-github v-align-middle color-fg-default" fill="currentColor">
                                        <path d="M12.5.75C6.146.75 1 5.896 1 12.25c0 5.089 3.292 9.387 7.863 10.91.575.101.79-.244.79-.546 0-.273-.014-1.178-.014-2.142-2.889.532-3.636-.704-3.866-1.35-.13-.331-.69-1.352-1.18-1.625-.402-.216-.977-.748-.014-.762.906-.014 1.553.834 1.769 1.179 1.035 1.74 2.688 1.25 3.349.948.1-.747.402-1.25.733-1.538-2.559-.287-5.232-1.279-5.232-5.678 0-1.25.445-2.285 1.178-3.09-.115-.288-.517-1.467.115-3.048 0 0 .963-.302 3.163 1.179.92-.259 1.897-.388 2.875-.388.977 0 1.955.13 2.875.388 2.2-1.495 3.162-1.179 3.162-1.179.633 1.581.23 2.76.115 3.048.733.805 1.179 1.825 1.179 3.09 0 4.413-2.688 5.39-5.247 5.678.417.36.776 1.05.776 2.128 0 1.538-.014 2.774-.014 3.162 0 .302.216.662.79.547C20.709 21.637 24 17.324 24 12.25 24 5.896 18.854.75 12.5.75Z"></path>
                                    </svg>
                                </div>
                            </a>

                            <a href="https://www.linkedin.com/in/manan-batra-dev/" target="_blank">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" className="cursor-pointer mercado-match" width="28" height="28" focusable="false" fill="currentColor">
                                        <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                                    </svg>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className='md:w-1/2 w-full'>
                        <div className="w-full md:w-[85%] mx-auto p-4 text-Black">
                            <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-center">Contact Us</h2>
                            {error && <p className="text-red-500 font-semibold text-center text-sm sm:text-base ">{error}</p>}
                            {success && <p className="text-green-400 font-semibold text-center text-sm sm:text-base">{success}</p>}
                            <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 ">Name:</label>
                                    <input
                                        type="text"
                                        id="name"
                                        placeholder='Name'
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                                        required
                                        disabled={isLoading}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 ">Email:</label>
                                    <input
                                        type="email"
                                        placeholder='Email'
                                        id="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500 "
                                        required
                                        disabled={isLoading}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 ">Message:</label>
                                    <textarea
                                        id="message"
                                        value={message}
                                        placeholder='Message'
                                        onChange={(e) => setMessage(e.target.value)}
                                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                                        rows="2"
                                        required
                                        disabled={isLoading}
                                    ></textarea>
                                </div>
                                <div className="flex justify-center items-center text-nowrap z-20">
                                    <button
                                        type="submit"
                                        disabled={isLoading}
                                        className={`py-2 px-8 rounded-md transition-all duration-200 flex items-center gap-2  bg-gradient-to-r from-[var(--LG1)] to-[var(--LG2)] cursor-pointer ${
                                            isLoading 
                                                ? 'bg-gray-400 cursor-not-allowed' 
                                                : 'bg-black hover:bg-gray-800'
                                        } text-white`}
                                    >
                                        {isLoading ? (
                                            <>
                                                <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                                                Sending...
                                            </>
                                        ) : (
                                            'Send Message'
                                        )}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className='text-center mt-4  mb-12 text-sm  text-Text'>
                    © 2025 Vaayu. All Rights Reserved.
                </div>
            </div>
        </>
    )
}

export default Contact;