import React from "react";
import styles from "./CSSModule.module.css";
function CSSModule() {
  return (
    <div>
      <div className={`${styles.wrapper} ${styles.inverted}`}>
        안녕하세요, 저는 <span className="something">CSS Module 입니다.</span>
      </div>
    </div>
  );
}

export default CSSModule;
