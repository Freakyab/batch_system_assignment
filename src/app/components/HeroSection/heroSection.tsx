import React from "react";
import styles from "./heroSection.module.scss";
import Image from "next/image";
import { FaRegCirclePlay } from "react-icons/fa6";

function HeroSection() {
  return (
    <div className={styles.container}>
      <Image
        src={"/images/star.png"}
        alt="menu"
        width={50}
        height={50}
        className={styles.starIcon}
      />
      <div className={styles.leftContainer}>
        <div className={styles.backgroundPhoto}>
          <Image
            src={"/images/ellipse.png"}
            alt="Hero"
            width={500}
            height={500}
            className={styles.heroImage}
          />
          <div className={styles.heroPara}>
            <h2>make the best financial decisions</h2>
            <p>
              Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
              faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
            </p>
            <div>
              <button className={styles.btn}>Get Started</button>
              <span>
                <FaRegCirclePlay />
                <p>watch video</p>
              </span>
            </div>
            <div className={styles.heroTags}>
              <Image
                src={"/images/star.png"}
                alt="menu"
                width={50}
                height={50}
                className={styles.starIcon}
              />
              <Image
                src={"/images/tap.png"}
                alt="Hero"
                width={500}
                height={500}
                className={styles.X}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.rightContainer}>
        <div className={styles.backgroundPhoto}>
          <Image
            src={"/images/iPhone-13-1.png"}
            alt="Hero"
            width={400}
            height={400}
            className={styles.iphone1Image}
          />
          <Image
            src={"/images/iPhone-13-2.png"}
            alt="Hero"
            width={400}
            height={400}
            className={styles.iphone2Image}
          />
          <Image
            src={"/images/iPhone-13-1.png"}
            alt="Hero"
            width={400}
            height={400}
            className={styles.iphone3Image}
          />
          <Image
            src={"/images/rings.png"}
            alt="Hero"
            width={450}
            height={450}
            className={styles.ringsImage}
          />
          <Image
            src={"/images/star.png"}
            alt="menu"
            width={50}
            height={50}
            className={styles.starIcon}
          />
          <Image
            src={"/images/ellipse.png"}
            alt="Hero"
            width={500}
            height={500}
            className={styles.backImage}
          />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
