"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Wifi, Clock, Users, Shield, Lock, AirVent } from "lucide-react";
import { BackgroundLines } from "@/components/ui/background-lines";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";
import Footer from "@/components/Footer";
import { facilities, galleryImages, highlights, plans, testimonials } from "@/config/Data";

export default function HomePage() {
  

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
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <Button className="bg-cyan-400 text-black hover:text-white hover:scale-105 transition duration-300 ease-in-out px-8 py-6 text-lg z-10 cursor-pointer">
            Book Your Seat
          </Button>
          <Button
            variant="outline"
            className="bg-black px-8 py-6 text-lg hover:scale-105 transition duration-300 ease-in-out z-10 cursor-pointer"
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
              Jeet Library
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
                  <h3 className="text-xl font-semibold mb-2 text-white">
                    {item.title}
                  </h3>
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
                  {facility.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 px-4 ">
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
              <div
                key={idx}
                className="relative h-64 w-full rounded-xl overflow-hidden"
              >
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
            <Button className="bg-cyan-400 text-black hover:text-white hover:scale-105 transition duration-300 ease-in-out px-8 py-6 text-lg cursor-pointer">
              Book Your Seat
            </Button>
            <Button
              variant="outline"
              className="bg-black px-8 py-6 text-lg hover:scale-105 transition duration-300 ease-in-out cursor-pointer"
            >
              Visit Us
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
