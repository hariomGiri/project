import React, { useEffect, useRef } from 'react';

const Hero: React.FC = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrollPosition = window.scrollY;
        parallaxRef.current.style.transform = `translateY(${scrollPosition * 0.5}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="hero" className="relative h-screen overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url(https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80)',
          filter: 'brightness(0.4)'
        }}
        ref={parallaxRef}
      ></div>
      
      {/* Content */}
      <div className="relative h-full flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-yellow-400 animate-fadeIn">
          LNCT TEJANTA <span className="text-white">2025</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl animate-fadeIn animation-delay-300">
          Experience the premier technical and cultural festival of Central India
        </p>
        <p className="text-lg md:text-xl mb-12 max-w-2xl animate-fadeIn animation-delay-600">
          March 15-30, 2025 | LNCT Campus, Indore
        </p>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 animate-fadeIn animation-delay-900">
          <a
            href="#register"
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-8 rounded-full transition-colors text-lg"
          >
            Register Now
          </a>
          <a
            href="#tech-spardha"
            className="bg-black border-2 border-white hover:bg-yellow-500 hover:text-black hover:border-yellow-500 text-white font-bold py-3 px-8 rounded-full transition-colors text-lg"
          >
            Explore Events
          </a>
        </div>
      </div>
      
      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg 
          className="w-6 h-6 text-white" 
          fill="none" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth="2" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;