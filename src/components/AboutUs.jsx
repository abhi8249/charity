import React from "react";
import { Heart, Users, Globe, Star, ArrowRight } from "lucide-react";
import aboutus1 from "../../public/aboutus1.jpeg";
import baba1 from "../../public/baba1.jpeg";

const AboutUs = () => {
  return (
    <div className="bg-gradient-to-br from-orange-50 to-red-50">
      {/* Hero Banner */}
      <section className="relative h-[50vh] flex items-center justify-center text-center text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${aboutus1})`,
          }}
        ></div>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 px-4">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4">About Us</h1>
          <p className="max-w-2xl mx-auto text-lg opacity-90">
            Serving humanity with compassion, spirituality, and selfless love.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <img src={baba1} alt="Mission" className="rounded-3xl shadow-lg" />
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              At{" "}
              <span className="font-semibold">
                Achyutananda Seba Ashram – Mahendragiri
              </span>
              , 🌿 Mission & Vision – Seva, Sadhana, Sanskar 🌿 Here,
              spirituality is not confined to rituals – it flows through every
              act of kindness, discipline, and divine remembrance. The Ashram
              nurtures society through: 🕉️ Spiritual Awakening – Satsangs,
              bhajans, meditation camps, and spreading the immortal wisdom of
              the Mālikā. 🍚 Social Service – Annadaan (feeding the hungry),
              medical support, helping the poor and sick, and extending
              education to underprivileged children. 📖 Cultural Heritage –
              Preserving the treasures of Panchasakha saints, scriptures, and
              Odisha’s luminous spiritual traditions. 🌱 Youth & Community
              Welfare – Inspiring the young to move beyond distractions and
              embrace discipline, compassion, and purposeful living. 🌏 Harmony
              with Nature – Tree plantation, cleanliness drives, and reverence
              towards Mother Earth as acts of sacred seva.
            </p>
            <a
              href="#contact"
              className="bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:from-orange-600 hover:to-red-600 transition-transform transform hover:scale-105 inline-flex items-center"
            >
              Join Us <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 shadow-lg text-center hover:-translate-y-2 transition-all duration-300">
              <Heart className="w-12 h-12 mx-auto text-orange-500 mb-4" />
              <h4 className="text-xl font-bold mb-2">Compassion</h4>
              <p className="text-gray-600">
                We believe in selfless love and kindness for all beings.
              </p>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 shadow-lg text-center hover:-translate-y-2 transition-all duration-300">
              <Users className="w-12 h-12 mx-auto text-orange-500 mb-4" />
              <h4 className="text-xl font-bold mb-2">Community</h4>
              <p className="text-gray-600">
                Building strong, supportive communities through service.
              </p>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 shadow-lg text-center hover:-translate-y-2 transition-all duration-300">
              <Globe className="w-12 h-12 mx-auto text-orange-500 mb-4" />
              <h4 className="text-xl font-bold mb-2">Global Harmony</h4>
              <p className="text-gray-600">
                Spreading peace and unity across the world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-r from-orange-100 to-red-100">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Swami Ananda",
                role: "Founder",
                image: "https://randomuser.me/api/portraits/men/32.jpg",
              },
              {
                name: "Mata Satyadevi",
                role: "Spiritual Guide",
                image: "https://randomuser.me/api/portraits/women/45.jpg",
              },
              {
                name: "Ravi Kumar",
                role: "Community Coordinator",
                image: "https://randomuser.me/api/portraits/men/65.jpg",
              },
            ].map((member, i) => (
              <div
                key={i}
                className="bg-white rounded-3xl shadow-lg overflow-hidden hover:-translate-y-2 transition-all duration-300"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6 text-center">
                  <h4 className="text-xl font-bold text-gray-800">
                    {member.name}
                  </h4>
                  <p className="text-orange-600">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            🕉️ A Sacred Place of Peace & Devotion 🕉️
          </h2>

          <ul className="text-lg mb-8 opacity-90 space-y-4 text-left">
            <li>
              🌺 Here, the mind discovers silence, the heart overflows with
              love, and the soul touches liberation.
            </li>
            <li>
              🌺 Here, the hungry are nourished, the sick are healed, and the
              lonely find a family.
            </li>
            <li>
              🌺 Here, seekers realize that true peace is not isolation, but
              love shared with the world. The Ashram is not merely a place – it
              is a living movement of Seva, Sadhana, and Sanskar.
            </li>
          </ul>

          <a
            href="#donate"
            className="bg-white text-orange-600 font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-gray-100 transition-transform transform hover:scale-105 inline-block"
          >
            Donate Now
          </a>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
