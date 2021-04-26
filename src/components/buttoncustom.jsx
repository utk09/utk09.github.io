import React from 'react';

const ButtonCustom = () => {
  return (
    <>
      <div className="px-4 pt-8 pb-0">
        <div className="max-w-3xl mx-auto space-y-4 flex flex-col items-center justify-start sm:space-y-0 sm:flex-row sm:items-end sm:justify-around">
          <button type="button" className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            More Skills &amp; Tools
            <svg className="ml-3 -mr-1 h-5 w-5" fill="currentColor" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" /></svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default ButtonCustom;
