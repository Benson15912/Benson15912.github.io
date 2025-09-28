export default function FrontPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 flex flex-col">
      {/* Hero Section */}
      <header className="flex flex-col items-center justify-center flex-1 px-6 text-center">
        <h1 className="text-5xl font-extrabold tracking-tight mb-4">
          Hi, I'm <span className="text-blue-600">Benson</span>
        </h1>
        <p className="text-xl text-gray-600 mb-6">
          Software Engineer • AI/ML Enthusiast
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          <span className="px-4 py-2 bg-blue-100 text-blue-700 font-medium rounded-full">
            Spring Boot
          </span>
          <span className="px-4 py-2 bg-yellow-100 text-yellow-700 font-medium rounded-full">
            JavaScript
          </span>
          <span className="px-4 py-2 bg-green-100 text-green-700 font-medium rounded-full">
            React
          </span>
          <span className="px-4 py-2 bg-indigo-100 text-indigo-700 font-medium rounded-full">
            Python
          </span>
        </div>

        {/* Call to Action */}
        <a
          href="#projects"
          className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition"
        >
          View My Work
        </a>
      </header>

      {/* Projects / Blog Section */}
      <main id="projects" className="px-8 py-16 bg-white">
        <h2 className="text-3xl font-bold text-center mb-10">Projects & Blog</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Sample Project Card */}
          <div className="bg-gray-100 rounded-xl shadow hover:shadow-md transition p-6">
            <h3 className="text-xl font-semibold mb-2">Hackathon Journey</h3>
            <p className="text-gray-600 text-sm mb-4">
              A recap of building an MVP in 48 hours with my team.
            </p>
            <a
              href="/blog/hackathon-journey"
              className="text-blue-600 hover:underline text-sm font-medium"
            >
              Read More →
            </a>
          </div>

          <div className="bg-gray-100 rounded-xl shadow hover:shadow-md transition p-6">
            <h3 className="text-xl font-semibold mb-2">AI/ML Experiments</h3>
            <p className="text-gray-600 text-sm mb-4">
              Sharing my learnings from training models in PyTorch.
            </p>
            <a
              href="/blog/ai-experiments"
              className="text-blue-600 hover:underline text-sm font-medium"
            >
              Read More →
            </a>
          </div>

          <div className="bg-gray-100 rounded-xl shadow hover:shadow-md transition p-6">
            <h3 className="text-xl font-semibold mb-2">Spring Boot Projects</h3>
            <p className="text-gray-600 text-sm mb-4">
              Web apps I’ve built with Spring Boot and React integration.
            </p>
            <a
              href="/blog/springboot-projects"
              className="text-blue-600 hover:underline text-sm font-medium"
            >
              Read More →
            </a>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-6 text-center text-gray-500 border-t">
        © {new Date().getFullYear()} Benson. Built with React + TailwindCSS.
      </footer>
    </div>
  );
}
