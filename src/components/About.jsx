import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="relative"
      >
        <div className="w-full h-[400px] rounded-lg overflow-hidden">
          <img
            src="/evan-you.jpg"
            alt="Evan You"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute -bottom-6 -right-6 bg-blue-500 p-4 rounded-lg">
          <p className="text-white font-bold">1+ Years Experience</p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        <h3 className="text-2xl font-bold text-white">About Me</h3>
        <p className="text-gray-300 leading-relaxed">
          I am a passionate software engineer pursuing my Bachelor of Science in
          Computer Science at the University of Minnesota in the College of
          Science and Engineering. I am passionate about solving complex
          problems and creating meaningful, impactful solutions that make a
          difference. With a strong interest in various fields such as AI, web
          development, and full-stack development, I am constantly eager to
          explore and tackle new challenges in the software engineering world.
        </p>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gray-800 p-4 rounded-lg">
            <h4 className="text-white font-semibold mb-2">Frontend</h4>
            <ul className="text-gray-300 space-y-1">
              <li>React.js</li>
              <li>Next.js</li>
              <li>TypeScript</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg">
            <h4 className="text-white font-semibold mb-2">Backend</h4>
            <ul className="text-gray-300 space-y-1">
              <li>C++</li>
              <li>C</li>
              <li>C#</li>
              <li>.NET</li>
              <li>Python</li>
            </ul>
          </div>
        </div>

        <div className="flex gap-4">
          <a
            href="/EvanYouResume2025.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full transition-colors"
          >
            Download Resume
          </a>
          <a
            href="#contact"
            className="border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-6 py-2 rounded-full transition-colors"
          >
            Contact Me
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
