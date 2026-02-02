import React, { useState } from "react";
import { FiX } from "react-icons/fi";
import { projects } from "../../constants";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <section
      id="work"
      className="py-16 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 font-sans"
    >
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">PROJECTS</h2>
        <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2"></div>
        <p className="text-gray-400 mt-4 text-base sm:text-lg font-semibold">
          A showcase of my projects, highlighting my skills and experience.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => handleOpenModal(project)}
            className="group bg-gray-900 bg-opacity-50 backdrop-blur-md rounded-2xl border border-gray-700 shadow-lg overflow-hidden cursor-pointer transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-purple-500/40"
          >
            <div className="relative">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-lg font-bold">View Details</p>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-purple-900 bg-opacity-50 text-purple-300 text-xs font-semibold rounded-full px-3 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Container */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-4">
          <div className="bg-gray-900 rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto relative border border-gray-700">
            <div className="sticky top-0 right-0 p-4 flex justify-end bg-gray-900 bg-opacity-80 backdrop-blur-sm">
              <button
                onClick={handleCloseModal}
                className="text-gray-400 hover:text-purple-500 transition"
              >
                <FiX size={28} />
              </button>
            </div>

            <div className="p-6 sm:p-8">
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="lg:w-1/2">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full object-cover rounded-xl shadow-lg"
                  />
                </div>
                <div className="lg:w-1/2 flex flex-col justify-center">
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                    {selectedProject.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {selectedProject.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-purple-900 bg-opacity-50 text-purple-300 text-xs font-semibold rounded-full px-3 py-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="text-gray-400 text-sm sm:text-base mb-6">
                    {selectedProject.description}
                  </p>
                  <div className="flex gap-4">
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gray-800 hover:bg-gray-700 text-gray-300 py-3 px-4 rounded-lg text-sm sm:text-base font-semibold text-center transition"
                    >
                      View Code
                    </a>
                    <a
                      href={selectedProject.webapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-purple-600 hover:bg-purple-700 text-white py-3 px-4 rounded-lg text-sm sm:text-base font-semibold text-center transition"
                    >
                      View Live
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Work;