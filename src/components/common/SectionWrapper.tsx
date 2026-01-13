import { useScrollAnimation } from "@site/src/hooks/useScrollAnimation";
import clsx from "clsx";
import type { ReactNode } from "react";
import React from "react";

type SectionWrapperProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  threshold?: number;
};

const SectionWrapper: React.FC<SectionWrapperProps> = ({
  children,
  className = "",
  delay = 0,
  threshold = 0.1,
}) => {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({ threshold });

  const delayClass = delay > 0 ? `delay-${delay}` : "";

  return (
    <div
      ref={ref}
      className={clsx("animate-on-scroll", isVisible && "is-visible", delayClass, className)}
      style={delay > 0 ? { animationDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
};

export default SectionWrapper;
