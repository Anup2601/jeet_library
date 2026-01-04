"use client";

import React from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BackgroundLines } from "@/components/ui/background-lines";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";
// import Footer from "@/components/Footer";
import { galleryImages, highlights, plans, testimonials } from "@/config/Data";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function HomePage() {
  const router = useRouter();

  return (
    <main className="bg-black text-white min-h-screen w-full p-6">
      {/* ---------------- HERO SECTION ---------------- */}
      {/* ---------------- HERO SECTION ---------------- */}
      <section className="relative w-full min-h-screen bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center min-h-screen py-12">
            {/* Left Content */}
            <div className="space-y-8 text-left">
              <div className="inline-block">
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  ✨ Premium Study Space
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                Welcome to
                <span className="block bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
                  Jeet Library
                </span>
              </h1>

              <p className="text-xl text-gray-300 max-w-xl leading-relaxed">
                Experience a peaceful and distraction-free study environment
                designed to help you stay focused and productive every day.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <Button
                  className="bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 text-white px-8 py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={() =>
                    router.push(
                      "https://docs.google.com/forms/d/1DuUIKZsHc3BLUbP31a7Wp5xz9ZKKtGKq1T-0LWCwmpA/viewform?edit_requested=true"
                    )
                  }
                >
                  Book Your Seat →
                </Button>
                <Button
                  variant="outline"
                  className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-6 text-lg font-semibold rounded-xl transition-all duration-300"
                  onClick={() =>
                    router.push(
                      "https://www.google.com/maps?q=28.4815556,77.5002778"
                    )
                  }
                >
                  📍 Visit Us
                </Button>
              </div>

              {/* Stats */}
              <div className="flex flex-wrap gap-8 pt-8 border-t border-gray-800">
                <div>
                  <p className="text-3xl font-bold text-white">100+</p>
                  <p className="text-sm text-gray-400">Happy Students</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-white">24/7</p>
                  <p className="text-sm text-gray-400">Open Access</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-white">AC</p>
                  <p className="text-sm text-gray-400">Climate Control</p>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative lg:block hidden">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/heroimage.png"
                  alt="Peaceful study environment at Jeet Library with comfortable seating"
                  width={1920}
                  height={600}
                  priority
                  className="w-full h-[600px] object-cover"
                />
                {/* Floating Card */}
                {/* <div className="absolute bottom-8 left-8 bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl max-w-xs">
                  <div className="flex items-center gap-4">
                    <div className="bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full p-3">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">Quiet Zone</p>
                      <p className="text-sm text-gray-600">
                        Perfect for deep focus
                      </p>
                    </div>
                  </div>
                </div> */}
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full blur-3xl opacity-30"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full blur-3xl opacity-30"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities */}
      {/* <section id="facilities" className="py-5 md:py-20 px-4">
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
      </section> */}

      {/* Pricing */}
      <section id="pricing" className="py-5 md:py-20 px-4 ">
        <div className="max-w-7xl mx-auto ">
          <h2 className="text-4xl font-bold text-center mb-4">
            Plans & Pricing
          </h2>
          <p className="text-gray-100 text-center mb-16">
            Choose the time slot that fits your schedule
          </p>
          <div className="grid md:grid-cols-3 gap-6">
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
                    <span className="text-gray-400">/month</span>
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
                    onClick={() =>
                      router.push(
                        "https://docs.google.com/forms/d/1DuUIKZsHc3BLUbP31a7Wp5xz9ZKKtGKq1T-0LWCwmpA/viewform?edit_requested=true"
                      )
                    }
                  >
                    Select Plan
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- WHY CHOOSE US ---------------- */}
      <section className="py-5 md:py-20 px-4">
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

      {/* Testimonials */}
      <AnimatedTestimonials testimonials={testimonials} />

      {/* Gallery Preview */}
      <section className="py-5 md:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Explore Our Spaces
          </h2>

          <div className="grid md:grid-cols-4 gap-6 justify-center">
            {galleryImages.map((img, idx) => (
              <div
                key={idx}
                className="relative h-64 w-full rounded-xl overflow-hidden "
              >
                <DirectionAwareHover imageUrl={img.image}>
                  <p className="font-bold text-lg text-black">{img.title}</p>
                  <p className="text-sm opacity-70 text-black">
                    Click to explore more
                  </p>
                </DirectionAwareHover>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-5 md:py-20 px-4 ">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 hover:text-cyan-400">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of successful students who chose StudyHub
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              className="bg-cyan-400 text-black hover:text-white hover:scale-105 transition duration-300 ease-in-out px-8 py-6 text-lg cursor-pointer"
              onClick={() =>
                router.push(
                  "https://docs.google.com/forms/d/1DuUIKZsHc3BLUbP31a7Wp5xz9ZKKtGKq1T-0LWCwmpA/viewform?edit_requested=true"
                )
              }
            >
              Book Your Seat
            </Button>
            <Button
              variant="outline"
              className="bg-black px-8 py-6 text-lg hover:scale-105 transition duration-300 ease-in-out cursor-pointer"
              onClick={() =>
                router.push(
                  "https://www.google.com/maps?q=28.4815556,77.5002778"
                )
              }
            >
              Visit Us
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
