import React from "react";
import { experiences } from "../../constants";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-16 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 font-sans"
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">EXPERIENCE</h2>
        <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2"></div>
        <p className="text-gray-400 mt-4 text-base sm:text-lg font-semibold">
          My work experience and the roles I have taken in various organizations.
        </p>
      </div>

      <div className="relative">
        <div className="hidden sm:block absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-gray-600 h-full"></div>

        <div className="space-y-12 sm:space-y-0">
          {experiences.map((experience, index) => (
            <div
              key={experience.id}
              className="flex flex-col sm:flex-row items-center sm:items-start"
            >
              <div
                className={`flex-shrink-0 w-full sm:w-1/2 flex ${
                  index % 2 !== 0 ? "sm:justify-start" : "sm:justify-end"
                } sm:pr-8 sm:pl-8`}
              >
              </div>

              <div className="w-full sm:w-1/2 sm:pr-8 sm:pl-8"></div>

              <div
                className={`w-full sm:w-1/2 mt-6 sm:mt-0 ${
                  index % 2 !== 0 ? "sm:ml-0" : "sm:-ml-[100%]"
                } flex ${index % 2 !== 0 ? "justify-start" : "justify-end"}`}
              >
                <div
                className={`w-full max-w-md p-6 rounded-2xl border border-gray-700 bg-gray-900 bg-opacity-50 backdrop-blur-md shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-purple-500/40 ${
                  index % 2 !== 0 ? "sm:ml-auto" : "sm:mr-auto"
                }`}
              >
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                    <img
                      src={experience.img}
                      alt={experience.company}
                      className="w-16 h-16 object-cover rounded-lg border-2 border-gray-700"
                    />
                    <div className="flex-1">
                      <h3 className="text-lg sm:text-xl font-semibold text-white">
                        {experience.role}
                      </h3>
                      <h4 className="text-sm sm:text-base text-gray-300">
                        {experience.company}
                      </h4>
                      <p className="text-xs text-gray-500 mt-1">{experience.date}</p>
                    </div>
                  </div>

                  <p className="mt-4 text-sm text-gray-400">{experience.desc}</p>
                  <div className="mt-4">
                    <h5 className="font-medium text-white">Skills:</h5>
                    <ul className="flex flex-wrap mt-2">
                      {experience.skills.map((skill, index) => (
                        <li
                          key={index}
                          className="bg-[#8245ec] text-gray-300 px-4 py-1 text-xs sm:text-sm rounded-lg mr-2 mb-2 border border-gray-400"
                        >
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
