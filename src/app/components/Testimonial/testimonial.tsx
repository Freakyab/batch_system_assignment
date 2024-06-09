import React from "react";
import styles from "./testimonial.module.scss";
import Image from "next/image";
function Testimonial() {
  return (
    <div className={styles.container}>
      <div className={styles.headerDiv}>
        <p>Testimonial</p>
        <h2>what our users say about us?</h2>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.leftContainer}>
          <Image
            src="/images/ellipse.png"
            alt="eclipse"
            width={500}
            height={500}
            className={styles.backgroundImage}
          />
          <Image
            src="/images/testimonial.png"
            alt="testimonial"
            width={500}
            height={500}
            className={styles.testimonialImage}
          />
        </div>
        <div className={styles.rightContainer}>
          <h3>the best financial accounting app ever!</h3>
          <p>
            “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
            ultricies. In ultrices malesuada elit mauris etiam odio. Duis
            tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus,
            diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor
            neque lorem sapien, suspendisse aliquam.”
          </p>
          <Image
            src="/images/testimonialImage.png"
            alt="testimonialImage"
            width={150}
            height={150}
            className={styles.testimonialImage}
            /
          >
          <h4>nick jonas</h4>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
