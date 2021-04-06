import React from 'react';

const Footer = () => {
  return (
    <>
      <div className="relative mt-16 bg-purple-700">
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
                  href="tel:+91-9969-6869-14"
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
                  href="https://www.facebook.com/utkarsh.tiwari.7161953"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="utkarsh.tiwari.7161953"
                  title="utkarsh.tiwari.7161953"
                  className="text-gray-200 transition-colors duration-300 hover:text-purple-400"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                    <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
            <p className="text-sm text-gray-200">
              © Copyright 2021 Utkarsh Tiwari. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;