import { useEffect, useState } from "react";

export default function useIsOnScreen(ref) {
  const [isIntersecting, setIsIntersecting] = useState(false);

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.6
  };

  const observer = new IntersectionObserver(
    ([entry]) => setIsIntersecting(entry.isIntersecting),
    options
  );

  useEffect(() => {
    observer.observe(ref.current);
    return () => {
      observer.disconnect();
    };
  }, []);

  return isIntersecting;
}
