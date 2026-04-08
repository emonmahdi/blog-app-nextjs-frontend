import { Mail, Globe, Users } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20 mt-16">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          About Blogify
        </h1>
        <p className="text-gray-500 text-lg max-w-2xl mx-auto">
          A modern platform where ideas, stories, and knowledge come together.
        </p>
      </div>

      {/* Content */}
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left */}
        <div>
          <h2 className="text-3xl font-semibold mb-4 text-gray-900">
            Our Mission
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            We aim to empower writers and readers by providing a clean,
            fast, and modern blogging experience. Share your thoughts,
            explore ideas, and grow your knowledge.
          </p>

          <p className="text-gray-600 leading-relaxed">
            Built with modern technologies like Next.js and Node.js,
            Blogify ensures performance, scalability, and a great user experience.
          </p>
        </div>

        {/* Right */}
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-10 rounded-3xl shadow-md">
          <h3 className="text-2xl font-semibold mb-6 text-gray-900">
            Why Choose Us?
          </h3>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <Users className="text-blue-500" />
              <p className="text-gray-600">
                Community-driven content platform
              </p>
            </div>

            <div className="flex items-start gap-4">
              <Globe className="text-purple-500" />
              <p className="text-gray-600">
                Accessible from anywhere, anytime
              </p>
            </div>

            <div className="flex items-start gap-4">
              <Mail className="text-green-500" />
              <p className="text-gray-600">
                Easy sharing and communication
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}