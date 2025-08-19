// "use client";

// import { useState } from "react";
// import {
//   Bookmark,
//   User,
//   FileText,
//   Settings,
//   ExternalLink,
//   LogOut,
//   BarChart3,
//   UploadCloud,
// } from "lucide-react";
// import Link from "next/link";
// import { Tabs, TabsContent } from "@/components/ui/tabs";
// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";

// const DashboardPage = () => {
//   const username = "Divya";
//   const [tab, setTab] = useState("saved");

//   const greeting = () => {
//     const hour = new Date().getHours();
//     if (hour < 12) return "Good morning";
//     if (hour < 18) return "Good afternoon";
//     return "Good evening";
//   };

//   const saved = [
//     {
//       id: "1",
//       title: "Frontend Developer Intern",
//       company: "TechNova",
//       location: "Remote",
//       type: "Internship",
//       deadline: "2025-08-31",
//     },
//   ];

//   const suggested = [
//     {
//       id: "3",
//       title: "Product Management Internship",
//       company: "InnoCorp",
//       location: "Hybrid",
//       type: "Internship",
//       deadline: "2025-08-28",
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-gray-50 text-gray-800 flex">
//       {/* Sidebar */}
//       <aside className="w-64 bg-white shadow-sm border-r flex flex-col">
//         <div className="p-6 border-b">
//         <div className="flex items-center gap-3 text-xl font-bold text-[#6f28ff] mb-3">
//         <img src="/Logo.jpg" alt="Opportunet Logo" className="w-8 h-auto object-contain drop-shadow-sm"/>
//            Opportunet
//         </div>
//         </div>
//         <nav className="flex-1 p-4 space-y-2">
//           {[
//             { value: "saved", label: "Saved", icon: <Bookmark className="w-4 h-4" /> },
//             { value: "recent", label: "Recent", icon: <FileText className="w-4 h-4" /> },
//             { value: "suggested", label: "Suggested", icon: <ExternalLink className="w-4 h-4" /> },
//             { value: "profile", label: "Profile", icon: <User className="w-4 h-4" /> },
//             { value: "settings", label: "Settings", icon: <Settings className="w-4 h-4" /> },
//           ].map((item) => (
//             <button
//               key={item.value}
//               onClick={() => setTab(item.value)}
//               className={`flex items-center w-full px-3 py-2 rounded-md text-sm transition ${
//                 tab === item.value
//                   ? "bg-indigo-100 text-indigo-700 font-medium"
//                   : "hover:bg-gray-100 text-gray-600"
//               }`}
//             >
//               {item.icon}
//               <span className="ml-2">{item.label}</span>
//             </button>
//           ))}
//         </nav>
//         <div className="p-4 border-t">
//           <button className="flex items-center text-sm text-gray-500 hover:text-red-600">
//             <LogOut className="w-4 h-4 mr-2" />
//             Logout
//           </button>
//         </div>
//       </aside>

//       {/* Main */}
//       <main className="flex-1 p-10 space-y-8">
//         <div>
//           <h2 className="text-3xl font-bold">
//             {greeting()}, {username} 👋
//           </h2>
//           <p className="text-gray-500 mt-1">Here’s your personalized dashboard</p>
//         </div>

//         {/* Stats */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//           <Card className="border border-gray-200">
//             <CardContent className="p-4">
//               <h3 className="text-sm text-gray-600">Total Saved</h3>
//               <p className="text-xl font-semibold">{saved.length}</p>
//             </CardContent>
//           </Card>
//           <Card className="border border-gray-200">
//             <CardContent className="p-4">
//               <h3 className="text-sm text-gray-600">Suggestions Today</h3>
//               <p className="text-xl font-semibold">{suggested.length}</p>
//             </CardContent>
//           </Card>
//           <Card className="border border-gray-200">
//             <CardContent className="p-4 flex items-center gap-2">
//               <BarChart3 className="w-5 h-5 text-indigo-500" />
//               <span className="text-sm text-gray-700">
//                 Your applications are up 20% this month!
//               </span>
//             </CardContent>
//           </Card>
//         </div>

//         <Tabs defaultValue={tab} value={tab} onValueChange={setTab}>
//           <TabsContent value="saved">
//             <Section title="📌 Saved Opportunities" items={saved} />
//           </TabsContent>

//           <TabsContent value="recent">
//             <EmptyState message="⏱ Recently viewed and applied opportunities will appear here." />
//           </TabsContent>

//           <TabsContent value="suggested">
//             <Section title="✨ Suggested for You" items={suggested} />
//           </TabsContent>

//           <TabsContent value="profile">
//             <Card className="border border-gray-200 bg-white shadow-sm">
//               <CardContent className="p-4">
//                 <h4 className="text-lg font-semibold mb-2">Resume & Profile</h4>
//                 <p className="text-sm text-gray-600">
//                   You haven't uploaded a resume yet. Upload now to get better opportunities.
//                 </p>
//                 <Button className="mt-3" variant="default">
//                   <UploadCloud className="w-4 h-4 mr-2" />
//                   Upload Resume
//                 </Button>
//               </CardContent>
//             </Card>
//           </TabsContent>

//           <TabsContent value="settings">
//             <Card className="border border-gray-200 bg-white shadow-sm">
//               <CardContent className="p-4">
//                 <h4 className="text-lg font-semibold mb-2">Preferences</h4>
//                 <p className="text-sm text-gray-600">
//                   Notification settings, dark mode and more coming soon.
//                 </p>
//               </CardContent>
//             </Card>
//           </TabsContent>
//         </Tabs>
//       </main>
//     </div>
//   );
// };

// const Section = ({ title, items }: { title: string; items: any[] }) => (
//   <div>
//     <h3 className="text-lg font-semibold mb-4">{title}</h3>
//     <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
//       {items.map((item) => (
//         <Card key={item.id} className="border border-gray-200 bg-white shadow-sm">
//           <CardContent className="p-4">
//             <h4 className="text-base font-semibold">{item.title}</h4>
//             <p className="text-sm text-gray-500 mt-1">
//               {item.company} • {item.location} • {item.type}
//             </p>
//             <p className="text-sm text-gray-400 mt-1">Deadline: {item.deadline}</p>
//             <Link
//               href={`/opportunity/${item.id}`}
//               className="inline-block text-indigo-600 text-sm mt-3 hover:underline"
//             >
//               View Opportunity →
//             </Link>
//           </CardContent>
//         </Card>
//       ))}
//     </div>
//   </div>
// );

// const EmptyState = ({ message }: { message: string }) => (
//   <div className="p-6 text-sm text-gray-500">{message}</div>
// );

// export default DashboardPage;

// app/user-dashboard/page.tsx
"use client";

import { useEffect, useState } from "react";
import { logout } from "@/lib/logout";
import {
  Bookmark,
  User,
  FileText,
  Settings,
  ExternalLink,
  LogOut,
  BarChart3,
  UploadCloud,
} from "lucide-react";
import Link from "next/link";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

interface Opportunity {
  _id: string;
  title: string;
  company: string;
  location: string;
  type: string;
  deadline: string;
  description?: string;
  applyLink?: string;
}

const DashboardPage = () => {
  const username = "Divya";
  const [tab, setTab] = useState("saved");
  const [saved, setSaved] = useState<Opportunity[]>([]);
  const [suggested, setSuggested] = useState<Opportunity[]>([]);
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  const greeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good morning";
    if (hour < 18) return "Good afternoon";
    return "Good evening";
  };

  useEffect(() => {
    const fetchSaved = async () => {
      const token = localStorage.getItem("token");
      // if (!token) {
      //   router.push("/login");
      //   return;
      // }

      try {
        const res = await fetch("/api/user/saved", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await res.json();
        if (res.ok) {
          setSaved(data.savedOpportunities);
        } else {
          console.error(data.error || "Failed to fetch");
        }
      } catch (err) {
        console.error("Error fetching saved:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchSaved();
  }, [router]);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-sm border-r flex flex-col">
        <div className="p-6 border-b">
          <div className="flex items-center gap-3 text-xl font-bold text-[#6f28ff] mb-3">
            <img src="/Logo.jpg" alt="Opportunet Logo" className="w-8 h-auto object-contain drop-shadow-sm" />
            Opportunet
          </div>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          {[
            { value: "saved", label: "Saved", icon: <Bookmark className="w-4 h-4" /> },
            { value: "recent", label: "Recent", icon: <FileText className="w-4 h-4" /> },
            { value: "suggested", label: "Suggested", icon: <ExternalLink className="w-4 h-4" /> },
            { value: "profile", label: "Profile", icon: <User className="w-4 h-4" /> },
            { value: "settings", label: "Settings", icon: <Settings className="w-4 h-4" /> },
          ].map((item) => (
            <button
              key={item.value}
              onClick={() => setTab(item.value)}
              className={`flex items-center w-full px-3 py-2 rounded-md text-sm transition ${
                tab === item.value
                  ? "bg-indigo-100 text-indigo-700 font-medium"
                  : "hover:bg-gray-100 text-gray-600"
              }`}
            >
              {item.icon}
              <span className="ml-2">{item.label}</span>
            </button>

          ))}
        </nav>
        <div className="p-4 border-t">
          <button onClick={logout} className="bg-red-500 text-white px-4 py-1 rounded">
           Logout
          </button>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 p-10 space-y-8">
        <div>
          <h2 className="text-3xl font-bold">
            {greeting()}, {username} 👋
          </h2>
          <p className="text-gray-500 mt-1">Here’s your personalized dashboard</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="border border-gray-200">
            <CardContent className="p-4">
              <h3 className="text-sm text-gray-600">Total Saved</h3>
              <p className="text-xl font-semibold">{saved.length}</p>
            </CardContent>
          </Card>
          <Card className="border border-gray-200">
            <CardContent className="p-4">
              <h3 className="text-sm text-gray-600">Suggestions Today</h3>
              <p className="text-xl font-semibold">{suggested.length}</p>
            </CardContent>
          </Card>
          <Card className="border border-gray-200">
            <CardContent className="p-4 flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-indigo-500" />
              <span className="text-sm text-gray-700">
                Your applications are up 20% this month!
              </span>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue={tab} value={tab} onValueChange={setTab}>
          <TabsContent value="saved">
            {loading ? (
              <div className="p-6 text-sm text-gray-500">Loading saved opportunities...</div>
            ) : saved.length === 0 ? (
              <EmptyState message="You haven’t saved any opportunities yet." />
            ) : (
              <Section title="📌 Saved Opportunities" items={saved} />
            )}
          </TabsContent>

          <TabsContent value="recent">
            <EmptyState message="⏱ Recently viewed and applied opportunities will appear here." />
          </TabsContent>

          <TabsContent value="suggested">
            <Section title="✨ Suggested for You" items={suggested} />
          </TabsContent>

          <TabsContent value="profile">
            <Card className="border border-gray-200 bg-white shadow-sm">
              <CardContent className="p-4">
                <h4 className="text-lg font-semibold mb-2">Resume & Profile</h4>
                <p className="text-sm text-gray-600">
                  You haven't uploaded a resume yet. Upload now to get better opportunities.
                </p>
                <Button className="mt-3" variant="default">
                  <UploadCloud className="w-4 h-4 mr-2" />
                  Upload Resume
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings">
            <Card className="border border-gray-200 bg-white shadow-sm">
              <CardContent className="p-4">
                <h4 className="text-lg font-semibold mb-2">Preferences</h4>
                <p className="text-sm text-gray-600">
                  Notification settings, dark mode and more coming soon.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

const Section = ({ title, items }: { title: string; items: Opportunity[] }) => (
  <div>
    <h3 className="text-lg font-semibold mb-4">{title}</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      {items.map((item) => (
        <Card key={item._id} className="border border-gray-200 bg-white shadow-sm">
          <CardContent className="p-4">
            <h4 className="text-base font-semibold">{item.title}</h4>
            <p className="text-sm text-gray-500 mt-1">
              {item.company} • {item.location} • {item.type}
            </p>
            <p className="text-sm text-gray-400 mt-1">Deadline: {item.deadline}</p>
            {item.applyLink && (
              <a
                href={item.applyLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-indigo-600 text-sm mt-3 hover:underline"
              >
                View Opportunity →
              </a>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
);

const EmptyState = ({ message }: { message: string }) => (
  <div className="p-6 text-sm text-gray-500">{message}</div>
);

export default DashboardPage;
