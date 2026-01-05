"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Send,
  // Facebook,
  // Instagram,
  // Twitter,
  // Linkedin,
  // MessageCircle,
  Clock,
  // Navigation,
} from "lucide-react";

interface FormDataType {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface ContactInfoType {
  icon: React.ReactNode;
  title: string;
  details: string[];
  action: string | null;
}

// interface SocialLinkType {
//   icon: React.ReactNode;
//   name: string;
//   url: string;
//   color: string;
// }

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<FormDataType>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [showAlert, setShowAlert] = useState(false);
  const [errors, setErrors] = useState<Partial<FormDataType>>({});

  // FIXED HANDLE SUBMIT ----------------------
  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!validateForm()) return; // ❗ Validation check added

    setShowAlert(true);

    setTimeout(() => setShowAlert(false), 3000);

    setFormData({ name: "", email: "", phone: "", message: "" });
    setErrors({});
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // VALIDATION FUNCTION ------------------------
  const validateForm = () => {
    const newErrors: Partial<FormDataType> = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";

    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Enter a valid email address";

    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    else if (!/^\d{10}$/.test(formData.phone))
      newErrors.phone = "Phone must be 10 digits";

    if (!formData.message.trim()) newErrors.message = "Message cannot be empty";
    else if (formData.message.length < 10)
      newErrors.message = "Message must be at least 10 characters";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const contactInfo: ContactInfoType[] = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone Numbers",
      details: ["+91 98765 43210", "+91 87654 32109"],
      action: "tel:+919876543210",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Address",
      details: ["info@jeetlibrary.com", "support@jeetlibrary.com"],
      action: "mailto:info@jeetlibrary.com",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      details: [
        "123 Education Street, Library Road",
        "Dadri, Uttar Pradesh - 201301",
      ],
      action: "#map",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Working Hours",
      details: ["Mon–Sat: 6:00 AM - 11:00 PM", "Sunday: 7:00 AM - 10:00 PM"],
      action: null,
    },
  ];

  // const socialLinks: SocialLinkType[] = [
  //   {
  //     icon: <Facebook className="w-5 h-5" />,
  //     name: "Facebook",
  //     url: "#",
  //     color: "hover:bg-blue-600",
  //   },
  //   {
  //     icon: <Instagram className="w-5 h-5" />,
  //     name: "Instagram",
  //     url: "#",
  //     color: "hover:bg-pink-600",
  //   },
  //   {
  //     icon: <Twitter className="w-5 h-5" />,
  //     name: "Twitter",
  //     url: "#",
  //     color: "hover:bg-sky-500",
  //   },
  //   {
  //     icon: <Linkedin className="w-5 h-5" />,
  //     name: "LinkedIn",
  //     url: "#",
  //     color: "hover:bg-blue-700",
  //   },
  // ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="pt-24 pb-12 px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-white to-white bg-clip-text text-transparent">
          Get In Touch
        </h1>
        <p className="text-lg text-gray-400 max-w-3xl mx-auto">
        Have questions? We&apos;d love to hear from you.
         We&apos;ll respond as soon as possible.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-20">
        {/* Contact Info Cards */}
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className="group bg-gray-900/80 border border-gray-800 rounded-2xl p-6 hover:border-cyan-400/50 transition-all duration-500 hover:-translate-y-2"
            >
              <div className="w-14 h-14 bg-cyan-500/10 rounded-xl flex items-center justify-center text-cyan-400 mb-4">
                {info.icon}
              </div>

              <h3 className="text-lg font-bold mb-2">{info.title}</h3>

              {info.details.map((d, i) => (
                <p key={i} className="text-gray-400 text-sm">
                  {d}
                </p>
              ))}
            </div>
          ))}
        </div> */}

        {/* Form + Map Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-gray-900/80 border border-gray-800 rounded-2xl p-8">
            <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>

            {showAlert && (
              <div className="mb-4 p-3 rounded-xl bg-cyan-400/20 border border-cyan-400 text-cyan-300">
                Message sent! We&apos;ll get back to you soon.
              </div>
            )}

            <div className="space-y-5">
              {/* NAME */}
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className={`w-full bg-black/40 border px-4 py-3 rounded-xl ${
                  errors.name ? "border-red-500" : "border-gray-700"
                }`}
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name}</p>
              )}

              {/* EMAIL */}
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                className={`w-full bg-black/40 border px-4 py-3 rounded-xl ${
                  errors.email ? "border-red-500" : "border-gray-700"
                }`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}

              {/* PHONE */}
              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className={`w-full bg-black/40 border px-4 py-3 rounded-xl ${
                  errors.phone ? "border-red-500" : "border-gray-700"
                }`}
              />
              {errors.phone && (
                <p className="text-red-500 text-sm">{errors.phone}</p>
              )}

              {/* MESSAGE */}
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                placeholder="Your Message..."
                className={`w-full bg-black/40 border px-4 py-3 rounded-xl ${
                  errors.message ? "border-red-500" : "border-gray-700"
                }`}
              />
              {errors.message && (
                <p className="text-red-500 text-sm">{errors.message}</p>
              )}

              {/* BUTTON */}
              <button
                onClick={handleSubmit}
                className="w-full bg-cyan-400 text-black py-3 rounded-xl font-semibold hover:bg-cyan-300 transition-all flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" /> Send Message
              </button>
            </div>
          </div>

          {/* Map + Buttons */}
          <div className="space-y-6">
            {/* Google Map */}
            <div className="bg-gray-900/80 border border-gray-800 rounded-2xl overflow-hidden h-120">
              <iframe
                title="Map"
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3519.436555!2d77.5002712!3d28.4815396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ceb6d11793013%3A0xab35abcd434a2fda!2sJEET%20Library!5e0!3m2!1sen!2sin!4v1733224700000!5m2!1sen!2sin" 
                width="100%"
                height="100%"
                className=""
              />
            </div>

            {/* Directions Button */}
            <a
              href="https://www.google.com/maps?q=28.4815556,77.5002778"
              target="_blank"
              className="block bg-cyan-400 text-black rounded-2xl p-6 hover:scale-105 transition"
            >
              <div className="flex items-center gap-4">
                <MapPin className="w-10 h-10 text-black" />
                <div>
                  <h3 className="text-xl font-bold">Get Directions</h3>
                  <p className="text-black text-sm">Navigate Easily</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
