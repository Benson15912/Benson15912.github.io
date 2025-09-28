import { useState, useEffect } from 'react';
const HomePage = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = "Software Engineer & AI/ML Specialist";
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timer = setTimeout(() => {
        setDisplayText(fullText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, fullText]);

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        {/* Profile Image */}
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto rounded-full bg-gray-200 flex items-center justify-center overflow-hidden border-4 border-gray-100">
            {/* Replace with your actual image */}
            <span className="text-gray-400 text-2xl">👨‍💻</span>
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-6">
          {/* Name */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-gray-900 tracking-tight">
            Hi, I'm <span className="font-semibold">Benson</span>
          </h1>

          {/* Animated Title */}
          <div className="h-12 sm:h-16 flex items-center justify-center">
            <h2 className="text-xl sm:text-2xl lg:text-3xl text-gray-600 font-mono">
              {displayText}
              <span className="animate-pulse">|</span>
            </h2>
          </div>

          {/* Short Description */}
          <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
            I build intelligent systems and scalable applications that solve real-world problems. 
            Passionate about machine learning, clean code, and innovative solutions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <a
              href="#projects"
              className="px-8 py-3 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors duration-200"
            >
              Get In Touch
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 pt-12">
            {[
              { name: 'GitHub', icon: '💻', url: '#' },
              { name: 'LinkedIn', icon: '💼', url: '#' },
              { name: 'Twitter', icon: '🐦', url: '#' },
              { name: 'Email', icon: '✉️', url: '#' },
            ].map((social) => (
              <a
                key={social.name}
                href={social.url}
                className="text-gray-400 hover:text-gray-600 transition-colors duration-200 text-2xl"
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="animate-bounce">
            <svg
              className="w-6 h-6 text-gray-400"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;