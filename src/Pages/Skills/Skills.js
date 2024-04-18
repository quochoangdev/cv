import React from "react";
import styles from "./Skills.module.scss";
import classNames from "classnames/bind";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { RiReactjsFill } from "react-icons/ri";
import {
  FaNode,
  FaHtml5,
  FaBootstrap,
  FaGithub,
  FaCheck,
} from "react-icons/fa";
import { SiNestjs, SiTailwindcss } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { GrMysql } from "react-icons/gr";
import { IoLogoCss3 } from "react-icons/io";
import { SiRedux } from "react-icons/si";
import { FaGitlab } from "react-icons/fa";
import { FaTrello } from "react-icons/fa";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

const cx = classNames.bind(styles);
const Skills = () => {
  return (
    <>
      <h1 className={cx("name")}>Skills</h1>
      <div className={cx("desc")}>Programming Languages & Tools:</div>
      <div className={cx("bl-languages")}>
        <Tippy content="JavaScript">
          <button>
            <IoLogoJavascript className={cx("language", "javaScript")} />
          </button>
        </Tippy>
        <Tippy content="TypeScript">
          <button>
            <SiTypescript className={cx("language", "typeScript")} />
          </button>
        </Tippy>
        <Tippy content="ReactJs">
          <button>
            <RiReactjsFill className={cx("language", "reactJs")} />
          </button>
        </Tippy>
        <Tippy content="NodeJs">
          <button>
            <FaNode className={cx("language", "nodeJs")} />
          </button>
        </Tippy>
        <Tippy content="NestJs">
          <button>
            <SiNestjs className={cx("language", "nestJs")} />
          </button>
        </Tippy>
        <Tippy content="MongoDB">
          <button>
            <DiMongodb className={cx("language", "mongodb")} />
          </button>
        </Tippy>
        <Tippy content="MySql">
          <button>
            <GrMysql className={cx("language", "mysql")} />
          </button>
        </Tippy>
        <Tippy content="HTML5">
          <button>
            <FaHtml5 className={cx("language", "html5")} />
          </button>
        </Tippy>
        <Tippy content="CSS3">
          <button>
            <IoLogoCss3 className={cx("language", "css3")} />
          </button>
        </Tippy>
        <Tippy content="Tailwind">
          <button>
            <SiTailwindcss className={cx("language", "tailwind")} />
          </button>
        </Tippy>
        <Tippy content="Bootstrap">
          <button>
            <FaBootstrap className={cx("language", "bootstrap")} />
          </button>
        </Tippy>
        <Tippy content="Redux">
          <button>
            <SiRedux className={cx("language", "redux")} />
          </button>
        </Tippy>
        <Tippy content="Github">
          <button>
            <FaGithub className={cx("language", "github")} />
          </button>
        </Tippy>
        <Tippy content="Gitlab">
          <button>
            <FaGitlab className={cx("language", "gitlab")} />
          </button>
        </Tippy>
        <Tippy content="Trello">
          <button>
            <FaTrello className={cx("language", "trello")} />
          </button>
        </Tippy>
      </div>
      <div className={cx("desc")}>Workflow:</div>
      <ul className={cx("list-skill")}>
        <li className={cx("item")}>
          <FaCheck className={cx("icon")} />
          <span className={cx("strong")}>Testing & Debugging</span>
        </li>
        <li className={cx("item")}>
          <FaCheck className={cx("icon")} />
          <span className={cx("strong")}>Git, Github for Teamwork</span>
        </li>
        <li className={cx("item")}>
          <FaCheck className={cx("icon")} />
          <span className={cx("strong")}>Responsive Web Design</span>
        </li>
        <li className={cx("item")}>
          <FaCheck className={cx("icon")} />
          <span className={cx("strong")}>Agile Development & Scrum</span>
        </li>
        <li className={cx("item")}>
          <FaCheck className={cx("icon")} />
          <span className={cx("strong")}>English for Work!</span>
        </li>
        <li>
          <ul className={cx("item-show")}>
            <li>
              • For Reading: I can comfortably read and interpret documentation,
              project specifications, and work totally in English.
            </li>
            <li>
              • For Speaking: I am capable of basic communication and am always
              striving to improve everyday. I am now practicing communication
              with a Philippines teacher every weekend.
            </li>
            <li>
              • I would really like the opportunity to work at your
              organization, where I would be able to practice my ability to
              speak English.
            </li>
          </ul>
        </li>
        <li className={cx("item")}>
          <FaCheck className={cx("icon")} />
          <span className={cx("strong")}>My maxim:</span>
          <span>"Learning new everyday not the copycat of yesterday!"</span>
        </li>
      </ul>
    </>
  );
};

export default Skills;
