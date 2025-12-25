import { ReactNode } from "react";
import { AirVent, Clock, Lock, Shield, Users, Wifi } from 'lucide-react';

// ------------------ TYPES ------------------

export interface HighlightItem {
  icon: ReactNode;
  title: string;
  description: string;
}

export interface FacilityItem {
  icon: ReactNode;
  text: string;
}

export interface PlanItem {
  name: string;
  price: string;
  features: string[];
  popular?: boolean;
}

export interface TestimonialItem {
  name: string;
  designation: string;
  quote: string;
  rating: number;
  src: string;
}

export interface GalleryImage {
  title: string;
  image: string;
}

// ------------------ DATA ------------------

export const highlights: HighlightItem[] = [
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
    description: "Clean and hygienic facilities",
  },
  {
    icon: <AirVent className="w-8 h-8" />,
    title: "Fully Air-Conditioned",
    description: "Comfortable seating for long study sessions",
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

export const facilities: FacilityItem[] = [
  { icon: <AirVent className="w-6 h-6" />, text: "Air Conditioning" },
  { icon: <Wifi className="w-6 h-6" />, text: "Free WiFi" },
  { icon: <Lock className="w-6 h-6" />, text: "Washrooms" },
  { icon: <Users className="w-6 h-6" />, text: "Group Study Rooms" },
  { icon: <Clock className="w-6 h-6" />, text: "Flexible Timings" },
  { icon: <Shield className="w-6 h-6" />, text: "Locker Facility" },
];

export const plans: PlanItem[] = [
  {
    name: "Slot 1",
    price: "₹799",
    features: [
      "6 AM to 10 AM",
      "4 hours morning access",
      "WiFi included",
      "AC & comfortable seating",
      "Washroom access",
    ],
  },
  {
    name: "Slot 2",
    price: "₹1,499",
    features: [
      "10 AM to 6 PM",
      "8 hours day access",
      "WiFi included",
      "AC & comfortable seating",
      "Washroom access",
      "Locker facility",
    ],
    popular: true,
  },
  {
    name: "Slot 3",
    price: "₹999",
    features: [
      "6 PM to 12 AM",
      "6 hours evening access",
      "WiFi included",
      "AC & comfortable seating",
      "Washroom access",
    ],
  },
];

export const testimonials: TestimonialItem[] = [
  {
    name: "Priya Sharma",
    designation: "UPSC Aspirant",
    quote:
      "The perfect environment for focused study. The staff is supportive and facilities are top-notch!",
    rating: 5,
    src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
  },
  {
    name: "Rahul Verma",
    designation: "Engineering Student",
    quote:
      "Best library in the city! Clean, quiet, and well-maintained. Highly recommend for serious students.",
    rating: 5,
    src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
  },
  {
    name: "Anjali Singh",
    designation: "CA Student",
    quote:
      "I've been a member for 2 years. The community here is amazing and motivating!",
    rating: 5,
    src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f",
  },
];

export const galleryImages: GalleryImage[] = [
  { title: "Silent Study Area", image: "/Image1.png" },
  { title: "Premium Cabin Seats", image: "/Image2.jpg" },
  { title: "Group Study Zone",    image: "/Image3.jpg" },
  { title: "Reading Hall",        image: "/Image4.jpg" },
];
