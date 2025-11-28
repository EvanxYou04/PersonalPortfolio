import styles from './style'
import Navbar from './components/Navbar';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Project from './components/Project';
import Contact from './components/Contact';
import { socialMedia, projects } from './constants';

const App = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <Navbar />

      {/* Hero Section */}
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <div className="min-h-screen flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-5xl font-bold text-white mb-4">Evan You</h1>
              <p className="text-xl text-gray-300 mb-8">Software Engineer</p>
              <div className="flex justify-center gap-4 mb-8">
                {socialMedia.map((social) => (
                  <a
                    key={social.id}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    <social.icon size={24} />
                  </a>
                ))}
              </div>
              <button
                onClick={() => document.getElementById('experience').scrollIntoView({ behavior: 'smooth' })}
                className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full transition-colors"
              >
                View My Work
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          {/* About Section */}
          <section id="about me" className="py-20">
            <h2 className="text-3xl font-bold text-white mb-8">About Me</h2>
            <About />
          </section>

          {/* Experience Section */}
          <section id="experience" className="py-20">
            <h2 className="text-3xl font-bold text-white mb-8">Experience</h2>
            <Experience />
          </section>
          {/* Education Section */}
          <section id="education" className="py-20">
            <h2 className="text-3xl font-bold text-white mb-8">Education</h2>
            <Education />
          </section>
          {/* Projects Section */}
          <section id="projects" className="py-20">
            <h2 className="text-3xl font-bold text-white mb-8">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <Project key={index} {...project} />
              ))}
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="py-20">
            <h2 className="text-3xl font-bold text-white mb-8">Contact Me</h2>
            <Contact />
          </section>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 py-8">
        <div className={`${styles.boxWidth} text-center text-gray-400`}>
          <p>© 2024 Evan You. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App