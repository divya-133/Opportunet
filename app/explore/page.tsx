"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Bell, Filter, LayoutDashboard, Search, UserCircle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import  NotificationsDrawer  from "@/components/notifications-drawer"

const opportunityList = [
  {
    id: "internships",
    title: "Software Engineering Intern",
    desc: "Work on real products with a fast-paced team.",
    tags: ["Remote", "Tech", "Internship"],
    company: "InnovateX",
    image: "/Internship.jpg",
  },
  {
    id: "jobs",
    title: "Frontend Developer",
    desc: "Join a growing startup building AI products.",
    tags: ["On-site", "React", "Full-time"],
    company: "TechNova",
    image: "/Job.jpg",
  },
  {
    id: "hackathons",
    title: "CodeSprint 2025",
    desc: "Solve challenges, build solutions & win prizes!",
    tags: ["Hackathon", "Remote", "Team"],
    company: "DevHack",
    image: "/Hackathon.jpg",
  },
  {
    id: "fellowship",
    title: "AI Research Fellowship",
    desc: "6-month deep tech research opportunity.",
    tags: ["Research", "AI", "Fellowship"],
    company: "DeepLabs",
    image: "/Fellowship.jpg",
  },
  {
    id: "challenges",
    title: "Marketing Case Challenge",
    desc: "Compete to solve real-world business problems.",
    tags: ["Case Study", "Marketing", "Remote"],
    company: "BrandSphere",
    image: "/Challenge.jpg",
  },
  {
    id: "bootcamp",
    title: "Fullstack Bootcamp",
    desc: "Learn & build fullstack projects in 8 weeks.",
    tags: ["Bootcamp", "Remote", "WebDev"],
    company: "CodeVerse",
    image: "/Bootcamp.jpg",
  },
]

export default function ExplorePage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [sortBy, setSortBy] = useState("Latest")

  return (
    <div className="min-h-screen bg-[#F9FAFB] text-[#111827] font-sans">
      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-white border-b px-6 py-4 flex items-center justify-between shadow-sm">
  <div className="flex items-center justify-between w-full max-w-5xl gap-10">
    {/* Brand */}
    <div className="flex items-center gap-3 text-xl font-bold text-[#6f28ff]">
      <img src="/Logo.jpg" alt="Opportunet Logo" className="w-8 h-auto object-contain" />
      <span className="tracking-tight">Opportunet</span>
    </div>

    {/* Search bar */}
    <div className="flex items-center gap-2 flex-grow max-w-md ml-6">
      <Search className="w-5 h-5 text-gray-400" />
      <Input
        placeholder="Search internships, jobs, hackathons..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full bg-gray-100 rounded-md text-sm"
      />
    </div>
  </div>

  {/* Right side: Sort + Dashboard */}
  <div className="flex items-center gap-3 ml-6">
    <select
      value={sortBy}
      onChange={(e) => setSortBy(e.target.value)}
      className="border rounded px-2 py-1 text-sm focus:outline-none bg-white shadow-sm"
    >
      <option>Latest</option>
      <option>Deadline</option>
      <option>Popular</option>
    </select>

    {/* Filter icon */}
    <Button variant="ghost" size="icon">
      <Filter className="w-5 h-5 text-gray-600" />
    </Button>

     {/* ✅ Notification Icon */}
     <NotificationsDrawer />

    {/* Dashboard with icon */}
    <Link href="/user-dashboard">
      <Button variant="ghost" size="icon">
        <LayoutDashboard className="text-gray-600 w-5 h-5" />
      </Button>
    </Link>

    {/* Profile Icon (New) */}
    <Link href="/profile">
      <Button variant="ghost" size="icon">
        <img
          src="/user-avatar.jpg"
          alt="Profile"
          className="w-8 h-8 rounded-full object-cover border"
        />
      </Button>
    </Link>
  </div>
</header>

      {/* MAIN CONTENT */}
      <main className="grid grid-cols-12 gap-6 px-6 py-8 max-w-7xl mx-auto">
        {/* LEFT SIDEBAR */}
        <aside className="col-span-12 md:col-span-3 space-y-6">
          <div className="bg-white rounded-xl p-5 shadow-md sticky top-28">
            <h2 className="text-lg font-semibold mb-4">Filter Opportunities</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium">Type</label>
                <select className="w-full border rounded px-2 py-1 text-sm mt-1">
                  <option>All</option>
                  <option>Internship</option>
                  <option>Job</option>
                  <option>Hackathon</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium">Category</label>
                <select className="w-full border rounded px-2 py-1 text-sm mt-1">
                  <option>All</option>
                  <option>Tech</option>
                  <option>Marketing</option>
                  <option>Design</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium">Location</label>
                <Input placeholder="e.g. Remote or Bangalore" className="mt-1 text-sm" />
              </div>
              <div className="flex gap-2 pt-2">
                <Button className="w-full bg-indigo-500 text-white hover:bg-indigo-600" size="sm">
                  Apply
                </Button>
                <Button variant="outline" size="sm" className="w-full">
                  Reset
                </Button>
              </div>
            </div>
          </div>
        </aside>

        {/* CENTER CONTENT */}
        <section className="col-span-12 md:col-span-6 space-y-6">
          {opportunityList.map((item) => (
            <Link key={item.id} href={`/opportunity/${item.id}`}>
              <Card className="hover:shadow-md transition rounded-xl border border-gray-200 bg-white cursor-pointer">
                <CardContent className="p-4 flex gap-5">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-24 h-24 object-cover rounded-md border"
                  />
                  <div className="flex flex-col justify-between">
                    <div>
                      <h3 className="font-semibold text-lg text-[#111827]">{item.title}</h3>
                      <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
                      <p className="text-sm text-gray-500 mt-1 font-medium">by {item.company}</p>
                    </div>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {item.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="bg-pink-100 text-pink-700 text-xs px-2 py-1 rounded-full"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </section>

        {/* RIGHT SIDEBAR */}
        <aside className="col-span-12 md:col-span-3 space-y-6 hidden md:block">
          <div className="bg-white rounded-xl p-5 shadow-md sticky top-28">
            <h2 className="text-lg font-semibold mb-4">Trending Topics</h2>
            <ul className="text-sm text-indigo-600 space-y-2">
              <li>#Remote</li>
              <li>#AI</li>
              <li>#TechInternships</li>
              <li>#Summer2025</li>
            </ul>

            <h2 className="text-lg font-semibold pt-6 pb-3">Suggested</h2>
            <ul className="text-sm space-y-2 text-gray-700">
              <li>UX Intern - Remote</li>
              <li>Startup Hackathon</li>
              <li>Marketing Bootcamp</li>
            </ul>

            <h2 className="text-lg font-semibold pt-6 pb-3">Recently Viewed</h2>
            <ul className="text-sm space-y-2 text-gray-700">
              <li>Product Design Fellowship</li>
              <li>Frontend Internship at Wave</li>
            </ul>
          </div>
        </aside>
      </main>

      {/* FOOTER */}
      <footer className="bg-white border-t py-6 mt-8 px-6 text-sm text-gray-600 flex justify-between">
        <p>&copy; 2025 Opportunet. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:underline">About</a>
          <a href="#" className="hover:underline">Contact</a>
          <a href="#" className="hover:underline">Privacy</a>
        </div>
      </footer>
    </div>
  )
}
