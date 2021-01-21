import React from "react";
import styles from "./CSSModule.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function CSSModule() {
  return (
    <div>
      <div className={cx("wrapper", "inverted")}>
        안녕하세요, 저는 <span className="something">CSS Module 입니다.</span>
      </div>
    </div>
  );
}

export default CSSModule;
