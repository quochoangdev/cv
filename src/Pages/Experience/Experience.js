import React from "react";
import styles from "./Experience.module.scss";
import classNames from "classnames/bind";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";

const cx = classNames.bind(styles);
const Experience = () => {
  return (
    <>
      <h1 className={cx("name")}>Experience</h1>
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
                  as a "tech KOL." As he expresses his positive experiences
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
        {/* Meta Technology */}
        <div className={cx("one-company")}>
          <div className={cx("left")}>
            <a
              href="https://meta-technology.com.vn/"
              target="black"
              className={cx("title")}
            >
              Meta Technology
              <FaExternalLinkAlt className={cx("icon")} />
            </a>
            <h3 className={cx("role")}>Backend - Internship</h3>
            <div className={cx("bl-description")}>
              <div className={cx("mark")}>
                <FaBookmark className={cx("icon-mark")} />
                Participate in developing Ecommerce website with TypeScript,
                NestJs
              </div>
              <div className={cx("mark")}>
                <FaBookmark className={cx("icon-mark")} />
                Join a team Back-end and developing a website with TypeScript -
                NestJs
              </div>
            </div>
          </div>
          <div className={cx("right")}>
            April 2024 - April 2024
            <br />
            (6 month internship)
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
