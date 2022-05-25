import React, { useState } from "react";
import { Link } from "react-router-dom";
import cn from "classnames";
import styles from "./ConnectWallet.module.sass";
import Icon from "../../components/Icon";
import Checkbox from "../../components/Checkbox";
import TextInput from "../../components/TextInput";
import Modal from "../../components/Modal";
import Actions from "../../components/Actions";
import { sassNull } from "sass";
const menu = [
  {
    title: "Coinbase Wallet",
    color: "#9757D7",
  },
  {
    title: "Terra Wallet",
    color: "#3772FF",
  },
  // {
  //   title: "MyEtherWallet",
  //   color: "#45B26B",
  // },
  // {
  //   title: "Wallet Connect",
  //   color: "#EF466F",
  // },
];

const Connect = () => {
  const [age, setAge] = useState(true);
  const [visible, setVisible] = useState(false);
  const [conditions, setConditions] = useState(false);

  return (
    <div className={cn("section-pt80", styles.section)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.head}>
          <Link className={styles.back} to='/'>
            <Icon name='arrow-prev' size='24' />
            <div className={cn("h4", styles.stage)}>Connect your wallet</div>
          </Link>
        </div>

        <div className={styles.body}>
          <div className={styles.menu}>
            {menu.map((x, index) => (
              <Link
                to='/upload-variants'
                style={{ color: "white" }}
                className={cn({ [styles.active]: index === 1 }, styles.link)}
                key={index}
              >
                <div
                  className={styles.icon}
                  style={{ backgroundColor: x.color }}
                >
                  <Icon name='wallet' size='24' />
                  <Icon name='check' size='18' fill={x.color} />
                </div>
                <span>{x.title}</span>
                <div className={styles.arrow}>
                  <Icon name='arrow-next' size='14' />
                </div>
              </Link>
            ))}
          </div>
          <div className={styles.wrapper}>
            <div className={styles.bg}>
              <img
                srcSet='https://res.cloudinary.com/dxrvvjvpf/image/upload/v1643391342/astronaut_1.png'
                style={{ height: "250px", width: "250px" }}
                src='/images/content/connect-bg.jpg'
                alt='Connect wallet'
              />
            </div>
            {/* <div className={styles.item}>
              <div className={styles.btns}>
                <button className={cn("button-stroke", styles.button)}>
                  Cancel
                </button>
                <Link
                  className={cn("button", styles.button)}
                  to='/upload-variants'
                >
                  Get started now
                </Link>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connect;
