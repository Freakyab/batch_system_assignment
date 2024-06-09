import React from "react";
import styles from "./faq.module.scss";

function Faq() {
  return (
    <div className={styles.conatiner}>
      <div className={styles.wrapper}>
        <h2 className={styles.header}>Faq</h2>
        <p className={styles.headerDesc}>Frequently asked questions</p>
        <div className={styles.faqConatiner}>
          {Array(6)
            .fill(0)
            .map((_, index) => (
              <div
                className={`${
                  index % 3 == 0 || index == 4
                    ? styles.leftContainer
                    : styles.rightContainer
                }`}>
                <p className={styles.question}>
                  the best financial accounting app ever!
                </p>
                <p className={styles.answer}>
                  “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
                  ultricies. In ultrices malesuada elit mauris.
                </p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Faq;
