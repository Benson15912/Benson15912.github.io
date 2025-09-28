import { useEffect } from "react";

export function useSmoothScrollSections() {
  useEffect(() => {
    let isScrolling = false; // debounce flag

    const handleWheel = (e: WheelEvent) => {
      if (isScrolling) return;
      e.preventDefault();

      const sections = document.querySelectorAll<HTMLElement>("section");

      // Find the section closest to top of viewport
      let currentIndex = 0;
      let minOffset = Number.POSITIVE_INFINITY;
      sections.forEach((section, i) => {
        const offset = Math.abs(section.getBoundingClientRect().top);
        if (offset < minOffset) {
          minOffset = offset;
          currentIndex = i;
        }
      });

      const nextSection = sections[currentIndex + 1];
      const prevSection = sections[currentIndex - 1];

      if (e.deltaY > 0 && nextSection) {
        nextSection.scrollIntoView({ behavior: "smooth" });
      } else if (e.deltaY < 0 && prevSection) {
        prevSection.scrollIntoView({ behavior: "smooth" });
      }

      // debounce to avoid multiple triggers
      isScrolling = true;
      setTimeout(() => {
        isScrolling = false;
      }, 800); // adjust duration to match smooth scroll speed
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, []);
}
