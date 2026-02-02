import React from "react";
import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";

const Skills = () => (
  <section
    id="skills"
    className="py-16 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 font-sans"
  >
    <div className="text-center mb-12">
      <h2 className="text-3xl sm:text-4xl font-bold text-white">SKILLS</h2>
      <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2"></div>
      <p className="text-gray-400 mt-4 text-base sm:text-lg font-semibold">
        A collection of my technical skills and expertise honed through various
        projects and experiences.
      </p>
    </div>

    <div className="flex flex-wrap gap-8 justify-center">
      {SkillsInfo.map((category) => (
        <div
          key={category.title}
          className="bg-gray-900 bg-opacity-50 backdrop-blur-md px-6 py-8 w-full sm:w-[48%] lg:w-[45%] rounded-2xl border border-gray-700 shadow-lg"
          style={{
            boxShadow: "0 0 20px rgba(130, 69, 236, 0.3)",
          }}
        >
          <h3 className="text-2xl sm:text-3xl font-semibold text-gray-300 mb-6 text-center">
            {category.title}
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {category.skills.map((skill) => (
              <Tilt
                key={skill.name}
                tiltMaxAngleX={20}
                tiltMaxAngleY={20}
                perspective={1000}
                scale={1.1}
                transitionSpeed={1000}
                gyroscope={true}
              >
                <div className="flex items-center justify-center flex-col space-y-2 bg-gray-800 border-2 border-gray-700 rounded-xl py-4 px-2 text-center h-full">
                  <img
                    src={skill.logo}
                    alt={`${skill.name} logo`}
                    className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
                  />
                  <span className="text-xs sm:text-sm text-gray-300">
                    {skill.name}
                  </span>
                </div>
              </Tilt>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;