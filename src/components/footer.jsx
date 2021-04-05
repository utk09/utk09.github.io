import React from 'react';

const Footer = () => {
  return (
    <>
      <div className="relative mt-16 bg-purple-700 -z-10">
        <svg
          className="absolute top-0 w-full h-6 -mt-5 sm:-mt-10 sm:h-16 text-purple-700"
          preserveAspectRatio="none"
          viewBox="0 0 1440 54"
        >
          <path
            fill="currentColor"
            d="M0 22L120 16.7C240 11 480 1.00001 720 0.700012C960 1.00001 1200 11 1320 16.7L1440 22V54H1320C1200 54 960 54 720 54C480 54 240 54 120 54H0V22Z"
          />
        </svg>
        <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
          <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="sm:col-span-2">
              <a
                href="/"
                aria-label="Go home"
                title="Utkarsh Tiwari"
                className="inline-flex items-center"
              >
                <span className="text-xl font-bold tracking-wide text-white hover:text-purple-400 uppercase">
                  Utkarsh Tiwari
            </span>
              </a>
              <div className="mt-6 lg:max-w-sm">
                <p className="text-sm text-gray-100 italic">
                  "If you get to a certain achievement/platform, it's your unsaid duty to help others reach the same level in lesser time."
                   <br />
                  -Anonymous
                </p>
              </div>
            </div>
            <div className="space-y-2 text-sm">
              <p className="text-base font-bold tracking-wide text-white">
                Contact
          </p>
              <div className="flex">
                <p className="mr-1 text-gray-100">Phone:</p>
                <a
                  href="tel:850-123-5021"
                  aria-label="Phone Number - +91-9969-6869-14"
                  title="Phone Number"
                  className="transition-colors duration-300 text-gray-200 hover:text-purple-400"
                >
                  +91-9969-6869-14
            </a>
              </div>
              <div className="flex">
                <p className="mr-1 text-gray-100">Email:</p>
                <a
                  href="mailto:utkarsh999tiwari@gmail.com"
                  aria-label="Email - utkarsh999tiwari@gmail.com"
                  title="Email"
                  className="transition-colors duration-300 text-gray-200 hover:text-purple-400"
                >
                  utkarsh999tiwari@gmail.com
            </a>
              </div>
              <div className="flex">
                <p className="mr-1 text-gray-100">Address:</p>
                <a
                  href="https://goo.gl/maps/7Jzxa9jjTJEEMUE77"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Address - Mumbai"
                  title="Address"
                  className="transition-colors duration-300 text-gray-200 hover:text-purple-400"
                >
                  Mumbai, Maharashtra, India
            </a>
              </div>
            </div>
            <div>
              <span className="text-base font-bold tracking-wide text-white">
                Social
          </span>
              <div className="flex items-center mt-1 space-x-3">
                <a
                  href="https://twitter.com/utk0909"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="@utk0909"
                  title="@utk0909"
                  className="text-gray-200 transition-colors duration-300 hover:text-purple-400"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="24" height="24" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg>
                </a>
                <a
                  href="https://www.instagram.com/_utk09/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="_utk09"
                  title="_utk09"
                  className="text-gray-200 transition-colors duration-300 hover:text-purple-400"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                </a>
                <a
                  href="https://github.com/utk09"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="utk09"
                  title="utk09"
                  className="text-gray-200 transition-colors duration-300 hover:text-purple-400"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
            <p className="text-sm text-gray-200">
              © Copyright 2021 Utkarsh Tiwari. All rights reserved.
        </p>
            {/* <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
            <li>
              <a
                href="/"
                className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                F.A.Q
            </a>
            </li>
            <li>
              <a
                href="/"
                className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                Privacy Policy
            </a>
            </li>
            <li>
              <a
                href="/"
                className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                Terms &amp; Conditions
            </a>
            </li>
          </ul> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;