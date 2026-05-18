"use client";

import {
  FaSearch,
  FaPlus,
  FaArrowRight,
  FaTools,
} from "react-icons/fa";

const jobs = [
  {
    title: "Need a plumber for a leaking kitchen tap",
    category: "Plumbing",
    location: "Glasgow",
    status: "Open",
    time: "Created at 15 mins ago",
  },
  {
    title: "Rewire living room lights",
    category: "Electrical",
    location: "Edinburgh",
    status: "In Progress",
    time: "Created at 2 hours ago",
  },
  {
    title: "Paint hallway and staircase",
    category: "Painting",
    location: "Glasgow",
    status: "Open",
    time: "Created at 5 hours ago",
  },
  {
    title: "Fix broken door hinge",
    category: "Joinery",
    location: "Stirling",
    status: "Closed",
    time: "Created at 1 day ago",
  },
  {
    title: "Blocked drain outside",
    category: "Plumbing",
    location: "Glasgow",
    status: "Open",
    time: "Created at 2 days ago",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-100 via-blue-50 to-cyan-100">
      
      {/* Navbar */}
      <nav className="bg-gradient-to-r from-sky-600 to-blue-700 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          
          <div className="flex items-center gap-3">
            <div className="bg-white text-sky-600 p-2 rounded-xl">
              <FaTools />
            </div>

            <h1 className="text-2xl font-bold tracking-wide">
Service Hub
            </h1>
          </div>

          <div className="flex items-center gap-6">
            <button className="hover:text-cyan-200 transition">
              Dashboard
            </button>

            <button className="hover:text-cyan-200 transition">
              Requests
            </button>

            <button className="bg-white text-blue-700 px-5 py-2 rounded-xl font-semibold flex items-center gap-2 hover:bg-cyan-100 transition">
              <FaPlus />
              Post Job
            </button>
          </div>
        </div>
      </nav>

      {/* Main */}
      <div className="max-w-7xl mx-auto px-6 py-10">

        {/* Top Section */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-10">
          
          <div>
            <h2 className="text-4xl font-bold text-gray-800">
              Service Requests
            </h2>

            <p className="text-gray-600 mt-2">
              Browse open jobs and claim them to start working.
            </p>
          </div>

          {/* Search */}
          <div className="flex flex-col sm:flex-row gap-4">
            
            <div className="flex items-center bg-white rounded-xl px-4 shadow-md border border-gray-200">
              <FaSearch className="text-gray-400" />

              <input
                type="text"
                placeholder="Search jobs..."
                className="outline-none px-3 py-3 w-64"
              />
            </div>

            <select className="bg-white px-4 py-3 rounded-xl shadow-md border border-gray-200 outline-none">
              <option>All Categories</option>
              <option>Plumbing</option>
              <option>Electrical</option>
              <option>Painting</option>
              <option>Joinery</option>
            </select>
          </div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {jobs.map((job, index) => (
            <div
              key={index}
              className="bg-white/90 backdrop-blur-lg rounded-3xl p-6 shadow-xl border border-white hover:scale-105 transition duration-300"
            >
              
              {/* Status */}
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-gray-800 leading-snug">
                  {job.title}
                </h3>

                <span
                  className={`text-xs px-3 py-1 rounded-full font-semibold
                  ${
                    job.status === "Open"
                      ? "bg-green-100 text-green-700"
                      : job.status === "Closed"
                      ? "bg-red-100 text-red-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {job.status}
                </span>
              </div>

              {/* Details */}
              <div className="space-y-2 mb-5">
                <p className="text-gray-700 font-medium">
                  {job.category}
                </p>

                <p className="text-gray-500">
                  📍 {job.location}
                </p>

                <p className="text-gray-400 text-sm">
                  {job.time}
                </p>
              </div>

              {/* Button */}
              <button className="w-full bg-gradient-to-r from-sky-500 to-blue-600 text-white py-3 rounded-2xl font-semibold flex items-center justify-center gap-2 hover:from-cyan-500 hover:to-blue-700 transition">
                View Details
                <FaArrowRight />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}