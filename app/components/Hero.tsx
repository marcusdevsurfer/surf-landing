'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Hero() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            image: '/surf-1.jpg',
            title: 'SECRET SPOT',
            subtitle: 'Tu tienda de surf y streetwear',
            cta: 'Ver Productos',
            link: '#productos'
        },
        {
            image: '/surf-2.jpg',
            title: 'Nuevos Productos',
            subtitle: 'Lo último en ropa de surf',
            cta: 'Descubre Más',
            link: '#productos'
        },
        {
            image: '/surf-3.jpg',
            title: 'Visítanos',
            subtitle: 'Santiago, Colima',
            cta: 'Ubicación',
            link: '#ubicacion'
        },
        {
            image: '/surf-4.jpg',
            title: 'Visítanos',
            subtitle: 'Santiago, Colima',
            cta: 'Ubicación',
            link: '#ubicacion'
        }

    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [slides.length]);

    const goToSlide = (index: number) => {
        setCurrentSlide(index);
    };

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    return (
        <section id="hero" className="relative w-full h-[700px] md:h-screen overflow-hidden">
            {/* Slides */}
            <div className="relative w-full h-full">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                            }`}
                    >
                        <div className="absolute inset-0 overflow-hidden">

                            <Image

                                src={slide.image}
                                alt={slide.title}
                                className="w-full h-full object-cover bg-top"
                                width={1920}
                                height={1080}
                            />
                        </div>

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/50"></div>

                        {/* Content */}
                        <div className="relative h-full flex items-center justify-center text-center px-4">
                            <div className="max-w-4xl">
                                <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-7 drop-shadow-lg">
                                    {slide.title}
                                </h2>
                                <p className="text-xl sm:text-2xl md:text-3xl text-white mb-5 drop-shadow-md">
                                    {slide.subtitle}
                                </p>
                                <a
                                    href={slide.link}
                                    className="inline-block bg-white mt-4 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition shadow-lg text-sm sm:text-base"
                                >
                                    {slide.cta}
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Navigation Arrows */}
            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-900 p-3 rounded-full shadow-lg transition z-10"
                aria-label="Previous slide"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
            </button>

            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-900 p-3 rounded-full shadow-lg transition z-10"
                aria-label="Next slide"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </button>

            {/* Dots Indicators */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-3 h-3 rounded-full transition ${index === currentSlide ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/75'
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </section>
    );
}
