import React, { useState, useRef, useEffect } from "react";

const bestWorks = [
  {
    id: 1,
    title: "Digital Innovation Platform",
    description: "A cutting-edge solution that transforms how businesses operate in the digital landscape.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
    category: "Web Development",
    year: "2024",
    rating: 5,
  },
  {
    id: 2,
    title: "AI-Powered Analytics",
    description: "Revolutionary analytics platform powered by machine learning and artificial intelligence.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
    category: "AI/ML",
    year: "2024",
    rating: 5,
  },
  {
    id: 3,
    title: "Mobile App Excellence",
    description: "Award-winning mobile application with seamless user experience and modern design.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500&h=300&fit=crop",
    category: "Mobile Development",
    year: "2023",
    rating: 4,
  },
  {
    id: 4,
    title: "Cloud Infrastructure",
    description: "Scalable cloud solution that handles millions of users with zero downtime.",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=500&h=300&fit=crop",
    category: "Cloud Computing",
    year: "2024",
    rating: 5,
  },
  {
    id: 5,
    title: "E-commerce Revolution",
    description: "Next-generation e-commerce platform with advanced personalization features.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
    category: "E-commerce",
    year: "2023",
    rating: 4,
  },
  {
    id: 6,
    title: "Blockchain Solution",
    description: "Secure and transparent blockchain implementation for modern enterprises.",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=500&h=300&fit=crop",
    category: "Blockchain",
    year: "2024",
    rating: 5,
  }
];

export default function BestWorksSection() {
  const [centerCard, setCenterCard] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [selectedWork, setSelectedWork] = useState(null);
  const autoSlideInterval = useRef(null);

  const startAutoSlide = () => {
    if (autoSlideInterval.current) clearInterval(autoSlideInterval.current);
    
    autoSlideInterval.current = setInterval(() => {
      if (isAutoPlaying) {
        setCenterCard((prev) => (prev + 1) % bestWorks.length);
      }
    }, 4000);
  };

  const stopAutoSlide = () => {
    if (autoSlideInterval.current) {
      clearInterval(autoSlideInterval.current);
    }
  };

  useEffect(() => {
    if (isAutoPlaying) {
      startAutoSlide();
    } else {
      stopAutoSlide();
    }

    return () => stopAutoSlide();
  }, [isAutoPlaying]);

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  const goToSlide = (index) => {
    setCenterCard(index);
  };

  const goToPrevious = () => {
    setCenterCard((prev) => (prev - 1 + bestWorks.length) % bestWorks.length);
  };

  const goToNext = () => {
    setCenterCard((prev) => (prev + 1) % bestWorks.length);
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <svg
        key={i}
        className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-80 h-80 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-pink-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h3 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent tracking-tight">
            ✨ Our Best Works
          </h3>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover our most impressive projects that showcase innovation, creativity, and technical excellence
          </p>
        </div>

        {/* Controls */}
        <div className="flex justify-center items-center gap-6 mb-12">
          <button
            onClick={toggleAutoPlay}
            className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
              isAutoPlaying 
                ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/25' 
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
          >
            {isAutoPlaying ? '⏸️ Pause Slideshow' : '▶️ Start Slideshow'}
          </button>
          <div className="text-sm text-gray-400 bg-gray-800/50 px-4 py-2 rounded-full">
            {centerCard + 1} of {bestWorks.length}
          </div>
        </div>

        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            onMouseEnter={stopAutoSlide}
            onMouseLeave={() => isAutoPlaying && startAutoSlide()}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-30 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white p-4 rounded-full shadow-lg shadow-blue-500/25 transition-all duration-300 hover:scale-110"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={goToNext}
            onMouseEnter={stopAutoSlide}
            onMouseLeave={() => isAutoPlaying && startAutoSlide()}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-30 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white p-4 rounded-full shadow-lg shadow-blue-500/25 transition-all duration-300 hover:scale-110"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Carousel */}
          <div 
            className="overflow-hidden"
            onMouseEnter={stopAutoSlide}
            onMouseLeave={() => isAutoPlaying && startAutoSlide()}
          >
            <div
              className="flex transition-transform duration-700 ease-in-out space-x-6 justify-center"
              style={{
                transform: `translateX(calc(50% - ${
                  (centerCard % bestWorks.length) * 21 + 10.5
                }rem))`,
              }}
            >
              {bestWorks.map((work, index) => (
                <div
                  key={work.id}
                  className={`w-80 flex-shrink-0 transition-all duration-700 cursor-pointer ${
                    index === centerCard % bestWorks.length
                      ? "transform scale-110 z-20 shadow-2xl shadow-blue-500/20"
                      : "transform scale-95 opacity-60 hover:opacity-80"
                  }`}
                  onClick={() => setSelectedWork(work)}
                >
                  <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group border border-gray-700">
                    <div className="relative overflow-hidden">
                      <img
                        src={work.image}
                        alt={work.title}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                      <div className="absolute top-4 left-4">
                        <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                          {work.category}
                        </span>
                      </div>
                      <div className="absolute top-4 right-4">
                        <span className="bg-black/70 text-white px-3 py-1 rounded-full text-xs font-medium">
                          {work.year}
                        </span>
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-full p-3 shadow-lg">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-2">
                        {renderStars(work.rating)}
                        <span className="text-sm text-gray-400 ml-1">({work.rating}/5)</span>
                      </div>
                      <h4 className="text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors duration-300">
                        {work.title}
                      </h4>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {work.description}
                      </p>
                      <div className="mt-4 pt-4 border-t border-gray-700">
                        <button className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors duration-300">
                          View Details →
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced Dots Indicator */}
          <div className="flex justify-center mt-12 space-x-3">
            {bestWorks.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 ${
                  index === centerCard % bestWorks.length
                    ? "w-8 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                    : "w-3 h-3 bg-gray-600 hover:bg-gray-500 rounded-full"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Visit for More Button */}
        <div className="text-center mt-16">
          <button className="group relative px-12 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-600 rounded-full text-white font-bold text-lg shadow-2xl shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-500 transform hover:scale-105 hover:-translate-y-1">
            <span className="relative z-10 flex items-center justify-center gap-3">
              <svg className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              View All Projects
              <svg className="w-6 h-6 group-hover:-rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
          <p className="text-gray-400 mt-4 text-sm">
            Explore our complete portfolio of innovative solutions
          </p>
        </div>
      </div>

      {/* Modal for detailed view */}
      {selectedWork && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl overflow-hidden w-full max-w-2xl relative shadow-2xl border border-gray-700">
            <button
              className="absolute top-4 right-4 text-white text-2xl font-bold hover:text-blue-400 z-50 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center hover:bg-blue-500/20 transition-all duration-300"
              onClick={() => setSelectedWork(null)}
            >
              ✕
            </button>
            <div className="relative">
              <img 
                src={selectedWork.image} 
                alt={selectedWork.title} 
                className="w-full h-64 object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex items-center gap-2 mb-2">
                  {renderStars(selectedWork.rating)}
                  <span className="text-sm text-gray-300">({selectedWork.rating}/5)</span>
                </div>
                <h3 className="text-2xl font-bold text-white">{selectedWork.title}</h3>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {selectedWork.category}
                </span>
                <span className="text-gray-400 text-sm">{selectedWork.year}</span>
              </div>
              <p className="text-gray-300 leading-relaxed mb-6">
                {selectedWork.description}
              </p>
              <div className="flex gap-4">
                <button className="flex-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300">
                  View Project
                </button>
                <button className="flex-1 bg-gray-700 text-white py-3 rounded-lg font-semibold hover:bg-gray-600 transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}