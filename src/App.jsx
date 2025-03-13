import React from 'react'
import styles from './style'
import Navbar from './components/Navbar';

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}></div>
      <div className={`${styles.boxWidth}`}>
        <Navbar/>
      </div>
    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        Hero
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        About Me
        Experience
        Projects
        Contact Me
        Footer
      </div>
    </div>
  </div>
);


export default App