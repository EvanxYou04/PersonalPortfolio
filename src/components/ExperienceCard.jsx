import React from 'react';

const ExperienceCard = ({ title, company, location, period, description, technologies, index }) => {
  const isEven = index % 2 === 0;

  return (
    <div className={`relative flex items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
      {/* Timeline dot */}
      <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-blue-500 rounded-full transform -translate-x-1/2"></div>

      {/* Content */}
      <div className={`w-full md:w-1/2 ${isEven ? 'md:pr-12' : 'md:pl-12'}`}>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
            <div>
              <h3 className="text-xl font-bold text-white">{title}</h3>
              <p className="text-gray-300">{company}</p>
            </div>
            <span className="text-blue-400 font-semibold">{period}</span>
          </div>
          
          <p className="text-gray-400 mb-4">{location}</p>
          
          <p className="text-gray-300 mb-4">{description}</p>
          
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, techIndex) => (
              <span
                key={techIndex}
                className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;