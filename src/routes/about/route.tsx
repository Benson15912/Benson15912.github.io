import { createFileRoute } from '@tanstack/react-router'
import { useTypingText } from '../../hooks/useTypingText';

export const Route = createFileRoute('/about')({
  component: RouteComponent,
})

function RouteComponent() {
   const displayText = useTypingText(["Software Engineer & AI/ML Specialist"]);
   return (
    <div className="text-center mt-30">
      <div className="space-y-6">
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
                I build intelligent systems and scalable applications that solve
                real-world problems. Passionate about machine learning, clean
                code, and innovative solutions.
              </p>

      </div>
    </div>
  );
}
