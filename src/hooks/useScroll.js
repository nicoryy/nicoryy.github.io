import { useState, useEffect } from "react";

export const useScroll = (threshold = 300) => {
  const [passed, setPassed] = useState(false);

  useEffect(() => {
    const handle = () => setPassed(window.scrollY > threshold);
    window.addEventListener("scroll", handle, { passive: true });
    return () => window.removeEventListener("scroll", handle);
  }, [threshold]);

  return passed;
};
