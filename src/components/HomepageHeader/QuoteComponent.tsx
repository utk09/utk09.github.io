import React from "react";

const QuoteComponent: React.FC = () => (
  <div className="max-w-2xl mx-auto px-4 animate-fade-in" style={{ animationDelay: "200ms" }}>
    <blockquote className="relative py-4 text-center">
      <p className="text-sm md:text-base italic text-slate-500 dark:text-slate-400 custom-mono leading-relaxed">
        "If you get to a certain achievement/platform, it's your unsaid duty to help others reach
        the same level in lesser time."
      </p>
      <footer className="mt-2 text-xs text-slate-400 dark:text-slate-500">— Anonymous</footer>
    </blockquote>
  </div>
);

export default QuoteComponent;
