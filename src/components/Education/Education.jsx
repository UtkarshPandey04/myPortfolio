import React from "react";
import { education } from "../../constants";

const Education = () => {
  return (
    <section
      id="education"
      className="py-16 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 font-sans"
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">EDUCATION</h2>
        <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2"></div>
        <p className="text-gray-400 mt-4 text-base sm:text-lg font-semibold">
          My academic journey and qualifications.
        </p>
      </div>

      <div className="relative">
        <div className="hidden sm:block absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-gray-600 h-full"></div>

        <div className="space-y-12 sm:space-y-0">
          {education.map((edu, index) => (
            <div
              key={edu.id}
              className="flex flex-col sm:flex-row items-center sm:items-start"
            >
              <div
                className={`flex-shrink-0 w-full sm:w-1/2 flex ${
                  index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
                } sm:pr-8 sm:pl-8`}
              >
                <div className="relative sm:static">
                  
                </div>
              </div>

              <div className="w-full sm:w-1/2 sm:pr-8 sm:pl-8"></div>

              <div
                className={`w-full sm:w-1/2 mt-6 sm:mt-0 ${
                  index % 2 === 0 ? "sm:ml-0" : "sm:-ml-[100%]"
                } flex ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
              >
                <div
                className={`w-full max-w-md p-6 rounded-2xl border border-gray-700 bg-gray-900 bg-opacity-50 backdrop-blur-md shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-purple-500/40 ${
                  index % 2 === 0 ? "sm:ml-auto" : "sm:mr-auto"
                }`}
              >
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                    <img
                      src={edu.img}
                      alt={edu.school}
                      className="w-16 h-16 object-cover rounded-lg border-2 border-gray-700"
                    />
                    <div className="flex-1">
                      <h3 className="text-lg sm:text-xl font-semibold text-white">
                        {edu.degree}
                      </h3>
                      <h4 className="text-sm sm:text-base text-gray-300">
                        {edu.school}
                      </h4>
                      <p className="text-xs text-gray-500 mt-1">{edu.date}</p>
                    </div>
                  </div>

                  <p className="mt-4 text-sm text-gray-400 font-bold">
                    Grade: {edu.grade}
                  </p>
                  <p className="mt-2 text-sm text-gray-400">{edu.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;