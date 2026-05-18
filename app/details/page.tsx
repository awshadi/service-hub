"use client";

import Link from "next/link";

import {
  FaArrowLeft,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaTag,
  FaTrash,
  FaTools,
  FaUserCircle,
  FaEnvelope,
  FaCheckCircle,
} from "react-icons/fa";

export default function Home() {

  return (

    <div className="min-h-screen bg-gradient-to-br from-sky-100 via-blue-50 to-cyan-100">

      {/* Navbar */}
      <nav className="bg-gradient-to-r from-sky-600 via-blue-700 to-cyan-600 shadow-2xl sticky top-0 z-50">

        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

          {/* Logo */}
          <Link
            href="/dashboard"
            className="flex items-center gap-3"
          >

            <div className="bg-white text-sky-600 p-3 rounded-2xl text-xl shadow-lg">
              <FaTools />
            </div>

            <div>

              <h1 className="text-2xl font-extrabold text-white tracking-wide">
                Service Hub
              </h1>

              <p className="text-cyan-100 text-xs">
                Smart Service Management
              </p>

            </div>

          </Link>

          {/* Menu */}
          <div className="flex items-center gap-5">

            <Link
              href="/"
              className="text-white font-semibold hover:text-cyan-200 transition duration-300"
            >
              Dashboard
            </Link>

<Link
              href="/details"
              className="text-white font-semibold hover:text-cyan-200 transition duration-300"
            >
              Details
            </Link>


            <Link
              href="/request"
              className="text-white font-semibold hover:text-cyan-200 transition duration-300"
            >
              Requests
            </Link>

          

            

          </div>

        </div>

      </nav>

      {/* Main */}
      <div className="max-w-3xl mx-auto px-4 py-8">

        {/* Back Button */}
        <Link
          href="/dashboard"
          className="inline-flex items-center gap-2 text-blue-700 font-semibold hover:text-cyan-600 transition duration-300 mb-5"
        >

          <FaArrowLeft />

          Back to Dashboard

        </Link>

        {/* Details Card */}
        <div className="bg-white/95 backdrop-blur-xl rounded-[30px] shadow-2xl overflow-hidden border border-white">

          {/* Header */}
          <div className="bg-gradient-to-r from-sky-500 via-blue-600 to-cyan-500 p-6 text-white">

            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">

              {/* Title */}
              <div>

                <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">

                  Need a plumber for a leaking kitchen tap

                </h1>

                <p className="mt-2 text-blue-100 text-sm">

                  Service request details and customer information

                </p>

              </div>

              {/* Status */}
              <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-bold shadow-md h-fit">

                Open

              </span>

            </div>

          </div>

          {/* Body */}
          <div className="p-6">

            {/* Info Tags */}
            <div className="flex flex-wrap gap-3 mb-6">

              <div className="flex items-center gap-2 bg-sky-100 text-sky-700 px-4 py-2 rounded-2xl font-semibold text-sm">

                <FaTag />

                Plumbing

              </div>

              <div className="flex items-center gap-2 bg-cyan-100 text-cyan-700 px-4 py-2 rounded-2xl font-semibold text-sm">

                <FaMapMarkerAlt />

                Glasgow

              </div>

              <div className="flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-2xl font-semibold text-sm">

                <FaCalendarAlt />

                Oct 24, 2023

              </div>

            </div>

            {/* Divider */}
            <div className="border-t border-gray-200 mb-6"></div>

            {/* Description */}
            <div className="mb-8">

              <h2 className="text-xl font-extrabold text-gray-800 mb-4 border-l-4 border-sky-500 pl-3">

                Description

              </h2>

              <div className="bg-gradient-to-br from-sky-50 to-cyan-50 p-5 rounded-3xl border border-sky-100">

                <p className="text-gray-700 leading-7 text-base">

                  Water is dripping constantly from the kitchen sink.
                  Need it fixed as soon as possible before it causes
                  water damage. I have tried tightening the main nut
                  but it did not help.

                </p>

                <p className="text-gray-700 leading-7 text-base mt-4">

                  Need to bring your own tools. Usually home after
                  4 PM on weekdays.

                </p>

              </div>

            </div>

            {/* Contact */}
            <div className="bg-gradient-to-r from-sky-50 via-white to-cyan-50 border border-sky-100 rounded-3xl p-5 shadow-md mb-8">

              <h3 className="text-gray-700 font-extrabold uppercase tracking-wide text-sm mb-5">

                Contact Person

              </h3>

              <div className="flex items-center gap-5">

                {/* Avatar */}
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-sky-500 to-blue-600 text-white flex items-center justify-center text-3xl shadow-lg">

                  <FaUserCircle />

                </div>

                {/* Details */}
                <div>

                  <h4 className="text-xl font-bold text-gray-800">

                    John Smith

                  </h4>

                  <div className="flex items-center gap-2 text-sky-600 font-medium mt-1">

                    <FaEnvelope />

                    john.smith@example.com

                  </div>

                </div>

              </div>

            </div>

          </div>

          {/* Footer */}
          <div className="bg-gradient-to-r from-sky-50 via-blue-50 to-cyan-50 px-6 py-5 flex flex-col lg:flex-row justify-between items-center gap-5 border-t border-gray-200">

            {/* Status Update */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-3">

              <label className="font-bold text-gray-700">

                Update Status:

              </label>

              <select className="px-4 py-2 rounded-xl border border-gray-300 shadow-sm outline-none focus:ring-4 focus:ring-sky-300 text-black bg-white font-semibold">

                <option>
                  Open
                </option>

                <option>
                  In Progress
                </option>

                <option>
                  Closed
                </option>

              </select>

            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">

              {/* Accept */}
              <button className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-5 py-3 rounded-2xl font-bold flex items-center gap-2 hover:scale-105 transition duration-300 shadow-lg">

                <FaCheckCircle />

                Accept Job

              </button>

              {/* Delete */}
              <button className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-5 py-3 rounded-2xl font-bold flex items-center gap-2 hover:scale-105 transition duration-300 shadow-lg">

                <FaTrash />

                Delete Job

              </button>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}