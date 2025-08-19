"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
 import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function UserProfilePage() {
  const [publicProfile, setPublicProfile] = useState(true);

  const handleResumeUpload = async (file: File) => {
  const formData = new FormData();
  formData.append("resume", file);

  const res = await fetch("/api/upload-resume", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: formData,
  });

  const data = await res.json();

  if (data.resumeUrl) {
    alert("✅ Resume uploaded!");
    // Save the resume URL to localStorage (optional)
    localStorage.setItem("resumeUrl", data.resumeUrl);
  } else {
    alert("❌ Resume upload failed");
  }
}; 

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6 md:px-20">
      <h1 className="text-3xl font-bold text-[#6f28ff] mb-8">Profile Settings</h1>

      <div className="grid gap-8 grid-cols-1 lg:grid-cols-2">
        <Card className="bg-white border border-gray-200 shadow-sm">
          <CardHeader>
            <CardTitle className="text-lg font-semibold">👤 Personal Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label>Full Name</Label>
              <Input placeholder="Your name" />
            </div>

            <div>
              <Label>Email</Label>
              <Input placeholder="you@example.com" type="email" />
            </div>

            <div>
              <Label>Profile Picture</Label>
              <Input type="file" accept="image/*" />
            </div>

            <div>
              <Label>Resume (PDF only)</Label>
              <Input type="file" accept="application/pdf" 
              onChange={(e) => { const file = e.target.files?.[0];
              if (file) {
                  handleResumeUpload(file);
             }
               }}/>

            </div>
          </CardContent>
        </Card>

        <Card className="bg-white border border-gray-200 shadow-sm">
          <CardHeader>
            <CardTitle className="text-lg font-semibold">🌐 Social Links</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label>LinkedIn</Label>
              <Input placeholder="https://linkedin.com/in/yourprofile" />
            </div>
            <div>
              <Label>GitHub</Label>
              <Input placeholder="https://github.com/username" />
            </div>
            <div>
              <Label>Portfolio</Label>
              <Input placeholder="https://yourportfolio.com" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white border border-gray-200 shadow-sm lg:col-span-2">
          <CardHeader>
            <CardTitle className="text-lg font-semibold">🎯 Career Preferences</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4 md:grid-cols-2">
            <div>
              <Label>Preferred Role</Label>
              <Input placeholder="Frontend Developer, Product Manager..." />
            </div>
            <div>
              <Label>Preferred Location</Label>
              <Input placeholder="Remote, Bengaluru, Mumbai..." />
            </div>
            <div className="md:col-span-2">
              <Label>Interests & Skills (comma-separated)</Label>
              <Textarea placeholder="React, Python, UI/UX Design, Hackathons..." rows={2} />
            </div>
            <div className="flex items-center gap-4 md:col-span-2 mt-4">
              <Label htmlFor="publicProfile" className="text-sm text-gray-700">
                Public Profile
              </Label>
              <Switch
                id="publicProfile"
                checked={publicProfile}
                onCheckedChange={setPublicProfile}
                className={publicProfile ? "bg-blue-600" : "bg-gray-300"}
              />
              <span className="text-xs text-gray-400">
                {publicProfile ? "Your profile is visible to recruiters." : "Hidden from public view."}
              </span>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8 flex justify-end">
        <Button className="bg-[#6f28ff] hover:bg-[#5a20cc] text-white">Save Changes</Button>
      </div>
    </div>
  );
}
