"use client";
import React from 'react';
import { 
  Wind, 
  Volume2, 
  Wifi, 
  Zap, 
  Camera, 
  Droplets, 
  Armchair, 
  Lock, 
  Coffee,
  Users,
  BookOpen,
  // Sparkles
} from 'lucide-react';

const FacilitiesPage = () => {
  const facilities = [
    {
      icon: <Wind className="w-8 h-8" />,
      title: "AC / Non-AC Rooms",
      description: "Choose your comfort level with our climate-controlled AC rooms or naturally ventilated non-AC spaces, designed to keep you focused regardless of the weather."
    },
    {
      icon: <Volume2 className="w-8 h-8" />,
      title: "Silent Cabins",
      description: "Experience ultimate concentration in our soundproof silent cabins, perfect for deep study sessions and exam preparation without any distractions."
    },
    {
      icon: <Wifi className="w-8 h-8" />,
      title: "High-Speed WiFi",
      description: "Stay connected with blazing-fast internet throughout the library, enabling seamless online research and digital learning resources."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Power Backup",
      description: "Uninterrupted study sessions guaranteed with our 24/7 power backup system. Never worry about power cuts disrupting your momentum."
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: "CCTV Surveillance",
      description: "Study with complete peace of mind. Our comprehensive CCTV coverage ensures a safe and secure environment for all students."
    },
    {
      icon: <Droplets className="w-8 h-8" />,
      title: "Water Facilities",
      description: "Stay hydrated with clean drinking water and washroom facilities available throughout the premises at your convenience."
    },
    {
      icon: <Armchair className="w-8 h-8" />,
      title: "Comfortable Chairs",
      description: "Ergonomically designed seating that supports long study hours, reducing fatigue and helping you maintain focus and productivity."
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Personal Lockers",
      description: "Secure storage for your belongings with dedicated lockers, so you can study worry-free knowing your items are safe."
    },
    {
      icon: <Coffee className="w-8 h-8" />,
      title: "Pantry/Tea/Coffee",
      description: "Refresh yourself with complimentary tea and coffee facilities in our pantry area, perfect for quick breaks during study sessions."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Separate Sections",
      description: "Dedicated separate sections for girls and boys, ensuring a comfortable and respectful study environment for everyone."
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Exam-Focused Environment",
      description: "Every aspect of our library is designed to maximize your exam preparation with minimal distractions and maximum productivity."
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-100 to-white bg-clip-text text-transparent">
            World-Class Facilities
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Experience a peaceful and distraction-free study environment designed to help you stay focused and productive every day.
          </p>
        </div>
      </div>

      {/* Facilities Grid */}
      <div className="max-w-7xl mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {facilities.map((facility, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-6 hover:border-cyan-400/50 transition-all duration-500 hover:shadow-2xl  hover:-translate-y-2"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
              }}
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-cyan-400/0 to-cyan-400/0 rounded-2xl transition-all duration-500" />
              
              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400/20 to-cyan-500/10 rounded-xl flex items-center justify-center text-cyan-400 mb-4 group-hover:scale-110 transition-all duration-500 group-hover:shadow-lg group-hover:shadow-cyan-400/50">
                  {facility.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors duration-300">
                  {facility.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {facility.description}
                </p>
              </div>

              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-cyan-400/0 to-cyan-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-bl-full" />
            </div>
          ))}
        </div>
      </div>


      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default FacilitiesPage;