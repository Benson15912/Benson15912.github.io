import { createFileRoute } from '@tanstack/react-router'
import { useTypingText } from '../hooks/useTypingText';
import { typingRoles } from '../constants/TypingRoles';
import { Link } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  const displayText = useTypingText(typingRoles);
  
  const navigationButtons = [
    { label: "About Me", path: "/about", description: "Learn about my background" },
    { label: "Work Experience", path: "/work", description: "View my professional journey" },
    { label: "Projects", path: "/projects", description: "Explore my work" },
    { label: "Resume", path: "/resume", description: "Download my resume" },
    { label: "Contact", path: "/contact", description: "Get in touch" }
  ];

  return (
    <div className="mt-15">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="space-y-8">
            {/* Hero Section */}
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-gray-900  tracking-tight">
                Hi, I'm <span className="font-semibold">Benson</span>
              </h1>

              {/* Animated Title */}
              <div className="h-12 sm:h-16 flex items-center justify-center">
                <h2 className="text-xl sm:text-2xl lg:text-3xl text-gray-600  font-mono">
                  {displayText}
                  <span className="animate-pulse">|</span>
                </h2>
              </div>

              {/* Short Description */}
              <p className="text-lg text-gray-500  max-w-2xl mx-auto leading-relaxed">
                I build intelligent systems and scalable applications that solve
                real-world problems. Passionate about machine learning, clean
                code, and innovative solutions.
              </p>
            </div>

            {/* Navigation Section */}
            <div className="pt-12">
              <div className="text-xl text-gray-700  mb-8 font-medium">
                Learn more about me!
              </div>
              
              {/* Navigation Buttons Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-2xl mx-auto">
                {navigationButtons.map((button, index) => (
                  <Link
                    key={index}
                    to={button.path}
                    className="group p-4 bg-white  rounded-lg border border-gray-200  hover:border-gray-300 :border-gray-600 hover:shadow-md transition-all duration-200 text-left"
                  >
                    <div className="font-semibold text-gray-900  group-hover:text-blue-600 :text-blue-400 transition-colors">
                      {button.label}
                    </div>
                    <div className="text-sm text-gray-500  mt-1">
                      {button.description}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}