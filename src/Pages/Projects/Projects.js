import React from "react";
import styles from "./Projects.module.scss";
import classNames from "classnames/bind";
import { FaExternalLinkAlt } from "react-icons/fa";

const cx = classNames.bind(styles);
const Projects = () => {
  return (
    <>
      <h1 className={cx("name")}>Projects</h1>
      <div className={cx("desc")}>Here are a few of my standout projects:</div>
      <div className={cx("bl-projects")}>
        <a
          href="https://quochoang03.github.io/TheBand/"
          className={cx("project")}
          target="black"
        >
          <div className={cx("bl-img")}></div>
          <div className={cx("content")}>
            <div className={cx("title")}>
              THE BAND <FaExternalLinkAlt className={cx("icon")} />
            </div>
            Build the website base using html css!
          </div>
          <img
            className={cx("img")}
            src="https://res.cloudinary.com/daofedrqe/image/upload/v1713323059/wanfit_apple_imageAvt/ws5ysim0lbxtbp0izzjg.jpg"
            alt=""
          />
        </a>
        <a href="/" className={cx("project")}>
          <div className={cx("bl-img")}></div>
          <div className={cx("content")}>
            <div className={cx("title")}>
              POD FOODS <FaExternalLinkAlt className={cx("icon")} />
            </div>
            Software and data-enabled distribution and logistics platform!
          </div>
          <img
            className={cx("img")}
            src="https://cv.trungquandev.com/public/img/projects/p-2.jpeg"
            alt=""
          />
        </a>
      </div>
    </>
  );
};

export default Projects;
