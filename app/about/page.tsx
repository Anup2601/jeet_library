'use client';
import React, { useState } from 'react';
import { BookOpen, Users, Award, TrendingUp, Star, MapPin, Clock, Target,  } from 'lucide-react';

const AboutPage = () => {
  const [activeTab, setActiveTab] = useState('mission');

  const stats = [
    { icon: Users, label: 'Seats Available', value: '150+' },
    { icon: TrendingUp, label: 'Students per Month', value: '500+' },
    { icon: Award, label: 'Success Stories', value: '100+' },
    { icon: MapPin, label: 'Years of Excellence', value: '5+' },

  ];

  const successStories = [
    {
      name: 'Priya Sharma',
      achievement: 'UPSC Civil Services',
      quote: 'The peaceful environment and excellent resources helped me achieve my dream of becoming an IAS officer.',
      year: '2024'
    },
    {
      name: 'Rahul Verma',
      achievement: 'IIT JEE Advanced',
      quote: 'The study atmosphere and supportive staff made all the difference in my preparation journey.',
      year: '2024'
    },
    {
      name: 'Anjali Patel',
      achievement: 'CA Final',
      quote: 'This library became my second home during preparation. The resources and environment are unmatched.',
      year: '2023'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white mt-12">
      {/* Hero Section */}
      <div className="relative bg-black py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-white bg-clip-text text-transparent">
            About Our Library
          </h1>
          <p className="text-xl text-white max-w-3xl mx-auto">
            A Sanctuary of Silence, Study, and Self-Transformation
          </p>
        </div>
      </div>

      {/* Mission & Vision Tabs */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="flex gap-4 mb-8 border-b border-cyan-400/20">
          <button
            onClick={() => setActiveTab('mission')}
            className={`px-6 py-3 font-semibold transition-all ${
              activeTab === 'mission'
                ? 'text-cyan-400 border-b-2 border-cyan-400'
                : 'text-gray-400 hover:text-cyan-300'
            }`}
          >
            Our Mission
          </button>
          <button
            onClick={() => setActiveTab('vision')}
            className={`px-6 py-3 font-semibold transition-all ${
              activeTab === 'vision'
                ? 'text-cyan-400 border-b-2 border-cyan-400'
                : 'text-gray-400 hover:text-cyan-300'
            }`}
          >
            Our Vision
          </button>
          <button
            onClick={() => setActiveTab('story')}
            className={`px-6 py-3 font-semibold transition-all ${
              activeTab === 'story'
                ? 'text-cyan-400 border-b-2 border-cyan-400'
                : 'text-gray-400 hover:text-cyan-300'
            }`}
          >
            Our Story
          </button>
        </div>

        <div className="bg-gray-900 rounded-lg p-8 border border-cyan-400/20">
          {activeTab === 'mission' && (
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <Target className="w-8 h-8 text-cyan-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    The mission of Jeet Library is simple, sincere, and silent:
                    <li>To provide a peaceful, clean, and disciplined study environment</li>
                    <li>To protect silence as a shared spiritual value</li>
                    <li>To encourage deep reading, regular study, and self-control</li>
                    <li>To support students and learners in building inner stability along with academic excellence</li>
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'vision' && (
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <Star className="w-8 h-8 text-cyan-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    The vision of Jeet Library is to create a sacred learning space where knowledge and inner peace grow together.
                    It envisions learners who are:
                    <li>Calm yet ambitious</li>
                    <li>Disciplined yet creative</li>
                    <li>Focused yet thoughtful</li>
                    Jeet Library seeks to nurture not just successful professionals, but aware, responsible, and grounded individuals who carry clarity into their careers and consciousness into their lives.
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'story' && (
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <BookOpen className="w-8 h-8 text-cyan-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">Our Story</h3>
                  <p className="text-gray-300 text-lg leading-relaxed mb-4">
                    Jeet Library in Jagat Farm in Greater Noida is not merely a physical space created for reading and examination preparation. It is a conscious environment, thoughtfully designed for those who understand that true education requires more than books; it requires silence, discipline, patience, and inner balance. In an age where distractions dominate attention and speed replaces depth, Jeet Library stands quietly as a refuge. It offers learners a space where the mind can slow down, settle, and rise with clarity. Here, knowledge is not consumed hurriedly; it is absorbed with awareness.
                  </p>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    Over the years, we&apos;ve grown from that modest beginning to become a premier learning 
                    center with over 250 seats, a vast collection of books and digital resources, and a 
                    community of thousands of successful students. Our journey has been marked by continuous 
                    innovation, expansion, and an unwavering commitment to student success.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-black py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Our Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="bg-black/50 backdrop-blur rounded-lg p-6 border border-cyan-400/30 hover:border-cyan-400 transition-all hover:scale-105"
              >
                <stat.icon className="w-12 h-12 text-cyan-400 mb-4" />
                <div className="text-3xl font-bold text-cyan-400 mb-2">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Unique Selling Points */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">Why Choose Us</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-900 rounded-lg p-6 border border-cyan-400/20 hover:border-cyan-400/50 transition-all">
            <Clock className="w-10 h-10 text-cyan-400 mb-4" />
            <h3 className="text-xl font-bold text-cyan-400 mb-2">24/7 Access</h3>
            <p className="text-gray-300">
              Study at your convenience with round-the-clock access to our facilities
            </p>
          </div>
          <div className="bg-gray-900 rounded-lg p-6 border border-cyan-400/20 hover:border-cyan-400/50 transition-all">
            <MapPin className="w-10 h-10 text-cyan-400 mb-4" />
            <h3 className="text-xl font-bold text-cyan-400 mb-2">Prime Location</h3>
            <p className="text-gray-300">
              Easily accessible location with excellent connectivity and parking facilities
            </p>
          </div>
          <div className="bg-gray-900 rounded-lg p-6 border border-cyan-400/20 hover:border-cyan-400/50 transition-all">
            <Award className="w-10 h-10 text-cyan-400 mb-4" />
            <h3 className="text-xl font-bold text-cyan-400 mb-2">Premium Resources</h3>
            <p className="text-gray-300">
              Access to extensive book collection, digital resources, and study materials
            </p>
          </div>
          <div className="bg-gray-900 rounded-lg p-6 border border-cyan-400/20 hover:border-cyan-400/50 transition-all">
            <Users className="w-10 h-10 text-cyan-400 mb-4" />
            <h3 className="text-xl font-bold text-cyan-400 mb-2">Community Support</h3>
            <p className="text-gray-300">
              Join a community of motivated learners and benefit from peer support
            </p>
          </div>
        </div>
      </div>

      
      {/* Success Stories */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">Success Stories</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {successStories.map((story, idx) => (
            <div
              key={idx}
              className="bg-gray-900 rounded-lg p-6 border border-cyan-400/20 hover:border-cyan-400 transition-all hover:scale-105"
            >
              <Star className="w-8 h-8 text-cyan-400 mb-4" />
              <h3 className="text-xl font-bold text-cyan-400 mb-2">{story.name}</h3>
              <p className="text-cyan-300 text-sm mb-3">{story.achievement} - {story.year}</p>
              <p className="text-gray-300 italic">{story.quote}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;