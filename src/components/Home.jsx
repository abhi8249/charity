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
import VideoSliderSection from "./VideoSliderSection";
import BestWorksSection from "./BestWorksSection";
import image3 from "../../public/image3.jpeg";
import image1 from "../../public/image1.jpeg";
import image2 from "../../public/image2.jpeg";
import image6 from "../../public/image6.jpg";
import video1 from "../../public/video1.mp4";

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
      image: image3,
      description: "Feeding the hungry and needy",
    },
    {
      id: 2,
      title: "Cow shed & Care",
      image: image6,
      description: "Supporting education for underprivileged children",
    },
    {
      id: 3,
      title: "Blood donation Camps",
      image: image1,
      description: "Free blood donation assistance to rural areas",
    },
    {
      id: 4,
      title: "Forest Conservation",
      image: image2,
      description: "Protecting and preserving natural habitats",
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

        {/* Hero Content */}
        <div className="absolute inset-0 flex items-center justify-center text-center text-white z-10">
          <div className="max-w-4xl px-4">
            <h2 className="text-5xl md:text-7xl font-bold mb-6 animate-pulse">
              Welcome to Achyutananda Seva Ashram
            </h2>
            <button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 flex items-center mx-auto shadow-2xl">
              <Heart className="w-6 h-6 mr-2" />
              Donate Now
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-red-50 text-gray-800">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <div className="relative">
            <img
              src="/aboutus1.jpeg"
              alt="Achyutananda Seba Ashram"
              className="rounded-2xl shadow-2xl transform hover:scale-105 transition duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/20 to-red-500/20 rounded-2xl"></div>
          </div>

          {/* Right Side - Text */}
          <div className="bg-white/70 backdrop-blur-md p-8 rounded-2xl shadow-xl">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent text-center md:text-left">
              🌸 About Achyutananda Seba Ashram 🌸
            </h2>

            <p className="text-lg leading-relaxed opacity-90 text-justify">
              At the sacred foothills of <strong>Mahendragiri</strong>, where
              <strong> Parashurama</strong> once performed deep penance and
              where divine vibrations eternally flow, shines the Achyutananda
              Seba Ashram – a living sanctuary of devotion, service, and inner
              awakening.
            </p>

            <p className="mt-4 text-lg leading-relaxed opacity-90 text-justify">
              Born from the holy vision of <strong>Bansidhar Baba</strong>,
              hailing from <strong>Raghunathpur (Jagatsinghpur)</strong>, this
              Ashram has blossomed into a spiritual lighthouse for countless
              seekers who thirst for peace, purity, and the eternal path of
              truth.
            </p>

            <p className="mt-4 text-lg leading-relaxed opacity-90 text-justify">
              Carrying forward the timeless message of{" "}
              <strong>Mahapurusha Achyutananda</strong>, one of Odisha’s revered
              Panchasakha saints, the Ashram reminds us that:
            </p>

            <blockquote className="mt-6 italic text-xl font-semibold text-orange-700 border-l-4 border-orange-500 pl-4">
              💫 “Life finds its highest meaning in selfless service, devotion,
              and compassion.”
            </blockquote>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-white to-gray-50">
        <div className="container mx-auto px-4">
          <h3 className="text-5xl font-extrabold text-center mb-16 text-gray-800 tracking-tight">
            ✨ Our Best Works
          </h3>

          <div className="relative overflow-hidden">
            {/* Sliding Container */}
            <div
              className="flex space-x-6 animate-slide"
              style={{ width: "max-content" }}
            >
              {[...bestWorks, ...bestWorks].map((work, index) => (
                <div
                  key={`${index}-${centerCard}`}
                  className={`w-80 flex-shrink-0 transition-all duration-500 ease-in-out ${
                    index === centerCard % bestWorks.length
                      ? "transform scale-125 z-20 shadow-2xl"
                      : "transform scale-95 opacity-60"
                  }`}
                >
                  <div className="bg-white rounded-3xl overflow-hidden shadow-md hover:scale-[1.28] transition-transform duration-500 ease-in-out">
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
                  poster={image3}
                  className="w-full h-[22rem] object-cover rounded-3xl"
                >
                  <source src={video1} type="video/mp4" />
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

      <VideoSliderSection />

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
          <h3 className="text-3xl font-bold mb-8">
            ✨ The Divine Guidance of Bansidhar Baba ✨
          </h3>
          <p className="text-lg">
            Baba is not only a mentor but a living embodiment of humility,
            sacrifice, and tireless service. His life itself is a prayer –
            serving parents, serving the poor, uplifting the helpless, and
            guiding every soul towards truth
          </p>
          <blockquote className="text-xl md:text-2xl leading-relaxed italic mb-8">
            💫 “True spirituality is not in seeking God in far-off temples, but
            in feeding the hungry, healing the sick, serving the poor, and
            honoring one’s parents.” – Bansidhar Bab"
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
