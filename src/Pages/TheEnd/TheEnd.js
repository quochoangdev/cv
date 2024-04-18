import React from "react";
import styles from "./TheEnd.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);
const TheEnd = () => {
  return (
    <>
      <h1 className={cx("name")}>TheEnd</h1>
      <ul className={cx("list")}>
        <li className={cx("item")}>
          Finally, I'd want to say Thank You for taking your time to review my
          CV.
        </li>
        <li className={cx("item")}>
          "You're a flower on earth, let's make your life beautiful and
          meaningful!"
        </li>
        <img
          className={cx("img")}
          src="https://res.cloudinary.com/daofedrqe/image/upload/v1713437321/bwpogy8kle0n0f5etk3e.webp"
          alt=""
        />
      </ul>
    </>
  );
};

export default TheEnd;
