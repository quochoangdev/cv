import React from "react";
import styles from "./Education.module.scss";
import classNames from "classnames/bind";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";

const cx = classNames.bind(styles);
const Education = () => {
  return (
    <>
      <h1 className={cx("name")}>Education</h1>
      <div className={cx("wrapper")}>
        {/* <div className={cx("one-company")}>
          <div className={cx("left")}>
            <a href="/" className={cx("title")}>
              Company
              <FaExternalLinkAlt className={cx("icon")} />
            </a>
            <h3 className={cx("role")}>Back-end Internship</h3>
            <div className={cx("bl-description")}>
              <div className={cx("mark")}>
                <FaBookmark className={cx("icon-mark")} />
                <a className={cx("link")} href="/">
                  Meta Technology
                </a>
                <strong>: Main project with American customer.</strong>
              </div>
              <ul>
                <li>
                  • I'm responsible for developing websites with{" "}
                  <strong>
                    ReactJS, VueJS, NuxtJS, and other technologies.
                  </strong>
                </li>
                <li>
                  • Deliver some remarkable features to improve site UX and
                  stability (new landing page, new tracking events, consistent
                  UI components).
                </li>
              </ul>
            </div>
            <div className={cx("bl-description")}>
              <div className={cx("mark")}>
                <FaBookmark className={cx("icon-mark")} />
                <a className={cx("link")} href="/">
                  Meta Technology
                </a>
                <strong>: Main project with American customer.</strong>
              </div>
              <ul>
                <li className={cx("tx-style")}>
                  "Quan's seamless adaptation to our ever-evolving tech stack,
                  coupled with his consistent on-time, high-quality deliveries,
                  speaks volumes about his skills and dedication. His keen eye
                  for detail shines through in his work on enhancing website UI
                  components, and his passion for technology extends beyond work
                  as a "tech KOL." As he expresses his positive Educations
                  within our company online, his contributions go beyond
                  technical expertise, positively impacting our reputation."
                </li>
              </ul>
            </div>
          </div>
          <div className={cx("right")}>
            April 2024 - April 2024
            <br />
            (6 month internship)
          </div>
        </div> */}
        {/* Duy Tan University */}
        <div className={cx("one-company")}>
          <div className={cx("left")}>
            <div className={cx("title")}>
              <a
                href="https://duytan.edu.vn/"
                target="black"
                className={cx("text")}
              >
                Duy Tan University
              </a>
              <FaExternalLinkAlt className={cx("icon")} />
            </div>
            <h3 className={cx("role")}>
              I'm studying software engineering in college and I decided to
              choose a job as a Web Developer.
            </h3>
            <div className={cx("bl-description")}>
              <div className={cx("mark")}>
                <FaBookmark className={cx("icon-mark")} />
                <span>
                  When I was a student, I learned a lot about job opportunities
                  in information technology, and I decided to choose Web
                  Programming since I enjoy customizing and drawing on my
                  websites.
                </span>
              </div>
              <div className={cx("mark")}>
                <FaBookmark className={cx("icon-mark")} />
                <span>
                  I appreciate my school because it allows me to make new
                  friends and learn with them.
                </span>
              </div>
              <div className={cx("mark")}>
                <FaBookmark className={cx("icon-mark")} />
                <span>
                  After 5 years in college, I successfully completed a graduate
                  thesis on programming: Using NodeJS and MongoDB to create an
                  online chat messaging application.
                </span>
              </div>
              <div className={cx("mark")}>
                <FaBookmark className={cx("icon-mark")} />
                <span>
                  My graduation thesis received a 9.7/10, making it the third
                  highest mark in the university. That particular moment made me
                  really happy.
                </span>
              </div>
            </div>
          </div>
          <div className={cx("right")}>
            August 2021 - 2025
            <br />
            (4 years)
          </div>
        </div>
      </div>
    </>
  );
};

export default Education;
