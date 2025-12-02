"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  BookOpen,
  Wifi,
  Coffee,
  Clock,
  Users,
  Shield,
  Phone,
  MapPin,
  Mail,
  ChevronLeft,
  ChevronRight,
  Lock,
} from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import { BackgroundLines } from "@/components/ui/background-lines";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";

export default function HomePage() {


  const highlights = [
    {
      icon: <Clock className="w-8 h-8" />,
      title: "24/7 Access",
      description: "Study anytime with round-the-clock availability",
    },
    {
      icon: <Wifi className="w-8 h-8" />,
      title: "High-Speed WiFi",
      description: "Lightning-fast internet for seamless learning",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Separate Washrooms for Boys and Girls",
      description: "Stay energized with our in-house cafe",
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Vast Collection",
      description: "Access to thousands of books and resources",
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Quiet Environment",
      description: "Distraction-free study spaces",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Secure & Safe",
      description: "CCTV surveillance and locker facilities",
    },
  ];

  const facilities = [
    { icon: <BookOpen className="w-6 h-6" />, text: "Digital Library" },
    { icon: <Wifi className="w-6 h-6" />, text: "Free WiFi" },
    { icon: <Lock className="w-6 h-6" />, text: "Washrooms" },
    { icon: <Users className="w-6 h-6" />, text: "Group Study Rooms" },
    { icon: <Clock className="w-6 h-6" />, text: "Flexible Timings" },
    { icon: <Shield className="w-6 h-6" />, title: "Locker Facility" },
  ];

  const plans = [
    {
      name: "Daily Pass",
      price: "₹100",
      features: ["8 hours access", "WiFi included", "Basic seating"],
    },
    {
      name: "Monthly",
      price: "₹1,199",
      features: [
        "Unlimited access",
        "Premium seating",
        "Locker facility",
        "Washrooms",
      ],
      popular: true,
    },
    {
      name: "Quarterly",
      price: "₹2,499",
      features: [
        "All monthly benefits",
        "Priority booking",
        "Study materials",
        "Career counseling",
      ],
    },
    {
      name: "Yearly",
      price: "₹8,999",
      features: [
        "All quarterly benefits",
        "Private cabin option",
        "24/7 access",
        "Guest passes",
      ],
    },
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      designation: "UPSC Aspirant",
      quote: "The perfect environment for focused study. The staff is supportive and facilities are top-notch!",
      rating: 5,
       src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Rahul Verma",
      designation: "Engineering Student",
      quote: "Best library in the city! Clean, quiet, and well-maintained. Highly recommend for serious students.",
      rating: 5,
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Anjali Singh",
      designation: "CA Student",
      quote: "I've been a member for 2 years. The community here is amazing and motivating!",
      rating: 5,
      src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  const galleryImages = [
    {
      title: "Silent Study Area",
      image:
        "https://images.unsplash.com/photo-1522881193457-37ae97c905bf?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Premium Cabin Seats",
      image:
        "https://images.unsplash.com/photo-1581349189015-8b37d0868f55?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Group Study Zone",
      image:
        "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Reading Hall",
      image:
        "https://images.unsplash.com/photo-1529480782116-57002f06f861?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  return (
    <main className="bg-black text-white min-h-screen w-full">
      {/* ---------------- HERO SECTION ---------------- */}
      <BackgroundLines className="flex items-center justify-center w-full flex-col px-4 bg-black min-h-screen">
        <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-600 to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
          Jeet Library, <br />& <br /> Jeet PG.
        </h2>
        <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-400  text-center">
          Experience a peaceful and distraction-free study environment designed
          to help you stay focused and productive every day.
        </p>
        <div className="flex gap-3 mt-4 z-50">
          <Button className="bg-cyan-400 hover:scale-105 transition duration-300 ease-in-out px-6 py-3 rounded-md font-semibold">
            Book Your Seat
          </Button>
          <Button
            variant="outline"
            className="bg-black text-cyan-400 hover:scale-105 transition duration-300 ease-in-out"
          >
            Visit Us
          </Button>
        </div>
      </BackgroundLines>

      {/* ---------------- WHY CHOOSE US ---------------- */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-cyan-600 bg-clip-text text-transparent">
              StudyHub
            </span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((item, idx) => (
              <Card
                key={idx}
                className="bg-white/5 border-white/10 hover:bg-white/10 transition group cursor-pointer"
              >
                <CardContent className="p-6 text-center">
                  <div className="inline-flex p-4 bg-gradient-to-br from-cyan-500/20 to-cyan-500/20 rounded-full mb-4 group-hover:scale-110 transition text-cyan-400">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section id="facilities" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            World-Class Facilities
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {facilities.map((facility, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center gap-3 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition border border-white/10"
              >
                <div className="text-cyan-400">{facility.icon}</div>
                <span className="text-sm text-center">
                  {facility.text || facility.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section
        id="pricing"
        className="py-20 px-4 "
      >
        <div className="max-w-7xl mx-auto ">
          <h2 className="text-4xl font-bold text-center mb-4">
            Plans & Pricing
          </h2>
          <p className="text-gray-100 text-center mb-16">
            Choose the plan that fits your goals
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            {plans.map((plan, idx) => (
              <Card
                key={idx}
                className={`${
                  plan.popular
                    ? "bg-gradient-to-b from-cyan-500/20 to-cyan-500/20 border-cyan-500/50 scale-105"
                    : "bg-white/5 border-white/10"
                } hover:scale-105 transition relative`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-cyan-500 to-cyan-600 px-4 py-1 rounded-full text-sm font-semibold ">
                    Most Popular
                  </div>
                )}
                <CardContent className="p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-gray-400">
                      /
                      {plan.name === "Daily Pass"
                        ? "day"
                        : plan.name.toLowerCase()}
                    </span>
                  </div>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 flex-shrink-0"></div>
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full ${
                      plan.popular
                        ? "bg-cyan-500 hover:bg-cyan-600 cursor-pointer z-10 "
                        : "bg-white/10 hover:bg-white/20 cursor-pointer z-10 "
                    }`}
                  >
                    Select Plan
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Seat Availability */}
      {/* <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-r from-cyan-500/10 to-cyan-500/10 border-cyan-500/30">
            <CardContent className="p-8">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-2">
                    Live Seat Availability
                  </h3>
                  <p className="text-gray-400">
                    Real-time updates on available seats
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-cyan-400 mb-2">
                    47
                  </div>
                  <div className="text-sm text-gray-400">out of 100 seats</div>
                </div>
              </div>
              <div className="mt-6 bg-white/5 rounded-full h-3 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-cyan-500 to-cyan-600 h-full"
                  style={{ width: "47%" }}
                ></div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section> */}

      {/* Testimonials */}
      <AnimatedTestimonials testimonials={testimonials} />

      {/* Gallery Preview */}
          <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">
          Explore Our Spaces
        </h2>

        <div className="grid md:grid-cols-4 gap-6">
          {galleryImages.map((img, idx) => (
            <div key={idx} className="relative h-64 w-full rounded-xl overflow-hidden">
              <DirectionAwareHover imageUrl={img.image}>
                <p className="font-bold text-lg">{img.title}</p>
                <p className="text-sm opacity-70">Click to explore more</p>
              </DirectionAwareHover>
            </div>
          ))}
        </div>
      </div>
    </section>


      {/* CTA Section */}
      <section className="py-20 px-4 ">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of successful students who chose StudyHub
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 px-8 py-6 text-lg">
              <BookOpen className="w-5 h-5 mr-2" />
              Book Your Seat
            </Button>
            <Button
              variant="outline"
              className="border-white/20 hover:bg-white/10 px-8 py-6 text-lg"
            >
              <MapPin className="w-5 h-5 mr-2" />
              Visit Us
            </Button>
            <Button
              variant="outline"
              className="border-white/20 hover:bg-white/10 px-8 py-6 text-lg"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        id="contact"
        className="bg-black/50 border-t border-white/10 py-12 px-4"
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-cyan-600 bg-clip-text text-transparent">
              Jeet Library
            </h3>
            <p className="text-gray-400 text-sm">
              Your partner in academic excellence
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a
                  href="#facilities"
                  className="hover:text-cyan-400 transition"
                >
                  Facilities
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-cyan-400 transition">
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="hover:text-cyan-400 transition"
                >
                  Testimonials
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" /> +91 98765 43210
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" /> info@studyhub.com
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4" /> Delhi, India
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Hours</h4>
            <p className="text-sm text-gray-400">Open 24/7</p>
            <p className="text-sm text-gray-400 mt-2">365 days a year</p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-white/10 text-center text-sm text-gray-400">
          © 2025 Jeet Library. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
