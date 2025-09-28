interface ScrollIndicatorProps {
    onClick: () => void;    
}

const ScrollIndicator = ({ onClick }: ScrollIndicatorProps) => {
    return (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <button
              onClick={onClick}
              className="animate-bounce focus:outline-none"
              aria-label="Scroll to projects"
            >
              <svg
                className="w-6 h-6 text-gray-400 hover:text-gray-600 transition-colors"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
            </button>
          </div>
    )
}
export default ScrollIndicator;