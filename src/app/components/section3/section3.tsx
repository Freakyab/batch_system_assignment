import React from "react";
import styles from "./section3.module.scss";
import Image from "next/image";

function Section3() {
  return (
    <div className={styles.container}>
      <div className={styles.leftContainer}>
        <p className={styles.title}>advantages</p>
        <p className={styles.question}>why choose Uifry?</p>
        <p className={styles.advantagetitle}>
          <span>
            <Image
              src={"/images/svg/bell.svg"}
              alt="menu"
              width={40}
              height={40}
              className={styles.starIcon}
            />
          </span>
          clever notifications</p>
        <p className={styles.advantageDesc}>
          Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies.
          In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et
          blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit
          nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien,
          suspendisse aliquam.
        </p>
      </div>
      <div className={styles.rightContainer}>
        <Image
          src={"/images/star.png"}
          alt="menu"
          width={50}
          height={50}
          className={styles.starIcon}
        />
        <Image
          src={"/images/iPhone-13-2.png"}
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
    </div>
  );
}

export default Section3;
