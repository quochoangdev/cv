import React, { useEffect, useState } from "react";
import styles from "./Home.module.scss";
import classNames from "classnames/bind";
import AboutMe from "../AboutMe/AboutMe";
import Experience from "../Experience/Experience";
import Projects from "../Projects";
import Skills from "../Skills";
import Education from "../Education";
import Interests from "../Interests/Interests";
import TheEnd from "../TheEnd/TheEnd";
import { IoClose } from "react-icons/io5";

const cx = classNames.bind(styles);
const Home = () => {
  // useEffect(() => {
  //   window.scrollTo({
  //     top: 0,
  //   });
  // }, []);
  const [isShowImage, setIsShowImage] = useState(false);
  const [active, setActive] = useState(false);
  const handleShowImage = () => {
    setIsShowImage((prev) => !prev);
  };
  const handleCloseImage = () => {
    setIsShowImage((prev) => !prev);
  };

  const handleActive = (item) => {
    const children = item.children[0].href.split("#")[1];
    setActive(children);
  };

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setActive(sectionId);
  };

  useEffect(() => {
    const listSidebarHtmlColec = document.getElementsByClassName(
      styles.itemSidebar
    );
    const listSidebarArr = Array.from(listSidebarHtmlColec);
    listSidebarArr.forEach((item) => {
      item.addEventListener("click", (e) => {
        e.preventDefault();
        handleActive(item);
        const sectionId = item.firstChild.href.split("#")[1];
        scrollToSection(sectionId);
      });
    });
  }, []);
  useEffect(() => {
    const currentUrl = window.location.href.split("#")[1];
    console.log(currentUrl);
    if (currentUrl === undefined) setActive("about-me");
  }, []);

  return (
    <div className={cx("wrapper")}>
      <div className={cx("heading")}>
        <div className={cx("avatar")} onClick={handleShowImage}>
          <img
            src="https://res.cloudinary.com/daofedrqe/image/upload/v1713344801/wanfit_apple_imageAvt/tyg79euys2xpx8lxgzw6.jpg"
            alt=""
          />
        </div>
        <ul className={cx("navbar")}>
          <li className={cx("itemSidebar")}>
            <a
              className={cx(`${active === "about-me" ? "active" : ""}`)}
              href="#about-me"
            >
              about me
            </a>
          </li>
          <li className={cx("itemSidebar")}>
            <a
              className={cx(`${active === "experience" ? "active" : ""}`)}
              href="#experience"
            >
              experience
            </a>
          </li>
          <li className={cx("itemSidebar")}>
            <a
              className={cx(`${active === "projects" ? "active" : ""}`)}
              href="#projects"
            >
              projects
            </a>
          </li>
          <li className={cx("itemSidebar")}>
            <a
              className={cx(`${active === "skills" ? "active" : ""}`)}
              href="#skills"
            >
              skills
            </a>
          </li>
          <li className={cx("itemSidebar")}>
            <a
              className={cx(`${active === "education" ? "active" : ""}`)}
              href="#education"
            >
              education
            </a>
          </li>
          <li className={cx("itemSidebar")}>
            <a
              className={cx(`${active === "interests" ? "active" : ""}`)}
              href="#interests"
            >
              interests
            </a>
          </li>
          <li className={cx("itemSidebar")}>
            <a
              className={cx(`${active === "theEnd" ? "active" : ""}`)}
              href="#theEnd"
            >
              the end
            </a>
          </li>
        </ul>
      </div>
      <div className={cx("content")}>
        <div id="about-me" className={cx("renderSidebar")}>
          <div className={cx("block-2")}>
            <AboutMe />
          </div>
        </div>
        <hr className={cx("hr")} />
        <div id="experience" className={cx("renderSidebar")}>
          <Experience />
        </div>
        <hr className={cx("hr")} />
        <div id="projects" className={cx("renderSidebar")}>
          <Projects />
        </div>
        <hr className={cx("hr")} />
        <div id="skills" className={cx("renderSidebar")}>
          <div className={cx("block-2")}>
            <Skills />
          </div>
        </div>
        <hr className={cx("hr")} />
        <div id="education" className={cx("renderSidebar")}>
          <div className={cx("block-2")}>
            <Education />
          </div>
        </div>
        <hr className={cx("hr")} />
        <div id="interests" className={cx("renderSidebar")}>
          {/* <div className={cx("block-2")}> */}
          <Interests />
          {/* </div> */}
        </div>
        <div id="theEnd" className={cx("renderSidebar")}>
          <div className={cx("block-2")}>
            <TheEnd />
          </div>
        </div>
      </div>
      {isShowImage && (
        <div className={cx("showImageFullscreen")}>
          <div className={cx("close-image")} onClick={handleCloseImage}>
            <IoClose className={cx("icon")} />
          </div>
          <img
            src="https://res.cloudinary.com/daofedrqe/image/upload/v1713344801/wanfit_apple_imageAvt/tyg79euys2xpx8lxgzw6.jpg"
            alt=""
          />
        </div>
      )}
    </div>
  );
};

export default Home;
