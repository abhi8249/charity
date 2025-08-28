import React, { useState, useRef, useEffect } from "react";

const videos = [
    { id: 1, title: "Spiritual Journey", thumbnail: "https://images.unsplash.com/photo-1489659639091-8b687bc4386e?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHNwaXJpdHVhbHxlbnwwfHwwfHx8MA%3D%3D", url: "https://www.w3schools.com/html/mov_bbb.mp4", duration: "5:24" },
    { id: 2, title: "Meditation Guide", thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPA_Ryy0FIBHCP4hoNQFh6Pu_4KEnkj0qzpg&s", url: "https://www.w3schools.com/html/movie.mp4", duration: "3:15" },
    { id: 3, title: "Nature Sounds", thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkpECMnjgv3pOpvHrCUmW5JDXef-yaxBqZaA&s", url: "https://www.w3schools.com/html/mov_bbb.mp4", duration: "8:42" },
    { id: 4, title: "Peaceful Moments", thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkpECMnjgv3pOpvHrCUmW5JDXef-yaxBqZaA&s", url: "https://www.w3schools.com/html/movie.mp4", duration: "4:33" },
    { id: 5, title: "Inner Peace", thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPA_Ryy0FIBHCP4hoNQFh6Pu_4KEnkj0qzpg&s", url: "https://www.w3schools.com/html/mov_bbb.mp4", duration: "6:18" },
    { id: 6, title: "Mindfulness Practice", thumbnail: "https://images.unsplash.com/photo-1489659639091-8b687bc4386e?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHNwaXJpdHVhbHxlbnwwfHwwfHx8MA%3D%3D", url: "https://www.w3schools.com/html/movie.mp4", duration: "7:29" },
    { id: 7, title: "Zen Garden", thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkpECMnjgv3pOpvHrCUmW5JDXef-yaxBqZaA&s", url: "https://www.w3schools.com/html/mov_bbb.mp4", duration: "9:12" },
    { id: 8, title: "Sacred Spaces", thumbnail: "https://images.unsplash.com/photo-1489659639091-8b687bc4386e?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHNwaXJpdHVhbHxlbnwwfHwwfHx8MA%3D%3D", url: "https://www.w3schools.com/html/movie.mp4", duration: "5:47" },
    { id: 9, title: "Healing Music", thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPA_Ryy0FIBHCP4hoNQFh6Pu_4KEnkj0qzpg&s", url: "https://www.w3schools.com/html/mov_bbb.mp4", duration: "10:33" },
    { id: 10, title: "Wisdom Journey", thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkpECMnjgv3pOpvHrCUmW5JDXef-yaxBqZaA&s", url: "https://www.w3schools.com/html/movie.mp4", duration: "6:51" },
];

export default function VideoSliderSection() {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);
  const autoSlideInterval = useRef(null);

  const cardWidth = 280; // Width of each card including gap

  const startAutoSlide = () => {
    if (autoSlideInterval.current) clearInterval(autoSlideInterval.current);
    
    autoSlideInterval.current = setInterval(() => {
      if (sliderRef.current && isAutoPlaying) {
        const maxIndex = Math.ceil(videos.length - (sliderRef.current.clientWidth / cardWidth));
        const nextIndex = currentIndex >= maxIndex ? 0 : currentIndex + 1;
        
        setCurrentIndex(nextIndex);
        sliderRef.current.scrollTo({
          left: nextIndex * cardWidth,
          behavior: "smooth",
        });
      }
    }, 3500);
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
  }, [isAutoPlaying, currentIndex]);

  const scrollByAmount = (direction) => {
    if (sliderRef.current) {
      const maxIndex = Math.ceil(videos.length - (sliderRef.current.clientWidth / cardWidth));
      let newIndex;
      
      if (direction === 'left') {
        newIndex = currentIndex > 0 ? currentIndex - 1 : maxIndex;
      } else {
        newIndex = currentIndex < maxIndex ? currentIndex + 1 : 0;
      }
      
      setCurrentIndex(newIndex);
      sliderRef.current.scrollTo({
        left: newIndex * cardWidth,
        behavior: "smooth",
      });
    }
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  return (
    <section className="bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white py-16 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-orange-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent mb-4">
            🎬 Featured Videos
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Discover amazing content curated just for you. Click any video to start watching.
          </p>
        </div>

        {/* Controls */}
        <div className="flex justify-center items-center gap-4 mb-8">
          <button
            onClick={toggleAutoPlay}
            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
              isAutoPlaying 
                ? 'bg-gradient-to-r from-orange-500 to-pink-500 text-white shadow-lg shadow-orange-500/25' 
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
          >
            {isAutoPlaying ? '⏸️ Pause Auto-slide' : '▶️ Start Auto-slide'}
          </button>
          <div className="text-sm text-gray-400">
            {currentIndex + 1} / {Math.ceil(videos.length - 2)}
          </div>
        </div>

        {/* Slider container */}
        <div className="relative">
          {/* Left arrow */}
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white p-4 rounded-full z-20 shadow-lg shadow-orange-500/25 transition-all duration-300 hover:scale-110"
            onClick={() => scrollByAmount('left')}
            onMouseEnter={stopAutoSlide}
            onMouseLeave={() => isAutoPlaying && startAutoSlide()}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Right arrow */}
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white p-4 rounded-full z-20 shadow-lg shadow-orange-500/25 transition-all duration-300 hover:scale-110"
            onClick={() => scrollByAmount('right')}
            onMouseEnter={stopAutoSlide}
            onMouseLeave={() => isAutoPlaying && startAutoSlide()}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Slider */}
          <div
            ref={sliderRef}
            className="flex gap-6 overflow-x-hidden pb-4 scroll-smooth px-12"
            onMouseEnter={stopAutoSlide}
            onMouseLeave={() => isAutoPlaying && startAutoSlide()}
          >
            {videos.map((video) => (
              <div
                key={video.id}
                className="min-w-[260px] bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl shadow-2xl overflow-hidden cursor-pointer hover:scale-105 hover:shadow-orange-500/20 transition-all duration-500 group border border-gray-700"
                onClick={() => setSelectedVideo(video)}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title} 
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute top-3 right-3 bg-black/80 text-white px-2 py-1 rounded-lg text-sm font-medium">
                    {video.duration}
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-gradient-to-r from-orange-500 to-pink-500 rounded-full p-4 shadow-lg">
                      <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg text-white group-hover:text-orange-400 transition-colors duration-300 truncate">
                    {video.title}
                  </h3>
                  <p className="text-gray-400 text-sm mt-1">Click to watch</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Visit for More Button */}
        <div className="text-center mt-12">
          <button className="group relative px-12 py-4 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 rounded-full text-white font-bold text-lg shadow-2xl shadow-orange-500/25 hover:shadow-orange-500/40 transition-all duration-500 transform hover:scale-105 hover:-translate-y-1">
            <span className="relative z-10 flex items-center justify-center gap-3">
              <svg className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
              Visit for More Videos
              <svg className="w-6 h-6 group-hover:-rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
            </span>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-600 via-pink-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
          <p className="text-gray-400 mt-4 text-sm">
            Explore our full collection of premium content
          </p>
        </div>
      </div>

      {/* Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-gray-900 rounded-2xl overflow-hidden w-full max-w-4xl relative shadow-2xl border border-gray-700">
            <button
              className="absolute top-4 right-4 text-white text-2xl font-bold hover:text-orange-500 z-50 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center hover:bg-orange-500/20 transition-all duration-300"
              onClick={() => setSelectedVideo(null)}
            >
              ✕
            </button>
            <div className="p-4 bg-gradient-to-r from-gray-800 to-gray-900">
              <h3 className="text-xl font-bold text-white">{selectedVideo.title}</h3>
              <p className="text-gray-400 text-sm">Duration: {selectedVideo.duration}</p>
            </div>
            <video
              key={selectedVideo.id}
              src={selectedVideo.url}
              controls
              autoPlay
              className="w-full h-auto"
            />
          </div>
        </div>
      )}
    </section>
  );
}