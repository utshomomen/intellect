import React from "react";
import { Link } from "react-router-dom";
import cn from "classnames";
import styles from "./UploadVariants.module.sass";
import Control from "../../components/Control";

const breadcrumbs = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "Upload Item",
  },
];

const items = [
  {
    url: "/upload-details",
    buttonText: "Swap Single",
    image: "https://c.tenor.com/lwtcdNM9srEAAAAM/fish-lover-pudgy-penguins.gif",
    image2x:
      "https://c.tenor.com/lwtcdNM9srEAAAAM/fish-lover-pudgy-penguins.gif",
  },
  {
    url: "/upload-details",
    buttonText: "Swap Multiple",
    image:
      "https://www.cointribune.com/app/uploads/2021/08/ezgif-3-69ba78453c23.jpg",
    image2x:
      "https://www.cointribune.com/app/uploads/2021/08/ezgif-3-69ba78453c23.jpg",
  },
];

const Upload = () => {
  return (
    <div className={styles.page}>
      <Control className={styles.control} item={breadcrumbs} />
      <div className={cn("section-pt80", styles.section)}>
        <div className={cn("container", styles.container)}>
          <div className={styles.top}>
            <h1 className={cn("h2", styles.title)}>Create Swap</h1>
            <div className={styles.info}>
              Choose <span>“Single”</span> if you want your collectible to be
              one of a kind or <span>“Multiple”</span> if you want to sell one
              collectible multiple times
            </div>
          </div>
          <div className={styles.list}>
            {items.map((x, index) => (
              <div className={styles.item} key={index}>
                <div className={styles.preview}>
                  <img srcSet={`${x.image2x} 2x`} src={x.image} alt='Upload' />
                </div>
                <Link className={cn("button-stroke", styles.button)} to={x.url}>
                  {x.buttonText}
                </Link>
              </div>
            ))}
          </div>
          <div className={styles.note}>
            We do not own your private keys and cannot access your funds without
            your confirmation.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upload;
