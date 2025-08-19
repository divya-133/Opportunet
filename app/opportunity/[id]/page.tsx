// "use client";

// import { useSearchParams } from "next/navigation";
// import { useEffect, useState } from "react";
// import { Bookmark, ExternalLink, Share2, TagIcon } from "lucide-react";

// interface Opportunity {
//   id: string;
//   title: string;
//   company: string;
//   location: string;
//   type: string;
//   deadline: string;
//   description: string;
//   tags: string[];
//   applyLink: string;
// }

// const fetchOpportunity = async (id: string): Promise<Opportunity> => ({
//   id,
//   title: "Frontend Developer Intern",
//   company: "TechNova Inc.",
//   location: "Remote",
//   type: "Internship",
//   deadline: "2025-08-31",
//   description: `
//     <h3 class='text-lg font-semibold'>🎯 About the Role</h3>
//     <p>Join our frontend team to build engaging user experiences using modern web tech.</p>
//     <h4 class='font-semibold mt-4'>🚀 Responsibilities</h4>
//     <ul class='list-disc ml-6'>
//       <li>Work with React, Next.js, and Tailwind CSS</li>
//       <li>Collaborate with product and design teams</li>
//       <li>Participate in code reviews</li>
//     </ul>
//     <h4 class='font-semibold mt-4'>🔧 Requirements</h4>
//     <ul class='list-disc ml-6'>
//       <li>Experience with React and JavaScript</li>
//       <li>Familiarity with Git and REST APIs</li>
//       <li>Excellent communication skills</li>
//     </ul>
//     <p class='mt-4'>This is a part-time, fully remote internship with flexible hours.</p>
//   `,
//   tags: ["Remote", "React", "Internship"],
//   applyLink: "https://example.com/apply",
// });

// export default function OpportunityDetailPage() {
//   const searchParams = useSearchParams();
//   const id = searchParams.get("id") || "";
//   const [opportunity, setOpportunity] = useState<Opportunity | null>(null);
//   const [saved, setSaved] = useState(false);

//   useEffect(() => {
//     fetchOpportunity(id).then(setOpportunity);
//   }, [id]);

//   if (!opportunity) return <div className="text-center p-12">Loading opportunity...</div>;

//   return (
//     <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-[#111827] font-sans">
//       <header className="border-b pb-6 mb-6">
//         <div className="flex flex-col sm:flex-row justify-between sm:items-center">
//           <div>
//             <h1 className="text-3xl font-bold mb-1">{opportunity.title}</h1>
//             <p className="text-sm text-gray-600">
//               {opportunity.company} • {opportunity.location} • {opportunity.type}
//             </p>
//             <p className="text-sm text-gray-500 mt-1">
//               Application Deadline: <span className="font-medium">{opportunity.deadline}</span>
//             </p>
//           </div>
//           <div className="flex gap-3 mt-4 sm:mt-0">
//             <button onClick={() => setSaved(!saved)} className="p-2 border rounded-md hover:bg-gray-100">
//               <Bookmark className={saved ? "text-[#6366F1]" : "text-gray-500"} size={20} />
//             </button>
//             <button
//               onClick={() => {
//                 if (navigator.share) {
//                   navigator.share({
//                     title: opportunity.title,
//                     text: opportunity.company,
//                     url: window.location.href,
//                   });
//                 }
//               }}
//               className="p-2 border rounded-md hover:bg-gray-100"
//             >
//               <Share2 className="text-gray-500" size={20} />
//             </button>
//           </div>
//         </div>

//         {/* Tags */}
//         <div className="mt-4 flex flex-wrap gap-2">
//           {opportunity.tags.map((tag) => (
//             <span
//               key={tag}
//               className="inline-flex items-center text-sm px-3 py-1 bg-[#F3F4F6] text-[#6366F1] rounded-full"
//             >
//               <TagIcon className="w-4 h-4 mr-1" /> {tag}
//             </span>
//           ))}
//         </div>
//       </header>

//       {/* Description */}
//       <section className="prose max-w-none text-gray-800 mb-10">
//         <div dangerouslySetInnerHTML={{ __html: opportunity.description }} />
//       </section>

//       {/* CTA */}
//       <footer className="flex flex-col sm:flex-row gap-4">
//         <button
//           onClick={() => window.open(opportunity.applyLink, "_blank")}
//           className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-[#6366F1] to-[#EC4899] text-white font-semibold rounded-lg w-full sm:w-auto"
//         >
//           Apply Now <ExternalLink className="w-4 h-4" />
//         </button>
//         <button
//           onClick={() => setSaved(!saved)}
//           className="px-6 py-3 border border-gray-300 text-gray-800 rounded-lg hover:bg-gray-100 w-full sm:w-auto"
//         >
//           {saved ? "Unsave" : "Save"}
//         </button>
//       </footer>
//     </main>
//   );
// }




"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Bookmark, ExternalLink, Share2, TagIcon } from "lucide-react";

interface Opportunity {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string;
  deadline: string;
  description: string;
  tags: string[];
  applyLink: string;
}

// Dummy function to mock opportunity fetch
const fetchOpportunity = async (id: string): Promise<Opportunity> => ({
  id,
  title: "Frontend Developer Intern",
  company: "TechNova Inc.",
  location: "Remote",
  type: "Internship",
  deadline: "2025-08-31",
  description: `
    <h3 class='text-lg font-semibold'>🎯 About the Role</h3>
    <p>Join our frontend team to build engaging user experiences using modern web tech.</p>
    <h4 class='font-semibold mt-4'>🚀 Responsibilities</h4>
    <ul class='list-disc ml-6'>
      <li>Work with React, Next.js, and Tailwind CSS</li>
      <li>Collaborate with product and design teams</li>
      <li>Participate in code reviews</li>
    </ul>
    <h4 class='font-semibold mt-4'>🔧 Requirements</h4>
    <ul class='list-disc ml-6'>
      <li>Experience with React and JavaScript</li>
      <li>Familiarity with Git and REST APIs</li>
      <li>Excellent communication skills</li>
    </ul>
    <p class='mt-4'>This is a part-time, fully remote internship with flexible hours.</p>
  `,
  tags: ["Remote", "React", "Internship"],
  applyLink: "https://example.com/apply",
});

// 🔐 Save opportunity API
const saveOpportunity = async (opportunityId: string) => {
  const token = localStorage.getItem("token");
  try {
    const res = await fetch("/api/opportunity/save", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ opportunityId }),
    });

    const data = await res.json();
    console.log("Save response:", data);
    return data.success;
  } catch (error) {
    console.error("Error saving opportunity:", error);
    return false;
  }
};

export default function OpportunityDetailPage() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id") || "";
  const [opportunity, setOpportunity] = useState<Opportunity | null>(null);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    fetchOpportunity(id).then(setOpportunity);
    // Optionally check if already saved from backend
  }, [id]);

  if (!opportunity) return <div className="text-center p-12">Loading opportunity...</div>;

  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-[#111827] font-sans">
      <header className="border-b pb-6 mb-6">
        <div className="flex flex-col sm:flex-row justify-between sm:items-center">
          <div>
            <h1 className="text-3xl font-bold mb-1">{opportunity.title}</h1>
            <p className="text-sm text-gray-600">
              {opportunity.company} • {opportunity.location} • {opportunity.type}
            </p>
            <p className="text-sm text-gray-500 mt-1">
              Application Deadline: <span className="font-medium">{opportunity.deadline}</span>
            </p>
          </div>
          <div className="flex gap-3 mt-4 sm:mt-0">
            <button
              onClick={async () => {
                const success = await saveOpportunity(opportunity.id);
                if (success) setSaved(!saved);
              }}
              className="p-2 border rounded-md hover:bg-gray-100"
            >
              <Bookmark className={saved ? "text-[#6366F1]" : "text-gray-500"} size={20} />
            </button>
            <button
              onClick={() => {
                if (navigator.share) {
                  navigator.share({
                    title: opportunity.title,
                    text: opportunity.company,
                    url: window.location.href,
                  });
                }
              }}
              className="p-2 border rounded-md hover:bg-gray-100"
            >
              <Share2 className="text-gray-500" size={20} />
            </button>
          </div>
        </div>

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {opportunity.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center text-sm px-3 py-1 bg-[#F3F4F6] text-[#6366F1] rounded-full"
            >
              <TagIcon className="w-4 h-4 mr-1" /> {tag}
            </span>
          ))}
        </div>
      </header>

      {/* Description */}
      <section className="prose max-w-none text-gray-800 mb-10">
        <div dangerouslySetInnerHTML={{ __html: opportunity.description }} />
      </section>

      {/* CTA */}
      <footer className="flex flex-col sm:flex-row gap-4">
        <button
          onClick={() => window.open(opportunity.applyLink, "_blank")}
          className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-[#6366F1] to-[#EC4899] text-white font-semibold rounded-lg w-full sm:w-auto"
        >
          Apply Now <ExternalLink className="w-4 h-4" />
        </button>
        <button
          onClick={async () => {
            const success = await saveOpportunity(opportunity.id);
            if (success) setSaved(!saved);
          }}
          className="px-6 py-3 border border-gray-300 text-gray-800 rounded-lg hover:bg-gray-100 w-full sm:w-auto"
        >
          {saved ? "Unsave" : "Save"}
        </button>
      </footer>
    </main>
  );
}
