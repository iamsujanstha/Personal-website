import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useTranslation } from "react-i18next";
import { getTextByLanguage } from "../i18n/i18n";

const ProjectCard = ({ index, name, description, descriptionNe, tags, image, source_code_link }) => {
  const maxLength = 155;
  const [isExpanded, setIsExpanded] = React.useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full">
        <div className="relative w-full h-[230px]">
          <img src={image} alt="project_image" className="w-full h-full rounded-2xl" />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
              <img src={github} alt="source code" className="w-1/2 h-1/2 object-contain" />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          {description.length > maxLength && !isExpanded ? (
            <div className="">
              <span className="mt-2 text-secondary text-[14px]">{getTextByLanguage(description, descriptionNe).slice(0, maxLength)}</span>
              <span className="mt-2 text-[12px] text-blue-700 hover:cursor-pointer" onClick={toggleReadMore}>
                ...Read More
              </span>
            </div>
          ) : (
            <p className="mt-2 text-secondary text-[14px]">{getTextByLanguage(description, descriptionNe)}</p>
          )}
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={`${name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  const { t } = useTranslation("project");

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>{t('work')}</p>
        <h2 className={`${styles.sectionHeadText}`}>{t('projects')}.</h2>
      </motion.div>

      <div className="w-full flex mb-10">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
          {t('description')}
        </motion.p>
      </div>
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        centeredSlides={true}
        navigation={false}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper">
        <div className="mt-20 flex flex-wrap gap-7">
          {projects.map((project, index) => (
            <SwiperSlide key={`project-${index}`}>
              <ProjectCard index={index} {...project} />
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </>
  );
};

export default SectionWrapper(Works, "projects");
