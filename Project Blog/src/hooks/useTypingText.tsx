import { useState, useEffect } from "react";

export const useTypingText = (
  texts: string[],
  typingSpeed: number = 80,
  deletingSpeed: number = 50,
  pauseTime: number = 2000
) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    let timer: number;
    const currentText = texts[textIndex];

    if (!isDeleting && currentIndex <= currentText.length) {
      timer = window.setTimeout(() => {
        setDisplayText(currentText.slice(0, currentIndex));
        setCurrentIndex((prev) => prev + 1);
      }, typingSpeed);
    } else if (isDeleting && currentIndex >= 0) {
      timer = window.setTimeout(() => {
        setDisplayText(currentText.slice(0, currentIndex));
        setCurrentIndex((prev) => prev - 1);
      }, deletingSpeed);
    }

    // When finished typing current text, pause then start deleting
    if (currentIndex === currentText.length + 1 && !isDeleting) {
      timer = window.setTimeout(() => setIsDeleting(true), pauseTime);
    }

    // When finished deleting current text, move to next text
    if (currentIndex === 0 && isDeleting) {
      setIsDeleting(false);
      setTextIndex((prev) => (prev + 1) % texts.length);
    }

    return () => clearTimeout(timer);
  }, [currentIndex, isDeleting, textIndex, texts, typingSpeed, deletingSpeed, pauseTime]);

  return displayText;
};