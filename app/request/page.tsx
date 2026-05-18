"use client";

import { useState } from "react";
import Link from "next/link";          // ✅ add this import
import {
  FaArrowLeft,
  FaMapMarkerAlt,
  FaCheck,
  FaTools,
} from "react-icons/fa";

export default function Home() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    location: "",
    name: "",
    email: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/jobs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (data.success) {
        alert("🎉 Job Posted Successfully!");
        setFormData({
          title: "",
          description: "",
          category: "",
          location: "",
          name: "",
          email: "",
        });
      } else {
        alert("Something went wrong");
      }
    } catch (error) {
      console.log(error);
      alert("Server Error");
    }
  };

  const handleCancel = () => {
    setFormData({
      title: "",
      description: "",
      category: "",
      location: "",
      name: "",
      email: "",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-100 via-sky-50 to-blue-200">
      {/* Navbar */}
      <nav className="bg-gradient-to-r from-sky-600 via-blue-700 to-cyan-600 shadow-xl">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="bg-white text-blue-700 p-3 rounded-2xl text-xl shadow-lg">
              <FaTools />
            </div>
            <div>
              <h1 className="text-2xl font-extrabold text-white">Service Hub</h1>
              <p className="text-cyan-100 text-xs">Find trusted local services</p>
            </div>
          </div>

          {/* Menu */}
          <div className="hidden md:flex items-center gap-4">
            <Link href="/" className="text-white font-medium hover:text-cyan-200 transition">
              Dashboard
            </Link>



            
            <Link href="/request" className="text-white font-medium hover:text-cyan-200 transition">
              Requests
            </Link>
            <Link href="/details" className="text-white font-medium hover:text-cyan-200 transition">
              Details
            </Link>
            <Link href="/request">
              <button className="bg-white text-blue-700 px-4 py-2 rounded-xl font-bold hover:bg-cyan-100 transition shadow-md">
                + Post Job
              </button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Main */}
      <div className="max-w-2xl mx-auto px-4 py-6">
        {/* Back Button as Link */}
        <Link
          href="/"
          className="flex items-center gap-2 text-blue-800 font-semibold hover:text-cyan-600 transition mb-5"
        >
          <FaArrowLeft />
          Back to Dashboard
        </Link>

        {/* Form Card (unchanged) */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200">
          <div className="bg-gradient-to-r from-sky-500 via-blue-600 to-cyan-500 p-6 text-white">
            <h1 className="text-3xl font-extrabold">Post a Service Request</h1>
            <p className="mt-2 text-blue-100 text-sm">
              Describe your issue and connect with professionals instantly.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="p-6">
            <h2 className="text-lg font-bold text-gray-800 uppercase mb-6 border-l-4 border-blue-500 pl-3">
              Job Details
            </h2>
            {/* Title */}
            <div className="mb-5">
              <label className="block text-gray-800 font-bold mb-2">
                Job Title <span className="text-red-500 ml-1">*</span>
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Need a plumber for leaking tap"
                required
                className="w-full px-4 py-3 rounded-2xl border-2 border-gray-200 bg-gray-50 text-black placeholder:text-black focus:outline-none focus:ring-4 focus:ring-sky-200"
              />
            </div>
            {/* Description */}
            <div className="mb-5">
              <label className="block text-gray-800 font-bold mb-2">
                Description <span className="text-red-500 ml-1">*</span>
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Describe the issue in detail..."
                required
                rows={4}
                className="w-full px-4 py-3 rounded-2xl border-2 border-gray-200 bg-gray-50 text-black placeholder:text-black focus:outline-none focus:ring-4 focus:ring-sky-200 resize-none"
              />
            </div>
            {/* Category + Location */}
            <div className="grid md:grid-cols-2 gap-5 mb-6">
              <div>
                <label className="block text-gray-800 font-bold mb-2">Category</label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-2xl border-2 border-gray-200 bg-gray-50 text-black focus:outline-none focus:ring-4 focus:ring-cyan-200"
                >
                  <option value="">Select category</option>
                  <option value="Plumbing">Plumbing</option>
                  <option value="Electrical">Electrical</option>
                  <option value="Painting">Painting</option>
                  <option value="Joinery">Joinery</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-800 font-bold mb-2">
                  Location <span className="text-red-500 ml-1">*</span>
                </label>
                <div className="flex items-center bg-gray-50 border-2 border-gray-200 rounded-2xl px-3">
                  <FaMapMarkerAlt className="text-sky-500 text-lg" />
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="e.g. Colombo"
                    required
                    className="w-full px-3 py-3 bg-transparent outline-none text-black placeholder:text-black"
                  />
                </div>
              </div>
            </div>

            <div className="border-t border-gray-200 my-8"></div>

            <h2 className="text-lg font-bold text-gray-800 uppercase mb-6 border-l-4 border-cyan-500 pl-3">
              Contact Information
            </h2>
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="block text-gray-800 font-bold mb-2">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-2xl border-2 border-gray-200 bg-gray-50 text-black placeholder:text-black focus:outline-none focus:ring-4 focus:ring-sky-200"
                />
              </div>
              <div>
                <label className="block text-gray-800 font-bold mb-2">
                  Email Address <span className="text-red-500 ml-1">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                  className="w-full px-4 py-3 rounded-2xl border-2 border-gray-200 bg-gray-50 text-black placeholder:text-black focus:outline-none focus:ring-4 focus:ring-sky-200"
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row justify-end gap-3 mt-10">
              <button
                type="button"
                onClick={handleCancel}
                className="px-6 py-3 rounded-2xl border-2 border-gray-300 bg-gray-100 text-black font-bold hover:bg-gray-200 transition"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-gradient-to-r from-sky-500 via-blue-600 to-cyan-500 text-white px-6 py-3 rounded-2xl font-bold flex items-center justify-center gap-3 hover:scale-105 transition shadow-xl"
              >
                <FaCheck />
                Post Job Request
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}