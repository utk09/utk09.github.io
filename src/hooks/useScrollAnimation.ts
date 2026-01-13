import { useEffect, useRef, useState } from "react";

type UseScrollAnimationOptions = {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
};

type UseScrollAnimationReturn<T extends HTMLElement> = {
  ref: React.RefObject<T | null>;
  isVisible: boolean;
};

export function useScrollAnimation<T extends HTMLElement = HTMLDivElement>(
  options: UseScrollAnimationOptions = {},
): UseScrollAnimationReturn<T> {
  const { threshold = 0.1, rootMargin = "0px", triggerOnce = true } = options;
  const ref = useRef<T | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, triggerOnce]);

  return { ref, isVisible };
}

export default useScrollAnimation;
