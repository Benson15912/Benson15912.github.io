import { useState, useEffect } from "react";

export const useTypingText = (
  text: string,
  typingSpeed: number = 80,
  deletingSpeed: number = 50,
  pauseTime: number = 3000
) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: number;

    if (!isDeleting && currentIndex <= text.length) {
      timer = window.setTimeout(() => {
        setDisplayText(text.slice(0, currentIndex));
        setCurrentIndex((prev) => prev + 1);
      }, typingSpeed);
    } else if (isDeleting && currentIndex >= 0) {
      timer = window.setTimeout(() => {
        setDisplayText(text.slice(0, currentIndex));
        setCurrentIndex((prev) => prev - 1);
      }, deletingSpeed);
    }

    if (currentIndex === text.length + 1 && !isDeleting) {
      timer = window.setTimeout(() => setIsDeleting(true), pauseTime);
    }

    if (currentIndex === 0 && isDeleting) {
      setIsDeleting(false);
    }

    return () => clearTimeout(timer);
  }, [currentIndex, isDeleting, text, typingSpeed, deletingSpeed, pauseTime]);

  return displayText;
};
