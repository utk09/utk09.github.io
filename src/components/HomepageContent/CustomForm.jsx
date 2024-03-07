import React from "react";

const CustomForm = () => {
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission
    const formData = new FormData(event.target); // 'event.target' is the form

    const formJSON = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formJSON).toString(),
      });

      // Handle response...
      if (response.ok) {
        alert("Form submitted successfully");
        // Redirect or show a success message
        window.location.href = "/"; // success route
      } else {
        // Show an error message
        alert("Form submission failed");
      }
    } catch (error) {
      // Handle error...
      console.error("Form submission error:", error);
      alert("Form submission error");
    }
  };

  return (
    <div>
      <form
        className="pb-12"
        name="contact"
        method="post"
        data-netlify="true"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="form-name" value="contact" />
        <input type="hidden" name="bot-field" />
        <p className="mt-1 text-base">
          Interested in updates? Subscribe to the newsletter. Privacy respected,
          unsubscribe anytime.
        </p>
        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3 align-bottom">
          <div>
            <label htmlFor="given-name" className="text-sm font-medium">
              Full Name
            </label>
            <input
              type="text"
              name="given-name"
              id="given-name"
              autoComplete="given-name"
              className="bg-transparent mt-2 block w-full rounded-md border-2 border-slate-400 py-2 text-sm"
            />
          </div>
          <div>
            <label htmlFor="email" className="text-sm font-medium">
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              className="bg-transparent mt-2 block w-full rounded-md border-2 border-slate-400 py-2 text-sm"
            />
          </div>
          <div>
            <button
              type="submit"
              className="mt-8 w-full md:w-auto block px-8 py-3 bg-slate-600 text-white font-semibold rounded-md shadow hover:bg-slate-500 transition-colors duration-300 border-0 cursor-pointer"
            >
              Subscribe
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CustomForm;
