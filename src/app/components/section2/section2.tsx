import React from "react";
import styles from "./section2.module.scss";
import Image from "next/image";
import { PiCubeTransparentLight } from "react-icons/pi";

function Section2() {
  return (
    <div className={styles.container}>
      <div className={styles.leftContainer}>
        <Image
          src={"/images/star.png"}
          alt="menu"
          width={50}
          height={50}
          className={styles.starIcon}
        />
        <Image
          src={"/images/iPhone-13-1.png"}
          alt="Hero"
          width={400}
          height={400}
          className={styles.iphone3Image}
        />
        <Image
          src={"/images/ellipse.png"}
          alt="Hero"
          width={500}
          height={500}
          className={styles.backImage}
        />
        <Image
          src={"/images/rings.png"}
          alt="Hero"
          width={450}
          height={450}
          className={styles.ringsImage}
        />
      </div>
      <div className={styles.rightContainer}>
        <h2 className={styles.title}>Feauters</h2>
        <p className={styles.substitle}>uifry premium</p>
        <div>
          <span className={styles.featureTitle}>
            <span>
              <Image
                src={"/images/svg/star-05.svg"}
                alt="menu"
                width={20}
                height={20}
              />
            </span>
            budgeting intervals
          </span>
          <p className={styles.featureDesc}>
            Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
            faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
          </p>
          <span className={styles.featureTitle}>
            <span>
              <Image
                src={"/images/svg/cube-02.svg"}
                alt="menu"
                width={20}
                height={20}
              />
            </span>
            budgeting intervals
          </span>
          <p className={styles.featureDesc}>
            Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
            faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
          </p>
          <span className={styles.featureTitle}>
            <span>
              <Image
                src={"/images/svg/cube.svg"}
                alt="menu"
                width={20}
                height={20}
              />
            </span>
            budgeting intervals
          </span>
          <p className={styles.featureDesc}>
            Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
            faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
          </p>
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

export default Section2;
