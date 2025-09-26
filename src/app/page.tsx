import MainCard from "~/components/main-card";
import Hero from "~/components/hero";

export default function HomePage() {
  return (
    <main className="flex-grow px-8 pb-8 md:p-8">
      <div className="mx-auto mb-4 max-w-4xl lg:my-8">
        <Hero />
        <div className="mt-12"></div>
        <div className="text-center">
          <h2 className="mx-auto mt-8 max-w-3xl text-2xl font-bold text-purple-700 sm:text-3xl">
            AI-Powered Government Internship Matching
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg font-semibold text-gray-800">
            Connect with Official Government Ministries and PSUs
          </p>
          <p className="mx-auto mt-2 max-w-2xl text-base text-gray-700">
            Verified Opportunities • Pan-India Access • Smart Matching
          </p>
          <div className="mx-auto mt-6 max-w-3xl space-y-2">
            <p className="text-lg font-medium text-gray-800">
              Access 500+ verified government internships across 50+ ministries
            </p>
            <p className="text-base text-gray-700">
              Get matched with opportunities that fit your skills, location, and career goals
            </p>
          </div>
        </div>
      </div>
      <div className="mb-8 flex justify-center">
        <MainCard />
      </div>

      {/* Trust Indicators */}
      <div className="mx-auto mb-12 max-w-4xl">
        <div className="grid grid-cols-2 gap-4 text-center md:grid-cols-4">
          <div className="rounded-lg border-2 border-black bg-green-100 p-4 shadow-[4px_4px_0_0_#000000]">
            <div className="text-xl font-bold text-green-700">120,000+</div>
            <div className="text-sm text-gray-700">Students Trust Us</div>
          </div>
          <div className="rounded-lg border-2 border-black bg-blue-100 p-4 shadow-[4px_4px_0_0_#000000]">
            <div className="text-xl font-bold text-blue-700">₹2.5Cr+</div>
            <div className="text-sm text-gray-700">Total Stipends</div>
          </div>
          <div className="rounded-lg border-2 border-black bg-purple-100 p-4 shadow-[4px_4px_0_0_#000000]">
            <div className="text-xl font-bold text-purple-700">95%</div>
            <div className="text-sm text-gray-700">Success Rate</div>
          </div>
          <div className="rounded-lg border-2 border-black bg-orange-100 p-4 shadow-[4px_4px_0_0_#000000]">
            <div className="text-xl font-bold text-orange-700">28</div>
            <div className="text-sm text-gray-700">States Covered</div>
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="mx-auto mb-12 max-w-4xl">
        <h3 className="mb-8 text-center text-2xl font-bold text-gray-800">How It Works</h3>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-lg border-2 border-black bg-purple-50 p-6 text-center shadow-[4px_4px_0_0_#000000]">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-600 text-white text-xl font-bold">1</div>
            <h4 className="mb-2 text-lg font-semibold text-gray-800">Tell us about you</h4>
            <p className="text-sm text-gray-700">Complete your profile with skills, interests, and preferences</p>
          </div>
          <div className="rounded-lg border-2 border-black bg-purple-100 p-6 text-center shadow-[4px_4px_0_0_#000000]">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-700 text-white text-xl font-bold">2</div>
            <h4 className="mb-2 text-lg font-semibold text-gray-800">AI Interview</h4>
            <p className="text-sm text-gray-700">Our AI matches your profile with the best opportunities</p>
          </div>
          <div className="rounded-lg border-2 border-black bg-purple-200 p-6 text-center shadow-[4px_4px_0_0_#000000]">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-800 text-white text-xl font-bold">3</div>
            <h4 className="mb-2 text-lg font-semibold text-gray-800">Get matched</h4>
            <p className="text-sm text-gray-700">Apply to verified opportunities and start your journey</p>
          </div>
        </div>
      </div>

      {/* Quick Access Features */}
      <div className="mx-auto mb-12 max-w-4xl">
        <h3 className="mb-6 text-center text-xl font-semibold text-gray-800">Quick Access</h3>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-2">
            <h4 className="font-medium text-gray-800">Browse by Location</h4>
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full border border-gray-300 bg-gray-100 px-3 py-1 text-sm">Delhi</span>
              <span className="rounded-full border border-gray-300 bg-gray-100 px-3 py-1 text-sm">Mumbai</span>
              <span className="rounded-full border border-gray-300 bg-gray-100 px-3 py-1 text-sm">Bangalore</span>
              <span className="rounded-full border border-gray-300 bg-gray-100 px-3 py-1 text-sm">Remote</span>
            </div>
          </div>
          <div className="space-y-2">
            <h4 className="font-medium text-gray-800">Browse by Domain</h4>
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full border border-gray-300 bg-gray-100 px-3 py-1 text-sm">Policy</span>
              <span className="rounded-full border border-gray-300 bg-gray-100 px-3 py-1 text-sm">Tech</span>
              <span className="rounded-full border border-gray-300 bg-gray-100 px-3 py-1 text-sm">Research</span>
              <span className="rounded-full border border-gray-300 bg-gray-100 px-3 py-1 text-sm">Finance</span>
            </div>
          </div>
          <div className="space-y-2">
            <h4 className="font-medium text-gray-800">Browse by Duration</h4>
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full border border-gray-300 bg-gray-100 px-3 py-1 text-sm">2-3 months</span>
              <span className="rounded-full border border-gray-300 bg-gray-100 px-3 py-1 text-sm">4-6 months</span>
              <span className="rounded-full border border-gray-300 bg-gray-100 px-3 py-1 text-sm">6+ months</span>
            </div>
          </div>
        </div>
      </div>

      {/* Government Verification Badge */}
      <div className="mx-auto mb-16 max-w-2xl rounded-lg border-2 border-black bg-gradient-to-r from-purple-100 to-purple-200 p-6 text-center shadow-[6px_6px_0_0_#000000] lg:mb-0">
        <div className="mb-4 text-2xl">🇮🇳</div>
        <h3 className="mb-2 text-lg font-bold text-gray-800">Government Verified Platform</h3>
        <p className="mb-4 text-sm text-gray-700">Official Partner • Government Grade Security • WCAG 2.1 AA Compliant</p>
        <div className="flex items-center justify-center gap-2 text-xs text-gray-600">
          <span>🔒 Secure & Encrypted</span>
          <span>•</span>
          <span>📋 Data Protection Compliant</span>
        </div>
      </div>
    </main>
  );
}
