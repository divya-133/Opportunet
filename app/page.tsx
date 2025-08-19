export default function LandingPage() {
  return (
    <main className="bg-white text-[#111827] font-sans">
      {/* Navbar */}
      <header className="sticky top-0 z-10 bg-white border-b px-8 py-4 flex justify-between items-center shadow-sm">
        <div className="flex items-center gap-2 text-xl font-bold text-[#6f28ff]">
          <img src="/Logo.jpg" alt="Opportunet Logo" className="w-8 h-auto object-contain" />
          Opportunet
        </div>
        <nav className="space-x-6 text-sm font-medium text-[#111827]">
          <a href="#features" className="hover:text-[#6366F1]">Features</a>
          <a href="/login" className="hover:text-[#6366F1]">Login</a>
          <a href="/register" className="bg-gradient-to-r from-[#6366F1] to-[#EC4899] text-white py-2 px-5 rounded-full hover:opacity-90 transition">
            Get Started
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section className="text-center px-6 py-24 max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
          Unlock. Grow. Succeed.
        </h1>
        <p className="mt-6 text-lg text-[#6B7280] max-w-xl mx-auto">
          The most intuitive platform for students, professionals, and communities to explore curated opportunities.
        </p>
        <div className="mt-8 flex gap-4 justify-center flex-wrap">
          <a
            href="/register"
            className="bg-gradient-to-r from-[#6366F1] to-[#EC4899] text-white font-semibold py-3 px-6 rounded-full hover:opacity-90 transition"
          >
            Create Account
          </a>
          <a
            href="/login"
            className="border border-[#6366F1] text-[#6366F1] py-3 px-6 rounded-full hover:bg-[#EEF2FF] transition"
          >
            Login
          </a>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="bg-[#F9FAFB] py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Why Opportunet?</h2>
          <div className="grid md:grid-cols-3 gap-10 text-left">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-[#6366F1]">🎯 Curated Feeds</h3>
              <p className="text-[#6B7280]">Internships, jobs, and programs tailored to your skills and interests.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-[#6366F1]">📬 Real-Time Updates</h3>
              <p className="text-[#6B7280]">Get alerts on deadlines, top opportunities, and upcoming events.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-[#6366F1]">🚀 Built for You</h3>
              <p className="text-[#6B7280]">Smooth UI, powerful features, and made just for students & professionals.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-10">What Our Users Say</h2>
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div className="bg-[#F9FAFB] p-6 rounded-lg border">
              <p className="font-semibold text-[#111827] mb-1">@student_01</p>
              <p className="text-[#6B7280]">“Clean UI, and I discovered an internship I wouldn't have found otherwise.”</p>
            </div>
            <div className="bg-[#F9FAFB] p-6 rounded-lg border">
              <p className="font-semibold text-[#111827] mb-1">@earlycareer_mentor</p>
              <p className="text-[#6B7280]">“Opportunet has made it so easy to guide students to the right path.”</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center bg-[#EEF2FF] py-20 px-6">
        <h2 className="text-3xl font-bold mb-4 text-[#6366F1]">Ready to Discover?</h2>
        <p className="max-w-lg mx-auto text-[#6B7280] mb-8">
          Start your journey with curated career opportunities, competitions, and real-world connections.
        </p>
        <a
          href="/register"
          className="inline-block bg-gradient-to-r from-[#6366F1] to-[#EC4899] text-white font-semibold py-3 px-8 rounded-full hover:opacity-90 transition"
        >
          Join Opportunet
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-[#F9FAFB] border-t border-gray-200 text-sm text-[#6B7280] px-6 py-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between md:items-start gap-10">
          {/* Left */}
          <div className="md:w-1/3 space-y-4">
            <div className="flex items-center gap-2 text-xl font-bold text-[#111827]">
              <span className="bg-[#EEF2FF] p-2 rounded-full">🤝</span>
              Opportunet
            </div>
            <p>Helping students and early professionals find the right path.</p>
            <div className="space-y-1">
              <p><strong>Address:</strong><br />IIIT-B, Bengaluru, India</p>
              <p><strong>Email:</strong> <a href="mailto:support@opportunet.app" className="text-[#6366F1] hover:underline">support@opportunet.app</a></p>
            </div>
          </div>

          {/* Right */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-10 md:w-2/3">
            {[
              {
                title: "Product",
                links: ["Features", "Categories", "Alerts", "Opportunities"],
              },
              {
                title: "Company",
                links: ["About", "Team", "Contact", "Press"],
              },
              {
                title: "Legal",
                links: ["Terms", "Privacy", "Security", "Cookies"],
              },
            ].map((group, i) => (
              <div key={i}>
                <h4 className="font-semibold text-[#111827] mb-3">{group.title}</h4>
                <ul className="space-y-2">
                  {group.links.map((text, j) => (
                    <li key={j}>
                      <a href="#" className="hover:text-[#6366F1]">{text}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 border-t pt-6 text-center text-xs text-gray-400">
          &copy; {new Date().getFullYear()} Opportunet. All rights reserved. Built by Divya.
        </div>
      </footer>
    </main>
  );
}
