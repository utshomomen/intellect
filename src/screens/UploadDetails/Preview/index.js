import React from "react";
import cn from "classnames";
import styles from "./Preview.module.sass";
import Icon from "../../../components/Icon";

const Preview = ({ className, onClose }) => {
  return (
    <div className={cn(className, styles.wrap)}>
      <div className={styles.inner}>
        <button className={styles.close} onClick={onClose}>
          <Icon name='close' size='14' />
        </button>
        <div className={styles.info}>My Wallet Assets</div>{" "}
        <div className={styles.card}>
          <div className={styles.preview}>
            <img
              srcSet='https://lh3.googleusercontent.com/V7883xf29gKS7vR9_eUvltiW7WJqDpi2TfIIf_GZcCXvCKcckGREjY9Kmd8smSAYQpPhPgFYiUKrHKBSZAoeyG9_dosKepkCNjos6A=w600'
              src='https://lh3.googleusercontent.com/V7883xf29gKS7vR9_eUvltiW7WJqDpi2TfIIf_GZcCXvCKcckGREjY9Kmd8smSAYQpPhPgFYiUKrHKBSZAoeyG9_dosKepkCNjos6A=w600'
              alt='Card'
            />
          </div>
          <div className={styles.link}>
            <div className={styles.body}>
              <div className={styles.line}>
                <div className={styles.title}>05251994</div>
              </div>
              terra1pn0cd6u5p5r5lq2xafk5eqxv
              <div className={styles.line}>
                <div className={styles.users}>
                  <div className={styles.avatar}>
                    <div className={styles.price}></div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.foot}>
              <div className={styles.status}>
                <Icon name='candlesticks-up' size='20' />
                Swap <span>0.001 TERRA</span>
              </div>
              <div className={styles.bid}>
                3 swaps so far
                <span role='img' aria-label='fire'>
                  🔥
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preview;
