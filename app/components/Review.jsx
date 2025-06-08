"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Heart } from "lucide-react";

const reviews = [
    {
        id: 1,
        name: "Sarah Johnson",
        time: "2 months ago",
        image: "https://randomuser.me/api/portraits/women/1.jpg",
        stars: 5,
        message: "Absolutely amazing service! Exceeded all my expectations and delivered on time."
    },
    {
        id: 2,
        name: "Mike Chen",
        time: "1 month ago",
        image: "https://randomuser.me/api/portraits/men/15.jpg",
        stars: 4,
        message: "Great experience overall. Professional team and quality work."
    },
    {
        id: 3,
        name: "Emma Davis",
        time: "3 weeks ago",
        image: "https://randomuser.me/api/portraits/women/25.jpg",
        stars: 5,
        message: "Outstanding! Will definitely recommend to friends and family."
    },
    {
        id: 4,
        name: "Alex Rodriguez",
        time: "2 weeks ago",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
        stars: 3,
        message: "Good service, but there's room for improvement in communication."
    },
    {
        id: 5,
        name: "Lisa Thompson",
        time: "1 week ago",
        image: "https://randomuser.me/api/portraits/women/44.jpg",
        stars: 5,
        message: "Perfect! Everything was handled professionally and efficiently."
    },
    {
        id: 6,
        name: "David Wilson",
        time: "5 days ago",
        image: "https://randomuser.me/api/portraits/men/8.jpg",
        stars: 4,
        message: "Very satisfied with the results. Quick turnaround time."
    },
    {
        id: 7,
        name: "Jennifer Lee",
        time: "3 days ago",
        image: "https://randomuser.me/api/portraits/women/12.jpg",
        stars: 5,
        message: "Incredible attention to detail. Highly recommend their services!"
    },
    {
        id: 8,
        name: "Robert Garcia",
        time: "2 days ago",
        image: "https://randomuser.me/api/portraits/men/22.jpg",
        stars: 4,
        message: "Solid work and fair pricing. Would use their services again."
    },
    {
        id: 9,
        name: "Amanda White",
        time: "1 day ago",
        image: "https://randomuser.me/api/portraits/women/18.jpg",
        stars: 5,
        message: "Best decision I made this year! Fantastic service from start to finish."
    },
    {
        id: 10,
        name: "Chris Martin",
        time: "12 hours ago",
        image: "https://randomuser.me/api/portraits/men/35.jpg",
        stars: 3,
        message: "Decent service, met basic expectations but nothing extraordinary."
    },
    {
        id: 11,
        name: "Rachel Brown",
        time: "6 hours ago",
        image: "https://randomuser.me/api/portraits/women/30.jpg",
        stars: 5,
        message: "Absolutely blown away by the quality and professionalism!"
    },
    {
        id: 12,
        name: "Kevin Taylor",
        time: "2 hours ago",
        image: "https://randomuser.me/api/portraits/men/41.jpg",
        stars: 4,
        message: "Great team to work with. Delivered exactly what was promised."
    }
];

const Review = () =>{
    const [currentIndex, setCurrentIndex] = useState(0);
      const [itemsPerView, setItemsPerView] = useState(3);

      useEffect(()=>{
          const updateItemsPerView = () => {
      const width = window.innerWidth;
      if (width < 640) setItemsPerView(1); // for  Mobile screen
      else if (width < 1024) setItemsPerView(2); // for tablet screen
      else setItemsPerView(3); // for desktop screen
    };

    updateItemsPerView();
    window.addEventListener("resize", updateItemsPerView);
    return () => window.removeEventListener("resize", updateItemsPerView);
        
      },[])

    
    const maxIndex = reviews.length - itemsPerView;

    const scrollLeft = () => {
        setCurrentIndex(prev => Math.max(0, prev - 1));
    };

    const scrollRight = () => {
        setCurrentIndex(prev => Math.min(maxIndex, prev + 1));
    };

    return (
        <div className="w-screen bg-(--Segment) font-poppins pt-16" id="reviews">
            <div className="relative w-full max-w-6xl mx-auto px-4 py-8">
                <button
                    onClick={scrollLeft}
                    disabled={currentIndex === 0}
                    className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    aria-label="Previous reviews"
                >
                    <ChevronLeft className="w-5 h-5 text-gray-700" />
                </button>

                <button
                    onClick={scrollRight}
                    disabled={currentIndex === maxIndex}
                    className="absolute right-3 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    aria-label="Next reviews"
                >
                    <ChevronRight className="w-5 h-5 text-gray-700" />
                </button>

                <div className="overflow-hidden mx-12">
                    <div
                        className="flex gap-4 transition-transform duration-300 ease-out"
                        style={{
                            transform: `translateX(-${currentIndex * 33.33}%)`,
                        }}
                    >
                        {reviews.map((review) => (
                            <div
                                key={review.id}
                                className="flex-none w-full sm:w-1/2 lg:w-1/3 px-2"
                            > <div className="h-full bg-[--QR] rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow">
                                <div className="flex items-center gap-3">
                                    <div className="relative flex-shrink-0">
                                        <img
                                            src={review.image}
                                            alt={review.name}
                                            className="w-12 h-12 rounded-full object-cover"
                                        />
                                        <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-1 shadow-sm">
                                            <Heart className="w-3 h-3 text-red-500 fill-current" />
                                        </div>
                                    </div>

                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <h3 className="font-semibold text-gray-900 text-sm truncate">
                                                    {review.name}
                                                </h3>
                                                <p className="text-xs text-gray-500">{review.time}</p>
                                            </div>
                                            <Image src="/Svg/google.svg" width={20} height={20} alt="Google" />
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="flex items-center gap-1 mt-2">
                                    {[...Array(review.stars)].map((_, i) => (
                                        <Image key={i} src="/Svg/star.svg" width={16} height={16} alt="star" />
                                    ))}
                                    <Image src="/Svg/verify.svg" width={16} height={16} alt="verified" className="ml-1" />
                                </div>

                                <div className="mt-2">
                                    <p className="text-sm text-gray-600">{review.message}</p>
                                </div>
                            </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Review;