"use client";

import { useState } from "react";
import Link from "next/link";
import {
  FaSearch,
  FaPlus,
  FaArrowRight,
  FaTools,
} from "react-icons/fa";

// Mock jobs – later replace with fetch from API
const allJobs = [
  {
    id: 1,
    title: "Need a plumber for a leaking kitchen tap",
    category: "Plumbing",
    location: "Glasgow",
    status: "Open",
    time: "Created at 15 mins ago",
  },
  {
    id: 2,
    title: "Rewire living room lights",
    category: "Electrical",
    location: "Edinburgh",
    status: "In Progress",
    time: "Created at 2 hours ago",
  },
  {
    id: 3,
    title: "Paint hallway and staircase",
    category: "Painting",
    location: "Glasgow",
    status: "Open",
    time: "Created at 5 hours ago",
  },
  {
    id: 4,
    title: "Fix broken door hinge",
    category: "Joinery",
    location: "Stirling",
    status: "Closed",
    time: "Created at 1 day ago",
  },
  {
    id: 5,
    title: "Blocked drain outside",
    category: "Plumbing",
    location: "Glasgow",
    status: "Open",
    time: "Created at 2 days ago",
  },
];

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");

  // Filter jobs based on search and category
  const filteredJobs = allJobs.filter((job) => {
    const matchesSearch = job.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All Categories" || job.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-gradient-to-r from-sky-700 via-indigo-700 to-blue-800 shadow-2xl backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center gap-3 group">
              <div className="bg-white/20 backdrop-blur-sm p-2.5 rounded-2xl shadow-lg transition-all duration-300 group-hover:bg-white/30">
                <FaTools className="text-white text-2xl" />
              </div>
              <div>
                <h1 className="text-2xl font-extrabold text-white tracking-tight">
                  Service Hub
                </h1>
                <p className="text-indigo-100 text-xs">Find trusted local pros</p>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-2 lg:gap-4">
              <Link
                href="/"
                className="px-4 py-2 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-200"
              >
                Dashboard
              </Link>
              <Link
                href="/details"
                className="px-4 py-2 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-200"
              >
                Details
              </Link>
              <Link
                href="/request"
                className="px-4 py-2 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-200"
              >
                Requests
              </Link>
              <Link href="/request">
                <button className="ml-2 flex items-center gap-2 bg-white text-indigo-700 px-5 py-2.5 rounded-xl font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200">
                  <FaPlus className="text-sm" />
                  Post Job
                </button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-10">
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 tracking-tight">
              Service Requests
            </h2>
            <p className="text-gray-600 mt-2 text-lg">
              Browse open jobs and claim them to start working.
            </p>
          </div>

          {/* Search & Filter */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <div className="relative flex items-center bg-white rounded-2xl shadow-md border border-gray-200 focus-within:ring-2 focus-within:ring-indigo-300 transition-all">
              <FaSearch className="text-gray-400 absolute left-4" />
              <input
                type="text"
                placeholder="Search jobs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full sm:w-64 pl-10 pr-4 py-3 rounded-2xl outline-none text-gray-800 placeholder-gray-400 bg-transparent"
              />
            </div>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="bg-white px-5 py-3 rounded-2xl shadow-md border border-gray-200 outline-none text-gray-800 font-medium focus:ring-2 focus:ring-indigo-300"
            >
              <option>All Categories</option>
              <option>Plumbing</option>
              <option>Electrical</option>
              <option>Painting</option>
              <option>Joinery</option>
            </select>
          </div>
        </div>

        {/* Jobs Grid */}
        {filteredJobs.length === 0 ? (
          <div className="text-center py-20 bg-white/50 rounded-3xl backdrop-blur-sm">
            <p className="text-gray-500 text-xl">No jobs match your filters.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredJobs.map((job) => (
              <div
                key={job.id}
                className="group bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-white/50"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-gray-800 leading-tight line-clamp-2">
                    {job.title}
                  </h3>
                  <span
                    className={`text-xs px-3 py-1 rounded-full font-semibold whitespace-nowrap ml-2 ${
                      job.status === "Open"
                        ? "bg-emerald-100 text-emerald-700"
                        : job.status === "Closed"
                        ? "bg-rose-100 text-rose-700"
                        : "bg-amber-100 text-amber-700"
                    }`}
                  >
                    {job.status}
                  </span>
                </div>

                <div className="space-y-2 mb-5">
                  <p className="text-indigo-600 font-medium">{job.category}</p>
                  <p className="text-gray-600 flex items-center gap-1">
                    📍 {job.location}
                  </p>
                  <p className="text-gray-400 text-sm">{job.time}</p>
                </div>

                <Link href={`/details/${job.id}`}>
                  <button className="w-full bg-gradient-to-r from-sky-500 to-indigo-600 text-white py-3 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] group-hover:from-sky-600 group-hover:to-indigo-700">
                    View Details
                    <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}