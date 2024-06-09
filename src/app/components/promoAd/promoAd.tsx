import React from "react";
import styles from "./promoAd.module.scss";
import Image from "next/image";
function PromoAd() {
  return (
    <div className={styles.conatiner}>
      <Image
        src="/images/star.png"
        alt="star"
        width={50}
        height={50}
        className={styles.starImage1}
      />
      <Image
        src="/images/star.png"
        alt="star"
        width={50}
        height={50}
        className={styles.starImage2}
      />
      <div className={styles.wrapper}>
        <Image
          src="/images/ellipse.png"
          alt="ellipse"
          width={500}
          height={500}
          className={styles.backgroundImage}
        />
        <Image
          src="/images/promoAd.png"
          alt="promoAd"
          width={1500}
          height={1500}
          className={styles.promoAdImage}
        />
      </div>
    </div>
  );
}

export default PromoAd;
