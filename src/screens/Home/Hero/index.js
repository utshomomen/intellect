/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import cn from "classnames";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import styles from "./Hero.module.sass";
import Icon from "../../../components/Icon";
import Player from "../../../components/Player";
import Modal from "../../../components/Modal";
import Connect from "../../../components/Connect";
import "./Floater.css";
// import Bid from "../../../components/Bid";

const items = [
  // {
  //   title: "the creator network®",
  //   creator: "Enrico Cole",
  //   currency: "1.00 ETH",
  //   price: "$3,618.36",
  //   avatar: "/images/content/avatar-creator.jpg",
  //   image: "https://www.pudgypenguins.io/images/site/top-img.gif",
  //   image2x: "https://www.pudgypenguins.io/images/site/top-img.gif",
  // },
  {
    title: "Marco carrillo®",
    creator: "Enrico Cole",
    currency: "2.00 ETH",
    price: "$2,477.92",
    avatar: "/images/content/avatar-creator.jpg",
    image: "/images/content/video-preview.jpg",
    image2x: "/images/content/video-preview@2x.jpg",
  },
  {
    title: "the creator network®",
    creator: "Enrico Cole",
    currency: "1.00 ETH",
    price: "$3,618.36",
    avatar: "/images/content/avatar-creator.jpg",
    image: "/images/content/video-preview.jpg",
    image2x: "/images/content/video-preview@2x.jpg",
  },
  {
    title: "Marco carrillo®",
    creator: "Enrico Cole",
    currency: "2.00 ETH",
    price: "$2,477.92",
    avatar: "/images/content/avatar-creator.jpg",
    image: "/images/content/video-preview.jpg",
    image2x: "/images/content/video-preview@2x.jpg",
  },
];

const SlickArrow = ({ currentSlide, slideCount, children, ...props }) => (
  <button {...props}>{children}</button>
);

const Hero = () => {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    nextArrow: (
      <SlickArrow>
        <Icon name='arrow-next' size='14' />
      </SlickArrow>
    ),
    prevArrow: (
      <SlickArrow>
        <Icon name='arrow-prev' size='14' />
      </SlickArrow>
    ),
  };

  const [visibleModalBid, setVisibleModalBid] = useState(false);

  return (
    <>
      <div className={cn("section", styles.section)}>
        <div className={cn("container", styles.container)}>
          <div className={styles.head}>
            <div className={styles.stage}>
              The Breakthrough in the NFT's world
            </div>

            <h2 className={cn("h1", styles.title)}>
              Swap Your NFTs Securely and Easily
            </h2>
            <p className={cn("body-1", styles.subtitle)}>
              Say goodbye to high gas fees on open sea. NFTSwap is a P2P
              decentralized and <strong>trustless</strong> dapp that lets you
              swap your NFTs simply and safely using the Terra exchange.
            </p>
            <br />
            <Link className={cn("button-filled", styles.button)} to='/'>
              Make a Trade
            </Link>
            <span style={{ marginRight: "16px" }} />
            <Link className={cn("button-stroke", styles.button)} to='/upload'>
              Check My Trades
            </Link>

            <div
              style={{
                margin: "0 auto",
                textAlign: "center",
                marginTop: "70px",
              }}
            >
              <img
                class='Floater'
                src='https://lh3.googleusercontent.com/PmEaLtImJTLlgbJKgYenuMAo6e4UTM791ckWPx_zPixAEX6tDzcf5toRwYaRcXzY70W32JEgQjK14MFZZW16lZnbjEwHYN8kAI3GXQ=w600'
              />
              <img
                class='Floater'
                src='https://lh3.googleusercontent.com/vKl8PjUg-q_2hh0OuO2389grv7Ti-BEqikuEZ_N2v_k9d7plJOeTntJkzVFeEs6wYPRD_F1euZeXnN8uLxJ04BdPgjR7zk6ozIIRmg=w306'
              />
              <img
                class='Floater'
                src='https://lh3.googleusercontent.com/V7883xf29gKS7vR9_eUvltiW7WJqDpi2TfIIf_GZcCXvCKcckGREjY9Kmd8smSAYQpPhPgFYiUKrHKBSZAoeyG9_dosKepkCNjos6A=w600'
              />
              <img
                class='Floater'
                src='https://lh3.googleusercontent.com/5bQRBSuaks8oWom_O049CPg7OKUVufkAx1GtLrAs_EZVbGB-09vvfU325Y8ZDK_95pMZlXLZm61IU-Dwp953hHwGe3NApJUCyvkN=w600'
              />
              <img
                class='Floater'
                src='https://lh3.googleusercontent.com/gxVdtkqI_fTWp3xQpKQd75d4wTjufLUHY9huzMBacEOUj36p7L4aNdRSrX3JsyZjhGt95WiX4HkizpboppQDzrBDrQJGBFxjnyQB=w600'
              />
              <img
                class='Floater'
                src='https://lh3.googleusercontent.com/HgJBjXZwASM8k_hCYwynrZfKJ9PUA4WgT-sCOkSexO2Kg0lptLxOwTADS0V6g83NeX-GzAZ5u4yBmPqJM9bRPw8PQWlvbmQhozdoMw=w600'
              />
              <img
                class='Floater'
                src='https://lh3.googleusercontent.com/SU8weJLu9jIJ29nLY3LlPbp00daQJOagK9LxL9tNuhL7WneCxEi61QmtToJk5Z4IOC4-_A7fvJ7ZRvf3tCjwk8I-_n-mGB-ZnXx2Qg=w600'
              />
              <img
                class='Floater'
                src='https://lh3.googleusercontent.com/JGKDfyj3fWxTjXMislM1vLcPQKGM5os5R2xXsYlFDQmpEfRp7eOcdvhsa18zsq4eLdkQfRmWbbmq_6bbwKWctTs6oWg6cu3RyZBh94w=w600'
              />
              <img
                class='Floater'
                src='https://lh3.googleusercontent.com/jSlDmqYPGvAJFa-CCrsdZf-sjSHmElmhkqvNlY9cFKne__WrHNYqo3KMZDKCdVtPACHSm7ZLOJoIP2U7IYaDiWpWAAaFe9Dl1UDI=w600'
              />
              <img
                class='Floater'
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8riIbeZ82UI2SyJX1g4uq8OHG7XlCCMECnZX-_7T6ajGcowB8iiWfO8-m5qNHzrVpq1s&usqp=CAU'
              />
            </div>
          </div>

          <div style={{ marginTop: "150px" }} />

          <div className={styles.wrapper}>
            <Slider className='creative-slider' {...settings}>
              {items.map((x, index) => (
                <div className={styles.slide} key={index}>
                  <div className={styles.row}>
                    <Player className={styles.player} item={x} />
                    <div className={styles.details}>
                      <div className={cn("h1", styles.subtitle)}>{x.title}</div>
                      <div className={styles.line}>
                        <div className={styles.item}>
                          <div className={styles.avatar}>
                            <img src={x.avatar} alt='Avatar' />
                          </div>
                          <div className={styles.description}>
                            <div className={styles.category}>Creator</div>
                            <div className={styles.text}>{x.creator}</div>
                          </div>
                        </div>
                        <div className={styles.item}>
                          <div className={styles.icon}>
                            <Icon name='stop' size='24' />
                          </div>
                          <div className={styles.description}>
                            <div className={styles.category}>Instant price</div>
                            <div className={styles.text}>3.5 ETH</div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.wrap}>
                        <div className={styles.info}>Current Bid</div>
                        <div className={styles.currency}>{x.currency}</div>
                        <div className={styles.price}>{x.price}</div>
                        <div className={styles.info}>Auction ending in</div>
                        <div className={styles.timer}>
                          <div className={styles.box}>
                            <div className={styles.number}>19</div>
                            <div className={styles.time}>Hrs</div>
                          </div>
                          <div className={styles.box}>
                            <div className={styles.number}>24</div>
                            <div className={styles.time}>mins</div>
                          </div>
                          <div className={styles.box}>
                            <div className={styles.number}>19</div>
                            <div className={styles.time}>secs</div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.btns}>
                        <button
                          className={cn("button", styles.button)}
                          onClick={() => setVisibleModalBid(true)}
                        >
                          Place a bid
                        </button>
                        <Link
                          className={cn("button-stroke", styles.button)}
                          to='/item'
                        >
                          View item
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
      <Modal
        visible={visibleModalBid}
        onClose={() => setVisibleModalBid(false)}
      >
        <Connect />
      </Modal>
    </>
  );
};

export default Hero;
