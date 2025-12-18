'use client';

import { useState, useEffect } from 'react';

export default function AboutUs() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const slides = [
        {
            title: 'Timber Product',
            image: '/assets/img-1.jpg',
        },
        {
            title: 'Glazing and Facade',
            image: '/assets/img-2.jpg',
        },
        {
            title: 'Curtain Wall',
            image: '/assets/img-3.jpg',
        },
        {
            title: 'Glass Curtain Walls',
            image: '/assets/img-4.jpg',
        },
        {
            title: 'Aluminium Products',
            image: '/assets/img-5.jpg',
        },
        {
            title: 'Modern Storefront Design',
            image: '/assets/img-6.jpg',
        },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
        }, 8000);

        return () => clearInterval(interval);
    }, [slides.length]);

    return (
        <section className="py-20" id="about">
            <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
                <div className='text-black dark:text-[#e5e7eb]'>
                    <h1 className="text-3xl font-semibold">About Us</h1>
                    <p className="text-md">
                        After having significant experiences in the construction industry mainly in the commercial and residential building, the founder of the company has come up with registering the company bringing those experts worked with him in the numerous challenging jobs in the past in order to focus design and project management of Glazing and Facade Works specially using Aluminium, Copper and Timber products.
                        <br /> <br />
                        Parpy Facade solution is a locally owned and operated business establish in 2024. Our main office is in Brisbane.
                    </p>
                </div>

                <div className="overflow-hidden w-full relative flex items-center justify-center h-[25rem] mt-5" style={{ perspective: "1000px" }}>
                    {/* Title Overlay */}
                    <div className='z-50 flex flex-col justify-end items-center w-full h-full' style={{ opacity: "1", transform: "none" }}>
                        <p
                            key={`title-${currentIndex}`}
                            className='font-bold text-xl md:text-5xl pb-10 text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4 animate-[fadeIn_0.8s_ease-in-out]'
                        >
                            {slides[currentIndex].title}
                        </p>
                    </div>

                    {/* Dark Overlay */}
                    <div className='absolute inset-0 bg-black/50 z-40'></div>

                    {/* Image Carousel */}
                    {slides.map((slide, index) => (
                        <img
                            key={index}
                            src={slide.image}
                            alt={slide.title}
                            className={`h-full w-full absolute inset-0 object-cover object-center transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'
                                }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
