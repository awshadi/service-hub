"use client";

import {
  FaArrowLeft,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaTag,
  FaTrash,
} from "react-icons/fa";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-100 via-blue-50 to-cyan-100">
      
      {/* Navbar */}
      <nav className="bg-gradient-to-r from-sky-600 to-blue-700 shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="bg-white text-sky-600 p-2 rounded-xl font-bold">
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
      <div className="max-w-4xl mx-auto px-6 py-10">

        {/* Back */}
        <button className="flex items-center gap-2 text-blue-700 font-medium hover:text-sky-500 transition mb-6">
          <FaArrowLeft />
          Back to Dashboard
        </button>

        {/* Card */}
        <div className="bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden border border-white">

          {/* Content */}
          <div className="p-8">

            {/* Title */}
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
              
              <h1 className="text-4xl font-bold text-gray-800 leading-tight">
                Need a plumber for a leaking kitchen tap
              </h1>

              <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-bold h-fit">
                Open
              </span>
            </div>

            {/* Info */}
            <div className="flex flex-wrap gap-5 mt-6 text-gray-600">

              <div className="flex items-center gap-2 bg-sky-100 px-4 py-2 rounded-xl">
                <FaTag className="text-sky-600" />
                Plumbing
              </div>

              <div className="flex items-center gap-2 bg-cyan-100 px-4 py-2 rounded-xl">
                <FaMapMarkerAlt className="text-cyan-600" />
                Glasgow
              </div>

              <div className="flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-xl">
                <FaCalendarAlt className="text-blue-600" />
                Posted Oct 24, 2023
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-200 my-8"></div>

            {/* Description */}
            <div>
              <h2 className="text-lg font-bold text-gray-800 mb-4 uppercase tracking-wide">
                Description
              </h2>

              <p className="text-gray-700 leading-8">
                Water is dripping constantly from the kitchen sink.
                Need it fixed as soon as possible before it causes
                water damage. I have tried tightening the main nut
                but it did not help.
              </p>

              <p className="text-gray-700 leading-8 mt-5">
                Need to bring your own tools. Usually home after
                4 PM on weekdays.
              </p>
            </div>

            {/* Contact */}
            <div className="mt-10 bg-gradient-to-r from-sky-50 to-cyan-50 border border-sky-100 rounded-2xl p-6 shadow-sm">

              <h3 className="text-gray-700 font-bold uppercase text-sm mb-5">
                Contact Person
              </h3>

              <div className="flex items-center gap-5">
                
                {/* Avatar */}
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-sky-500 to-blue-600 text-white flex items-center justify-center text-2xl font-bold shadow-lg">
                  J
                </div>

                {/* Details */}
                <div>
                  <h4 className="text-xl font-bold text-gray-800">
                    John Smith
                  </h4>

                  <p className="text-sky-600 font-medium">
                    john.smith@example.com
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="bg-gradient-to-r from-sky-50 to-blue-50 px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-5">

            {/* Status */}
            <div className="flex items-center gap-4">
              <label className="font-semibold text-gray-700">
                Update Status:
              </label>

              <select className="px-5 py-3 rounded-xl border border-gray-300 shadow-sm outline-none focus:ring-2 focus:ring-sky-400">
                <option>Open</option>
                <option>In Progress</option>
                <option>Closed</option>
              </select>
            </div>

            {/* Delete */}
            <button className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-6 py-3 rounded-2xl font-semibold flex items-center gap-2 hover:scale-105 transition">
              <FaTrash />
              Delete Job
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}