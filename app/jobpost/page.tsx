"use client";

import {
  FaArrowLeft,
  FaMapMarkerAlt,
  FaCheck,
} from "react-icons/fa";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-100 via-sky-50 to-blue-100">

      {/* Navbar */}
      <nav className="bg-gradient-to-r from-sky-600 to-blue-700 shadow-xl">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="bg-white text-blue-700 p-2 rounded-xl text-xl">
              🔧
            </div>

            <h1 className="text-2xl font-bold text-white">
              Service Hub
            </h1>
          </div>

          {/* Menu */}
          <div className="flex items-center gap-5">
            <button className="text-white hover:text-cyan-200 transition">
              Dashboard
            </button>

            <button className="text-white hover:text-cyan-200 transition">
              Requests
            </button>

            <button className="bg-white text-blue-700 px-5 py-2 rounded-xl font-semibold hover:bg-cyan-100 transition">
              + Post Job
            </button>
          </div>
        </div>
      </nav>

      {/* Main */}
      <div className="max-w-3xl mx-auto px-6 py-10">

        {/* Back Button */}
        <button className="flex items-center gap-2 text-blue-700 font-medium hover:text-cyan-600 transition mb-6">
          <FaArrowLeft />
          Back to Dashboard
        </button>

        {/* Form Card */}
        <div className="bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden border border-white">

          {/* Header */}
          <div className="bg-gradient-to-r from-sky-500 to-blue-600 p-8 text-white">
            <h1 className="text-4xl font-bold">
              Post a Service Request
            </h1>

            <p className="mt-3 text-blue-100">
              Fill out the details below so local tradespeople can help you.
            </p>
          </div>

          {/* Form */}
          <div className="p-8">

            {/* Section */}
            <h2 className="text-lg font-bold text-gray-700 uppercase tracking-wide mb-6">
              Job Details
            </h2>

            {/* Job Title */}
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">
                Job Title <span className="text-red-500">*</span>
              </label>

              <input
                type="text"
                placeholder="e.g. Need a plumber for leaking tap"
                className="w-full px-5 py-4 rounded-2xl border border-gray-300 bg-gray-50 focus:outline-none focus:ring-4 focus:ring-sky-200"
              />
            </div>

            {/* Description */}
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">
                Description <span className="text-red-500">*</span>
              </label>

              <textarea
                
                placeholder="Describe the issue in detail..."
                className="w-full px-5 py-4 rounded-2xl border border-gray-300 bg-gray-50 focus:outline-none focus:ring-4 focus:ring-sky-200"
              ></textarea>
            </div>

            {/* Category + Location */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">

              {/* Category */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Category
                </label>

                <select className="w-full px-5 py-4 rounded-2xl border border-gray-300 bg-gray-50 focus:outline-none focus:ring-4 focus:ring-cyan-200">
                  <option>Select category</option>
                  <option>Plumbing</option>
                  <option>Electrical</option>
                  <option>Painting</option>
                  <option>Joinery</option>
                </select>
              </div>

              {/* Location */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Location <span className="text-red-500">*</span>
                </label>

                <div className="flex items-center bg-gray-50 border border-gray-300 rounded-2xl px-4">
                  <FaMapMarkerAlt className="text-sky-500" />

                  <input
                    type="text"
                    placeholder="e.g. Glasgow"
                    className="w-full px-3 py-4 bg-transparent outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-200 my-8"></div>

            {/* Contact Section */}
            <h2 className="text-lg font-bold text-gray-700 uppercase tracking-wide mb-6">
              Contact Information
            </h2>

            <div className="grid md:grid-cols-2 gap-6">

              {/* Name */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Your Name
                </label>

                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full px-5 py-4 rounded-2xl border border-gray-300 bg-gray-50 focus:outline-none focus:ring-4 focus:ring-sky-200"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Email Address <span className="text-red-500">*</span>
                </label>

                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full px-5 py-4 rounded-2xl border border-gray-300 bg-gray-50 focus:outline-none focus:ring-4 focus:ring-sky-200"
                />
              </div>
            </div>

            {/* Buttons */}
            <div className="flex justify-end gap-4 mt-10">

              <button className="px-6 py-3 rounded-2xl border border-gray-300 bg-gray-100 hover:bg-gray-200 transition font-semibold">
                Cancel
              </button>

              <button className="bg-gradient-to-r from-sky-500 to-blue-600 text-white px-8 py-3 rounded-2xl font-semibold flex items-center gap-2 hover:scale-105 transition shadow-lg">
                <FaCheck />
                Post Job Request
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}