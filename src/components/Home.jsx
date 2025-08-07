import React, { useState, useEffect } from "react";
import {
  Facebook,
  Youtube,
  Instagram,
  Globe,
  Menu,
  X,
  Heart,
  Play,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Clock,
} from "lucide-react";
import hero1 from "../../public/hero1.jpg";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [centerCard, setCenterCard] = useState(2);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Hero slider images
  const heroImages = [
    hero1,
    "https://m.media-amazon.com/images/I/61x5aDUruIL._UF894,1000_QL80_.jpg",
    "https://odishatour.in/wp-content/uploads/2022/02/Mahapurusha-Shri-Achyutananda-Das-Gadi-Nemala-Cuttack-3.jpeg",
  ];

  // Best works cards
  const bestWorks = [
    {
      id: 1,
      title: "Food Distribution",
      image:
        "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description: "Feeding the hungry and needy",
    },
    {
      id: 2,
      title: "Education Support",
      image:
        "https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description: "Supporting education for underprivileged children",
    },
    {
      id: 3,
      title: "Medical Camps",
      image:
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description: "Free medical assistance to rural areas",
    },
    {
      id: 4,
      title: "Spiritual Guidance",
      image:
        "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description: "Spiritual counseling and guidance",
    },
    {
      id: 5,
      title: "Clean Water",
      image:
        "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description: "Providing clean water access",
    },
  ];

  // Sliding cards data
  const leftCards = [
    {
      name: "Community Service",
      amount: "122",
      content: "Dedicated to serving the community with love and compassion",
      image:
        "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Spiritual Growth",
      amount: "122",
      content: "Guiding souls towards spiritual enlightenment and inner peace",
      image:
        "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Educational Initiative",
      amount: "122",
      content: "Empowering minds through quality education and learning",
      image:
        "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Healthcare Support",
      amount: "122",
      content: "Providing medical aid and health awareness programs",
      image:
        "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "ssss Service",
      amount: "122",
      content: "Dedicated to serving the community with love and compassion",
      image:
        "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
  ];

  const rightCards = [
    {
      name: "Cultural Heritage",
      content: "Preserving and promoting rich cultural traditions",
      image:
        "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Environmental Care",
      content: "Protecting nature and promoting eco-friendly practices",
      image:
        "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Youth Development",
      content: "Nurturing young minds for a better tomorrow",
      image:
        "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Elder Care",
      content: "Respecting and caring for our elderly community members",
      image:
        "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
  ];

  const whatWeDo = [
    {
      title: "Spiritual Services",
      description:
        "Daily prayers, meditation sessions, and spiritual guidance for seekers",
      icon: "🙏",
    },
    {
      title: "Community Kitchen",
      description:
        "Free meals for visitors and daily food distribution to the needy",
      icon: "🍽️",
    },
    {
      title: "Educational Programs",
      description:
        "Sanskrit learning, vedic studies, and modern education support",
      icon: "📚",
    },
    {
      title: "Medical Assistance",
      description: "Free medical camps and health awareness programs",
      icon: "🏥",
    },
    {
      title: "Cultural Events",
      description:
        "Religious festivals, cultural programs, and spiritual gatherings",
      icon: "🎭",
    },
    {
      title: "Social Welfare",
      description:
        "Supporting underprivileged families and community development",
      icon: "❤️",
    },
  ];

  // Auto-slide for hero section
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Auto-slide for best works
  useEffect(() => {
    const timer = setInterval(() => {
      setCenterCard((prev) => (prev + 1) % bestWorks.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [bestWorks.length]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      {/* Top Action Bar */}
      <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-sm font-medium">Achyutananda Seva Ashram</div>
          <div className="flex space-x-4">
            <Facebook className="w-5 h-5 hover:text-orange-200 cursor-pointer transition-colors" />
            <Youtube className="w-5 h-5 hover:text-orange-200 cursor-pointer transition-colors" />
            <Instagram className="w-5 h-5 hover:text-orange-200 cursor-pointer transition-colors" />
            <Globe className="w-5 h-5 hover:text-orange-200 cursor-pointer transition-colors" />
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              {/* <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">ॐ</span>
              </div> */}
              <img
                src="./logo.jpg"
                alt=""
                className="w-12 h-12 rounded-full flex items-center justify-center"
              />
              <div>
                <h1 className="text-xl font-bold text-gray-800">
                  Achyutananda
                </h1>
                <p className="text-sm text-orange-600">Seva Ashram</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <a
                href="#home"
                className="text-gray-700 hover:text-orange-600 font-medium transition-colors"
              >
                Home
              </a>
              <a
                href="#about"
                className="text-gray-700 hover:text-orange-600 font-medium transition-colors"
              >
                About Us
              </a>
              <a
                href="#gallery"
                className="text-gray-700 hover:text-orange-600 font-medium transition-colors"
              >
                Gallery
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-orange-600 font-medium transition-colors"
              >
                Contact Us
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden bg-white border-t">
              <div className="py-2">
                <a
                  href="#home"
                  className="block px-4 py-2 text-gray-700 hover:bg-orange-50"
                >
                  Home
                </a>
                <a
                  href="#about"
                  className="block px-4 py-2 text-gray-700 hover:bg-orange-50"
                >
                  About Us
                </a>
                <a
                  href="#gallery"
                  className="block px-4 py-2 text-gray-700 hover:bg-orange-50"
                >
                  Gallery
                </a>
                <a
                  href="#contact"
                  className="block px-4 py-2 text-gray-700 hover:bg-orange-50"
                >
                  Contact Us
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide
                ? "opacity-100 scale-100"
                : "opacity-0 scale-105"
            }`}
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              transition: "transform 1s ease-in-out",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60"></div>
          </div>
        ))}

        <div className="absolute inset-0 flex items-center justify-center text-center text-white z-10">
          <div className="max-w-4xl px-4">
            <h2 className="text-5xl md:text-7xl font-bold mb-6 animate-pulse">
              Welcome to Achyutananda Seva Ashram
            </h2>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Serving humanity with love, compassion, and spiritual guidance
            </p>
            <button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 flex items-center mx-auto shadow-2xl">
              <Heart className="w-6 h-6 mr-2" />
              Donate Now
            </button>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-white to-gray-50">
        <div className="container mx-auto px-4">
          <h3 className="text-5xl font-extrabold text-center mb-16 text-gray-800 tracking-tight">
            ✨ Our Best Works
          </h3>

          <div className="relative">
            {/* Navigation Arrows */}
            <button
              onClick={() =>
                setCenterCard(
                  (prev) => (prev - 1 + bestWorks.length) % bestWorks.length
                )
              }
              className="absolute left-0 top-1/2 transform -translate-y-1/2 z-30 bg-white border border-gray-300 hover:bg-gray-100 p-3 rounded-full shadow-md transition"
            >
              <svg
                className="w-6 h-6 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              onClick={() =>
                setCenterCard((prev) => (prev + 1) % bestWorks.length)
              }
              className="absolute right-0 top-1/2 transform -translate-y-1/2 z-30 bg-white border border-gray-300 hover:bg-gray-100 p-3 rounded-full shadow-md transition"
            >
              <svg
                className="w-6 h-6 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>

            {/* Carousel */}
            <div className="overflow-hidden">
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
                    className={`w-80 flex-shrink-0 transition-all duration-700 ${
                      index === centerCard % bestWorks.length
                        ? "transform scale-110 z-20 shadow-2xl"
                        : "transform scale-95 opacity-60"
                    }`}
                  >
                    <div className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                      <img
                        src={work.image}
                        alt={work.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-6">
                        <h4 className="text-xl font-bold mb-2 text-gray-800">
                          {work.title}
                        </h4>
                        <p className="text-gray-500 text-sm">
                          {work.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-8 space-x-2">
              {bestWorks.map((_, index) => (
                <div
                  key={index}
                  className={`w-3 h-3 rounded-full ${
                    index === centerCard % bestWorks.length
                      ? "bg-gray-800"
                      : "bg-gray-300"
                  }`}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Three Column Sliding Section */}
      <section className="py-24 bg-gradient-to-r from-orange-100 to-red-100">
        <div className="mx-auto px-6">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
            {/* Left Column - Donors */}
            <div className="flex-1 space-y-6">
              <h4 className="text-3xl font-bold text-center lg:text-left text-gray-800">
                Our Donors
              </h4>
              <div className="overflow-hidden h-80 relative">
                <div className="flex flex-col space-y-6 animate-slide-down">
                  {[...leftCards, ...leftCards].map((donor, index) => (
                    <div
                      key={`donor-${index}`}
                      className="p-4 rounded-xl flex items-center space-x-6 hover:shadow-2xl transition duration-300 bg-white"
                    >
                      <img
                        src={donor.image}
                        alt={donor.name}
                        className="w-16 h-16 rounded-full object-cover border-2 border-orange-300"
                      />
                      <div>
                        <h5 className="text-xl font-semibold text-gray-800">
                          {donor.name}
                        </h5>
                        <p className="text-md text-green-600 font-medium">
                          ₹{donor.amount.toLocaleString()}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Center Column - Video */}
            <div className="flex-1 text-center space-y-4 max-w-2xl w-full mx-auto">
              <h4 className="text-3xl font-bold text-gray-800">
                Watch Our Story
              </h4>

              <div className="relative bg-black rounded-3xl overflow-hidden shadow-2xl hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)] transition-all duration-300">
                <video
                  controls
                  poster="https://images.unsplash.com/photo-1544427920-c49ccfb85579?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  className="w-full h-[22rem] object-cover rounded-3xl"
                >
                  <source
                    src="https://www.w3schools.com/html/mov_bbb.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>

              <p className="text-lg text-gray-700 font-medium">
                Discover our mission and impact in the community
              </p>
            </div>

            {/* Right Column - Volunteers */}
            <div className="flex-1 space-y-6">
              <h4 className="text-3xl font-bold text-center lg:text-left text-gray-800">
                Our Volunteers
              </h4>
              <div className="overflow-hidden h-80 relative">
                <div className="flex flex-col space-y-6 animate-slide-up">
                  {[...rightCards, ...rightCards].map((volunteer, index) => (
                    <div
                      key={`volunteer-${index}`}
                      className="p-4 rounded-xl flex items-center space-x-6 hover:shadow-2xl transition duration-300 bg-white"
                    >
                      <img
                        src={volunteer.image}
                        alt={volunteer.name}
                        className="w-16 h-16 rounded-full object-cover border-2 border-red-300"
                      />
                      <div>
                        <h5 className="text-xl font-semibold text-gray-800">
                          {volunteer.name}
                        </h5>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-4xl font-bold text-center mb-16 text-gray-800">
            What We Do
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whatWeDo.map((service, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h4 className="text-xl font-bold mb-4 text-gray-800 group-hover:text-orange-600 transition-colors">
                  {service.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
                <button className="mt-6 text-orange-600 hover:text-orange-800 font-medium flex items-center group-hover:translate-x-2 transition-transform duration-300">
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Thoughtful Message Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-8">A Message of Hope</h3>
          <blockquote className="text-xl md:text-2xl leading-relaxed italic mb-8">
            "In the service of others, we find our true purpose. Every act of
            kindness, every moment of compassion, every helping hand extended
            creates ripples of positive change that touch countless lives.
            Together, we build a world filled with love, understanding, and
            spiritual growth."
          </blockquote>
          <div className="text-lg font-medium opacity-90">
            - Achyutananda Seva Ashram
          </div>
        </div>
      </section>

      {/* Beautiful Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* About Column */}
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">ॐ</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold">
                    Achyutananda Seva Ashram
                  </h4>
                  <p className="text-orange-400">Serving Humanity with Love</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed mb-6">
                Dedicated to spiritual growth, community service, and spreading
                love and compassion. We believe in the power of selfless service
                and the importance of spiritual guidance in creating a better
                world for all.
              </p>
              <div className="flex space-x-4">
                <Facebook className="w-6 h-6 hover:text-orange-400 cursor-pointer transition-colors" />
                <Youtube className="w-6 h-6 hover:text-orange-400 cursor-pointer transition-colors" />
                <Instagram className="w-6 h-6 hover:text-orange-400 cursor-pointer transition-colors" />
                <Globe className="w-6 h-6 hover:text-orange-400 cursor-pointer transition-colors" />
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h5 className="text-lg font-semibold mb-6 text-orange-400">
                Quick Links
              </h5>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#home"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Our Services
                  </a>
                </li>
                <li>
                  <a
                    href="#gallery"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Gallery
                  </a>
                </li>
                <li>
                  <a
                    href="#events"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Events
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h5 className="text-lg font-semibold mb-6 text-orange-400">
                Contact Info
              </h5>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-orange-400 mt-1" />
                  <div>
                    <p className="text-gray-300 text-sm">
                      123 Spiritual Avenue
                      <br />
                      Bhubaneswar, Odisha
                      <br />
                      India - 751001
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-orange-400" />
                  <p className="text-gray-300 text-sm">+91 12345 67890</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-orange-400" />
                  <p className="text-gray-300 text-sm">
                    info@achyutanandaseva.org
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-orange-400" />
                  <p className="text-gray-300 text-sm">
                    Daily: 5:00 AM - 9:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-700 mt-12 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2025 Achyutananda Seva Ashram. All rights reserved. | Made with
              ❤️ for humanity
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
