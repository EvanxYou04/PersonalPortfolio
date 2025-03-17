import { motion } from 'framer-motion';
import ExperienceCard from './ExperienceCard';
import { experiences } from '../constants';

const Experience = () => {


  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-4 md:left-1/2 h-full w-0.5 bg-gray-700 transform -translate-x-1/2"></div>

      <div className="space-y-12">
        {experiences.map((experience, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <ExperienceCard {...experience} index={index} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;

