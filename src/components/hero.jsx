// @ts-check
import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiFillDribbbleCircle, AiFillFilePdf } from 'react-icons/ai';


const Hero = () => {
  return (
    <>
      <div>
        <section className="text-gray-600 body-font">
          <div className="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Utkarsh Tiwari
                {/* <br className="hidden lg:inline-block" />Lorem. */}
              </h1>
              <p className="mb-8 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere vero maxime nam consectetur commodi, architecto, corrupti asperiores distinctio deserunt atque cumque deleniti incidunt! Et iure quo nostrum quidem quis quasi sapiente eligendi reprehenderit omnis rerum architecto unde ex in error soluta aliquid obcaecati natus minima optio perferendis rem, sunt nulla?
              </p>
              <div className="flex justify-center">
                {/* Github */}
                <a href="https://github.com/utk09"
                  target="_blank"
                  rel="noopener noreferrer">
                  <AiFillGithub
                    aria-label="Github"
                    title="Github"
                    className="mr-2 hover:text-gray-900" size="2.5em" />
                </a>
                {/* Linkedin */}
                <a href="https://github.com/utk09"
                  target="_blank"
                  rel="noopener noreferrer">
                  <AiFillLinkedin
                    aria-label="LinkedIn"
                    title="LinkedIn"
                    className="mr-2 hover:text-blue-800" size="2.5em" />
                </a>
                {/* Dribbble */}
                <a href="https://dribbble.com/anonymous-legion"
                  target="_blank"
                  rel="noopener noreferrer">
                  <AiFillDribbbleCircle
                    aria-label="Dribbble"
                    title="Dribbble"
                    className="mr-2 hover:text-pink-600" size="2.5em" />
                </a>
                {/* Academic Resume */}
                <a href="/assets/Utkarsh_A_Tiwari_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer">
                  <AiFillFilePdf
                    aria-label="Academic Resume"
                    title="Academic Resume"
                    className="mr-2 hover:text-red-800" size="2.5em" />
                </a>
                {/* Resume */}
                <a href="/assets/Tiwari_Utkarsh_Ashok_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer">
                  <AiFillFilePdf
                    aria-label="Resume"
                    title="Resume"
                    className="mr-2 hover:text-green-600" size="2.5em" />
                </a>
                {/* <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
                <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button> */}
              </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <img className="object-cover object-center rounded" alt="utkarsh tiwari img"
                src="/images/utkarsh-tiwari-photo.jpeg" />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Hero;
