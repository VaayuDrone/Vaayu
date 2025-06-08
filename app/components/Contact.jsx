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
    const [debugInfo, setDebugInfo] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');
        setDebugInfo('');
        
        const messageWords = message.trim().split(' ').filter(word => word);
        if (messageWords.length < 10) {
            setError('Message must be at least 10 words long.');
            return;
        }

        setIsLoading(true);

        // Log the request details
        console.log('=== FORM SUBMISSION DEBUG ===');
        console.log('Current URL:', window.location.href);
        console.log('API Endpoint:', '/api/send');
        console.log('Request Data:', { name, email, message: message.substring(0, 50) + '...' });

        try {
            const requestData = { name, email, message };
            
            // Log before making request
            console.log('Making request to:', `${window.location.origin}/api/send`);
            
            const response = await axios.post('/api/send', requestData, {
                headers: {
                    'Content-Type': 'application/json',
                },
                timeout: 30000, // 30 second timeout
            });

            console.log('Response received:', response.status, response.statusText);
            console.log('Response data:', response.data);
            
            setSuccess('Message sent successfully!');
            setName('');
            setEmail('');
            setMessage('');
            
        } catch (err) {
            console.error('=== ERROR DETAILS ===');
            console.error('Error object:', err);
            
            let errorMessage = 'Unknown error occurred';
            let debugDetails = '';
            
            if (err.response) {
                // Server responded with error status
                console.error('Response Status:', err.response.status);
                console.error('Response Headers:', err.response.headers);
                console.error('Response Data:', err.response.data);
                
                errorMessage = `Server Error (${err.response.status}): ${err.response.statusText}`;
                debugDetails = `Status: ${err.response.status}\nData: ${JSON.stringify(err.response.data, null, 2)}`;
                
                // Common Netlify/serverless errors
                switch (err.response.status) {
                    case 404:
                        errorMessage = 'API endpoint not found. Check if /api/send exists.';
                        debugDetails += '\n\nPossible issues:\n- Missing API route file\n- Incorrect file structure\n- Build/deployment issue';
                        break;
                    case 500:
                        errorMessage = 'Server internal error. Check server logs.';
                        debugDetails += '\n\nCheck:\n- Server-side code errors\n- Environment variables\n- Database connections';
                        break;
                    case 502:
                        errorMessage = 'Bad Gateway. Server is unreachable.';
                        debugDetails += '\n\nPossible issues:\n- Function timeout\n- Memory limit exceeded\n- Invalid response format';
                        break;
                    case 504:
                        errorMessage = 'Gateway Timeout. Request took too long.';
                        debugDetails += '\n\nPossible issues:\n- Function execution timeout\n- External service delays';
                        break;
                }
                
            } else if (err.request) {
                // Request made but no response received
                console.error('Request made but no response:', err.request);
                errorMessage = 'No response from server. Check network connection.';
                debugDetails = `Request URL: ${err.request.responseURL || 'Unknown'}\nStatus: ${err.request.status || 'No status'}`;
                
            } else {
                // Error in request setup
                console.error('Request setup error:', err.message);
                errorMessage = `Request Error: ${err.message}`;
                debugDetails = err.message;
            }
            
            // Network specific errors
            if (err.code === 'ECONNABORTED') {
                errorMessage = 'Request timeout. Server took too long to respond.';
            } else if (err.code === 'ERR_NETWORK') {
                errorMessage = 'Network error. Check your internet connection.';
            }
            
            setError(errorMessage);
            setDebugInfo(debugDetails);
            
            console.error('=== END ERROR DETAILS ===');
            
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <div className='w-full z-20 overflow-hidden bg-Work pt-10 px-4 sm:px-6 md:px-12 max-[700px]:mt-16' ref={containerRef} id='support'>
                <div className='w-full flex flex-col md:flex-row gap-8'>
                    <div className='md:w-1/2 w-full flex flex-col text-Black font-Grotesk'>
                        <div className='text-3xl sm:text-4xl md:text-5xl mt-8 mb-6'>Get in <span className='underline underline-offset-4 decoration-[var(--Segment)]'>Touch</span>.</div>
                        <div className='text-base sm:text-lg leading-relaxed text-wrap'>At Vaayu, We develop hydrogen-powered drones designed to deliver medicines swiftly and reliably to remote and underserved areas. Our focus is on advancing practical drone technology to support agriculture and media industries, providing efficient and sustainable solutions. By integrating innovative engineering with real-world applications, we aim to build a stronger drone ecosystem that meets critical needs responsibly.</div>
                        <div className='flex mt-8 gap-6'>
                            <a href="https://www.instagram.com/nikunj_rawat/?utm_source=ig_web_button_share_sheet" target="_blank">
                                <div>
                                    <svg aria-label="Instagram" className="x1lliihq x1n2onr6 x5n08af cursor-pointer" fill="currentColor" height="28" role="img" viewBox="0 0 24 24" width="28"><title>Instagram</title><path d="M12 2.982c2.937 0 3.285.011 4.445.064a6.087 6.087 0 0 1 2.042.379 3.408 3.408 0 0 1 1.265.823 3.408 3.408 0 0 1 .823 1.265 6.087 6.087 0 0 1 .379 2.042c.053 1.16.064 1.508.064 4.445s-.011 3.285-.064 4.445a6.087 6.087 0 0 1-.379 2.042 3.643 3.643 0 0 1-2.088 2.088 6.087 6.087 0 0 1-2.042.379c-1.16.053-1.508.064-4.445.064s-3.285-.011-4.445-.064a6.087 6.087 0 0 1-2.043-.379 3.408 3.408 0 0 1-1.264-.823 3.408 3.408 0 0 1-.823-1.265 6.087 6.087 0 0 1-.379-2.042c-.053-1.16-.064-1.508-.064-4.445s.011-3.285.064-4.445a6.087 6.087 0 0 1 .379-2.042 3.408 3.408 0 0 1 .823-1.265 3.408 3.408 0 0 1 1.265-.823 6.087 6.087 0 0 1 2.042-.379c1.16-.053 1.508-.064 4.445-.064M12 1c-2.987 0-3.362.013-4.535.066a8.074 8.074 0 0 0-2.67.511 5.392 5.392 0 0 0-1.949 1.27 5.392 5.392 0 0 0-1.269 1.948 8.074 8.074 0 0 0-.51 2.67C1.012 8.638 1 9.013 1 12s.013 3.362.066 4.535a8.074 8.074 0 0 0 .511 2.67 5.392 5.392 0 0 0 1.27 1.949 5.392 5.392 0 0 0 1.948 1.269 8.074 8.074 0 0 0 2.67.51C8.638 22.988 9.013 23 12 23s3.362-.013 4.535-.066a8.074 8.074 0 0 0 2.67-.511 5.625 5.625 0 0 0 3.218-3.218 8.074 8.074 0 0 0 .51-2.67C22.988 15.362 23 14.987 23 12s-.013-3.362-.066-4.535a8.074 8.074 0 0 0-.511-2.67 5.392 5.392 0 0 0-1.27-1.949 5.392 5.392 0 0 0-1.948-1.269 8.074 8.074 0 0 0-2.67-.51C15.362 1.012 14.987 1 12 1Zm0 5.351A5.649 5.649 0 1 0 17.649 12 5.649 5.649 0 0 0 12 6.351Zm0 9.316A3.667 3.667 0 1 1 15.667 12 3.667 3.667 0 0 1 12 15.667Zm5.872-10.859a1.32 1.32 0 1 0 1.32 1.32 1.32 1.32 0 0 0-1.32-1.32Z"></path></svg>
                                </div>
                            </a>
                            <a href="https://www.linkedin.com/in/nikunj-rawat/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank">
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
                            
                            {/* Error Display */}
                            {error && (
                                <div className="mb-4 p-3 bg-red-100 border border-red-400 rounded">
                                    <p className="text-red-700 font-semibold text-sm sm:text-base">{error}</p>
                                </div>
                            )}
                            
                            {/* Debug Info Display */}
                            {debugInfo && (
                                <div className="mb-4 p-3 bg-yellow-100 border border-yellow-400 rounded">
                                    <details>
                                        <summary className="cursor-pointer text-yellow-800 font-medium">Debug Information (Click to expand)</summary>
                                        <pre className="mt-2 text-xs text-yellow-700 whitespace-pre-wrap overflow-auto max-h-40">
                                            {debugInfo}
                                        </pre>
                                    </details>
                                </div>
                            )}
                            
                            {/* Success Display */}
                            {success && (
                                <div className="mb-4 p-3 bg-green-100 border border-green-400 rounded">
                                    <p className="text-green-700 font-semibold text-sm sm:text-base">{success}</p>
                                </div>
                            )}
                            
                            <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name:</label>
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
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
                                    <input
                                        type="email"
                                        placeholder='Email'
                                        id="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                                        required
                                        disabled={isLoading}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message:</label>
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
                                        className={`py-2 px-8 rounded-md transition-all duration-200 flex items-center gap-2 bg-gradient-to-r from-[var(--LG1)] to-[var(--LG2)] cursor-pointer ${
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
                <div className='text-center mt-4 mb-12 text-sm text-Text'>
                    © 2025 Vaayu. All Rights Reserved.
                </div>
            </div>
        </>
    )
}

export default Contact;