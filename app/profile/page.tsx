"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { LucideBriefcase, LucideMapPin, LucideFileText, LucideGithub, LucideLinkedin } from "lucide-react";

export default function ProfilePage() {
  const router = useRouter();

  const user = {
    name: "Divya Sharma",
    email: "divya@example.com",
    location: "Bengaluru, India",
    avatar: "/user-avatar.jpg",
    resume: "/resume.pdf",
    linkedin: "https://linkedin.com/in/divya",
    github: "https://github.com/divya",
    portfolio: "https://divyaportfolio.com",
    role: "Frontend Developer",
    preferredLocation: "Remote / Bengaluru",
    interests: ["React", "UI/UX", "Hackathons", "Open Source"],
  };

  return (
    <main className="min-h-screen bg-gray-50 px-4 py-10 md:px-20">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-[#6f28ff]">My Profile</h1>
        <Button
          onClick={() => router.push("/edit-profile")}
          className="bg-[#6f28ff] hover:bg-[#5a20cc] text-white"
        >
          Edit Profile
        </Button>
      </div>

      <Card className="border bg-white shadow-sm rounded-xl">
        <CardHeader className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="flex items-center gap-5">
            <Avatar className="h-20 w-20">
              <AvatarImage src={user.avatar} />
              <AvatarFallback>{user.name.slice(0, 2).toUpperCase()}</AvatarFallback>
            </Avatar>
            <div>
              <h2 className="text-xl font-semibold">{user.name}</h2>
              <p className="text-gray-600 text-sm">{user.email}</p>
              <div className="flex items-center gap-1 text-sm text-gray-400 mt-1">
                <LucideMapPin className="w-4 h-4" />
                {user.location}
              </div>
            </div>
          </div>

          <a
            href={user.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-[#6f28ff] underline text-sm hover:text-[#5a20cc]"
          >
            <LucideFileText className="w-4 h-4 mr-1" />
            View Resume
          </a>
        </CardHeader>

        <Separator />

        <CardContent className="grid gap-8 md:grid-cols-2 py-6">
          <section>
            <h3 className="text-lg font-semibold text-gray-700 mb-2">🌐 Social Profiles</h3>
            <ul className="space-y-2 text-sm text-blue-600">
              <li className="flex items-center gap-2">
                <LucideLinkedin className="w-4 h-4" />
                <a href={user.linkedin} target="_blank" className="hover:underline">LinkedIn</a>
              </li>
              <li className="flex items-center gap-2">
                <LucideGithub className="w-4 h-4" />
                <a href={user.github} target="_blank" className="hover:underline">GitHub</a>
              </li>
              <li className="flex items-center gap-2">
                <LucideFileText className="w-4 h-4" />
                <a href={user.portfolio} target="_blank" className="hover:underline">Portfolio</a>
              </li>
            </ul>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-gray-700 mb-2">🎯 Career Preferences</h3>
            <p className="text-sm text-gray-800 flex items-center gap-2">
              <LucideBriefcase className="w-4 h-4" />
              <span className="font-medium">Role:</span> {user.role}
            </p>
            <p className="text-sm text-gray-800 flex items-center gap-2 mt-2">
              <LucideMapPin className="w-4 h-4" />
              <span className="font-medium">Location:</span> {user.preferredLocation}
            </p>
            <div className="mt-4">
              <p className="text-sm text-gray-800">
                <span className="font-medium">Skills & Interests:</span> {user.interests.join(", ")}
              </p>
            </div>
          </section>
        </CardContent>
      </Card>
    </main>
  );
}
