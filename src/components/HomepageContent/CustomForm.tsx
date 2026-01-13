import type { FormEvent } from "react";
import React, { useState } from "react";
import { HiOutlineMail, HiOutlineUser } from "react-icons/hi";

type FormJSON = {
  [key: string]: string;
};

const CustomForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(event.currentTarget);

    let isValid = true;

    const formJSON: FormJSON = {};
    formData.forEach((value, key) => {
      const trimmedValue = (value as string).trim();
      formJSON[key] = trimmedValue;

      if (!trimmedValue && isValid) {
        alert("Please fill in all fields");
        isValid = false;
        return;
      }

      if (key === "email" && !trimmedValue.includes("@") && isValid) {
        alert("Please enter a valid email address");
        isValid = false;
        return;
      }

      if (key === "given-name" && trimmedValue.length < 3 && isValid) {
        alert("Please enter a valid name");
        isValid = false;
        return;
      }
    });

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formJSON).toString(),
      });

      if (response.ok) {
        alert("Form submitted successfully");
        window.location.href = "/";
      } else {
        alert("Form submission failed");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      alert("Form submission error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="card p-6 md:p-8">
      <h3 className="section-title text-xl font-semibold text-slate-900 dark:text-white">
        Stay Updated
      </h3>
      <p className="text-sm text-slate-600 dark:text-slate-400 mt-4 mb-6">
        Interested in updates? Subscribe to the newsletter. Privacy respected, unsubscribe anytime.
      </p>

      <form name="contact" method="post" data-netlify="true" onSubmit={void handleSubmit}>
        <input type="hidden" name="form-name" value="contact" />
        <input type="hidden" name="bot-field" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {/* Name Field */}
          <div className="relative">
            <label htmlFor="given-name" className="sr-only">
              Full Name
            </label>
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <HiOutlineUser className="h-5 w-5 text-slate-400" />
            </div>
            <input
              type="text"
              name="given-name"
              id="given-name"
              autoComplete="given-name"
              placeholder="Your name"
              className="block w-full pl-10 pr-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-green-500 focus:border-transparent transition-all duration-200"
            />
          </div>

          {/* Email Field */}
          <div className="relative">
            <label htmlFor="email" className="sr-only">
              Email Address
            </label>
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <HiOutlineMail className="h-5 w-5 text-slate-400" />
            </div>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="your@email.com"
              className="block w-full pl-10 pr-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-green-500 focus:border-transparent transition-all duration-200"
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full md:w-auto px-8 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-medium rounded-xl shadow-sm hover:bg-slate-700 dark:hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Subscribing..." : "Subscribe"}
        </button>
      </form>
    </div>
  );
};

export default CustomForm;
