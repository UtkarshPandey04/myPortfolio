import React from 'react';
import { ReactTyped } from 'react-typed'; 
import Tilt from 'react-parallax-tilt';
import profileImage from '../../assets/IMG_6237.JPG';

const About = () => {
  return (
    <section
      id="about"
      className="py-8 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 font-sans mt-8 md:mt-16 lg:mt-24"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-8">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 leading-tight">
            Hi, I am
          </h1>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 leading-tight">
            Utkarsh Pandey
          </h2>
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 text-[#8245ec] leading-tight">
            <span className="text-white">I am a </span>
            <ReactTyped
              strings={[
                'Fullstack Developer',
                'App Developer',
                'UI/UX Designer',
                'Coder',
              ]}
              typeSpeed={100}
              backSpeed={50}
              backDelay={2000}
              loop
              cursorChar="|"
              contentType="html"
            />
          </h3>
          <p className="text-sm sm:text-base md:text-lg text-gray-400 mb-8 mt-6 leading-relaxed">
            I am a full-stack developer with a passion for creating
            building scalable web applications. Skilled in both front-end and
            back-end development, I specialize in the MERN stack and other
            modern technologies to create seamless user experiences and
            efficient solutions.
          </p>
          <a
            href="https://drive.google.com/file/d/1OqfbzALyqz2fUyWbTWBznP7KniVHiDCG/view"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-2 px-6 sm:py-3 sm:px-8 rounded-full text-base sm:text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: 'linear-gradient(90deg, #8245ec, #a855f7)',
              boxShadow: '0 0 10px #8245ec, 0 0 20px #8245ec',
            }}
          >
            DOWNLOAD CV
          </a>
        </div>
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <Tilt
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 border-4 border-purple-700 rounded-full"
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src={profileImage}
              alt="Utkarsh Pandey"
              className="w-full h-full rounded-full object-cover shadow-2xl"
              style={{
                boxShadow: '0 0 20px #8245ec, 0 0 40px #8245ec, 0 0 60px #8245ec',
              }}
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;