import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import i18n from 'i18next';

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";
import { ToggleContext } from "../providers/toggleLanguageProvider";
import { useTranslation } from "react-i18next";
import { nepaliFlag, englishFlag } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { toggleLanguage } = useContext(ToggleContext);
  const { t } = useTranslation("navbar");

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => () => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActive(sectionId); // Update the active section based on the scrolled section
    }
  };

  const handleSelect = (e) => {
    toggleLanguage(e.target.value);
  }

  console.log(i18n.language)
  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 ${scrolled ? "bg-primary" : "bg-transparent"
        }`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}>
          <p className="text-white text-[28px]  cursor-pointer flex">
            <span className="text-[40px] text-yellow-500">&lt;</span><span className="mt-2 font-bold">{i18n.language === "en" ? "sujan" : "सुजन"}</span><span className="text-red-600 ml-2 mt-2"> /</span>
            <span className="text-[40px] text-yellow-500">&gt;</span>
          </p>
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${active === nav.id ? "text-white" : "text-secondary"
                } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={scrollToSection(nav.id)}>
              {`${t(`${nav.title.toLowerCase()}`)}`}
            </li>
          ))}
        </ul>
        <div className="max-w-md w-32 ml-4">
          <div className="relative">
            <select
              className="w-full bg-transparent font-bold text-[18px] pl-8 placeholder:text-seconday text-secondary text-sm border rounded pr-8 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md appearance-none cursor-pointer"
              onChange={handleSelect}
              value={i18n.language}
            >
              <option value="en" className="text-[#070517]">English</option>
              <option value="ne" className="text-[#070517]">नेपाली</option>
              {/* <option value="hindi">Hindi</option> */}
            </select>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.2" stroke="currentColor" className="h-5 w-5 ml-1 absolute top-2.5 right-2.5 ">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
            </svg>
            <div className="absolute top-2 left-2">
              <img src={i18n.language === "en" ? englishFlag : nepaliFlag} alt="Flag" width={20} height={20} />
            </div>
          </div>
        </div>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${!toggle ? "hidden" : "flex"
              } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${active === nav.title ? "text-white" : "text-secondary"
                    }`}
                  onClick={() => {
                    setToggle(!toggle);
                    scrollToSection(nav.id);
                  }}>
                  {nav.title}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
