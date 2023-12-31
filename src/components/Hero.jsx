import { motion } from "framer-motion";

import { styles } from "../styles";
import CV from "../assets/SUJAN SHRESTHA (RESUME).pdf";
import upArrow from '../assets/up-arrow.png'

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">Sujan</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Frontend Engineer <br className="sm:block hidden" />
            ReactJS | NextJS | TypeScript | Redux
          </p>
          <div className="mt-40 flex gap-6 flex-row lg:gap-8">
            <a href={CV} download>
              <button className="bg-white p-2  lg:px-6 md:px-6 border rounded-md text-black hover:bg-transparent hover:text-white">
                Download CV
              </button>
            </a>
            <a href={CV} target="_blank">
              <button className="bg-transparent lg:px-6 md:px-6 p-2 rounded-md border-white border-2 text-white hover:bg-white hover:text-black">
                View CV
              </button>
            </a>
          </div>
        </div>
      </div>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
