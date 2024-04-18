import React from "react";
import styles from "./Interests.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);
const Interests = () => {
  const listImage = [
    "https://cv.trungquandev.com/public/img/trungquandev-the-end-cover.jpg",
    "https://cv.trungquandev.com/public/img/trungquandev-the-end-cover.jpg",
    "https://cv.trungquandev.com/public/img/trungquandev-the-end-cover.jpg",
    "https://cv.trungquandev.com/public/img/trungquandev-the-end-cover.jpg",
    "https://cv.trungquandev.com/public/img/trungquandev-the-end-cover.jpg",
    "https://cv.trungquandev.com/public/img/trungquandev-the-end-cover.jpg",
  ];
  return (
    <>
      <h1 className={cx("name")}>Interests</h1>
      <ul className={cx("list")}>
        <li className={cx("item")}>
          • Aside from being a web developer, I spend part of my free time
          listening to music, reading documents, and learning languages.
        </li>
        <li className={cx("item")}>
          • In addition, I enjoy making coffee for myself and watching science
          fiction and fantasy movies.
        </li>
        <li className={cx("item")}>
          • I like learning new knowledge and improving myself every day
        </li>
        <li className={cx("item")}>
          • Finally, I like playing sports and meeting friends in my free time
        </li>
        {/* <div className={cx("list-image")}>
          {listImage.map((item) => {
            return <img className={cx("img")} src={item} alt="" />;
          })}
        </div> */}
      </ul>
    </>
  );
};

export default Interests;
