"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    numberOfCopies: "",
    donationAmount: "",
    deliveryAddress: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    alert(
      "Thank you for your order! Please complete payment to PayMe 62097957 to finalize your order."
    );
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-50">
      {/* Page Header Section */}
      <section className="bg-gradient-to-b from-blue-600 to-blue-700 text-white py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
              Wizard's Wrath
            </h1>
            <p className="text-xl md:text-2xl font-semibold mb-4 text-blue-100">
              by Austin Ho
            </p>
            <p className="text-base md:text-lg lg:text-xl text-blue-50 max-w-2xl mx-auto leading-relaxed">
              A magical adventure book created by a 10-year-old author from Hong
              Kong. Every purchase supports Impact HK, helping the homeless and
              those at risk of homelessness in our community.
            </p>
          </div>
        </div>
      </section>

      {/* Welcome Banner Section */}
      <section className="bg-white py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto flex justify-center">
            <Image
              src="/welcome.png"
              alt="Welcome to Austin Ho's charity Book Shop!"
              width={600}
              height={200}
              className="w-full max-w-2xl h-auto object-contain"
              priority
            />
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-8 md:py-16">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 md:gap-12 max-w-6xl mx-auto">
          <div className="shrink-0 order-2 lg:order-1">
            <div className="relative">
              <Image
                src="/austin.png"
                alt="Austin Ho"
                width={350}
                height={450}
                className="rounded-xl shadow-xl border-4 border-white"
                priority
              />
            </div>
          </div>
          <div className="shrink-0 order-3 lg:order-3">
            <div className="relative">
              <Image
                src="/bookcover.png"
                alt="Wizard's Wrath Book Cover"
                width={350}
                height={450}
                className="rounded-xl shadow-xl border-4 border-white"
                priority
              />
            </div>
          </div>
          <div className="text-center lg:text-left order-1 lg:order-2 lg:flex-1 lg:max-w-md">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-600 mb-4">
              Wizard's Wrath
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-3">
              by Austin Ho
            </p>
            <div className="inline-block bg-blue-100 border-l-4 border-blue-600 p-4 rounded-r-lg mb-4">
              <p className="text-base md:text-lg text-gray-700">
                <span className="font-bold text-blue-700">
                  100% of proceeds
                </span>{" "}
                go to{" "}
                <span className="font-semibold text-blue-600">Impact HK</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12 border border-gray-100">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-6 md:mb-10">
            About Austin
          </h2>
          <div className="text-gray-700 space-y-6 text-base md:text-lg leading-relaxed">
            <p>
              I am a 10 year old student from Hong Kong who loves to draw, build
              and make things. With the recent tragic fire in Tai Po, I wanted
              to do something good, however small my contribution might be. So{" "}
              <strong className="text-blue-600">
                100% of the sales from this book will be made to Impact HK
              </strong>
              , a charity actively supporting the homeless and those at risk of
              homelessness in my city.
            </p>
            <p>
              <strong className="text-blue-700">Wizard's Wrath</strong>, my
              third book, is where magic and adventure come together. Every page
              has been lovingly drawn, coloured, and illustrated by me, centred
              around Miles, a spirited crocogator who dreams of heroism. When
              the mighty Lizard Wizard is captured by the wicked ShadowClaw,
              Miles knows he must act! Joined by his daring friends, Spring the
              kangaroo and the hilariously brave bunny, Denis, Miles sets off on
              an adventurous quest. They face dangerous portals, spooky
              skeletons, and encounter a mysterious realm unlike any other.
            </p>
            <p className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg italic">
              I hope this comic will invite young readers to discover the true
              strength that lies in friendship, courage, and a dash of magic.
              Please support my project and be a hero today!
            </p>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              Meet Austin
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Watch Austin introduce himself and share his passion for creating
              stories that make a difference. Learn more about the inspiration
              behind Wizard's Wrath and his mission to help those in need.
            </p>
          </div>
          <div className="aspect-video rounded-xl overflow-hidden shadow-2xl border-4 border-white">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/v1d6m_EJ5Vg"
              title="Austin's Introduction Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Order Form Section */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-600 mb-4">
            Order via PayMe
          </h2>
          <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-r-lg mb-8">
            <p className="text-center text-gray-700">
              Kindly settle payment to{" "}
              <span className="font-bold text-lg text-blue-600">62097957</span>{" "}
              to complete your order.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Fields */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Name <span className="text-red-500">(required)</span>
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-gray-900 placeholder:text-gray-400"
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-gray-900 placeholder:text-gray-400"
                />
              </div>
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Phone Number
              </label>
              <p className="text-sm text-gray-500 mb-2">WhatsApp Preferred</p>
              <input
                type="tel"
                name="phoneNumber"
                placeholder="Phone Number"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-gray-900 placeholder:text-gray-400"
              />
            </div>

            {/* Number of Copies */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Number of Copies
              </label>
              <select
                name="numberOfCopies"
                value={formData.numberOfCopies}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none appearance-none bg-white transition-all cursor-pointer text-gray-900"
              >
                <option value="">Select an option</option>
                <option value="1">1 copy</option>
                <option value="2">2 copies</option>
                <option value="3">3 copies</option>
                <option value="4">4 copies</option>
                <option value="5">5 copies</option>
                <option value="6+">6+ copies</option>
              </select>
            </div>

            {/* Donation Amount */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Other donation amount
              </label>
              <p className="text-sm text-gray-500 mb-2">
                You are welcome to donate a different amount to support this
                meaningful cause
              </p>
              <div className="relative">
                <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-600 font-semibold text-lg">
                  $
                </span>
                <input
                  type="number"
                  name="donationAmount"
                  placeholder="0.00"
                  value={formData.donationAmount}
                  onChange={handleChange}
                  min="0"
                  step="0.01"
                  className="w-full pl-10 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-gray-900 placeholder:text-gray-400"
                />
              </div>
            </div>

            {/* Delivery Address */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Delivery Address
              </label>
              <p className="text-sm text-gray-500 mb-2">
                Leave blank if you plan to pick up from Tin Hau
              </p>
              <textarea
                name="deliveryAddress"
                placeholder="Enter your delivery address"
                value={formData.deliveryAddress}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none resize-none transition-all text-gray-900 placeholder:text-gray-400"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-6 rounded-lg text-lg uppercase tracking-wide transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Submit
            </button>
          </form>
        </div>
      </section>

      {/* Charity Info Footer */}
      <footer className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-10 md:py-12 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-xl md:text-2xl font-bold mb-3">
            Supporting Impact HK
          </p>
          <p className="text-sm md:text-base opacity-95 max-w-2xl mx-auto">
            All proceeds from this book go directly to Impact HK, supporting the
            homeless and those at risk of homelessness in Hong Kong.
          </p>
          <div className="mt-6 pt-6 border-t border-blue-500/30">
            <p className="text-sm opacity-90">
              Website created with ❤️ by{" "}
              <a
                href="https://sohanthink.com"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-blue-200 transition-colors"
              >
                sohanthink.com
              </a>{" "}
              | 100% for Charity
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
