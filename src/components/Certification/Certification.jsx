import React from 'react';
import { certifications } from '../../constants';

const Certification = () => {
  return (
    <section
      id="certifications"
      className="py-16 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 font-sans"
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">CERTIFICATIONS</h2>
        <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2"></div>
        <p className="text-gray-400 mt-4 text-base sm:text-lg font-semibold">
          A collection of my certifications and qualifications.
        </p>
      </div>

      <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
        {certifications.map((cert) => (
          <a
            key={cert.id}
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-gray-900 bg-opacity-50 backdrop-blur-md rounded-2xl border border-gray-700 shadow-lg overflow-hidden cursor-pointer transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-purple-500/40"
          >
            <div className="flex items-center p-6">
              <div className="flex-shrink-0">
                <img
                  src={cert.img}
                  alt={cert.issuer}
                  className="w-20 h-20 object-contain rounded-full"
                />
              </div>
              <div className="ml-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  {cert.title}
                </h3>
                <p className="text-gray-400 text-sm font-semibold mb-1">
                  {cert.issuer} &bull; {cert.date}
                </p>
                <p className="text-gray-400 text-sm line-clamp-3">
                  {cert.desc}
                </p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Certification;

