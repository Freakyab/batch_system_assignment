import React from "react";
import styles from "./footer.module.scss";
import Image from "next/image";

function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.contact}>
          <Image src="/images/logo.png" alt="logo" width={100} height={100} />
          <div className={styles.contactDesc}>
            <p className={styles.svgIcon}>
              <span>
                <Image
                  src={"/images/svg/msg.svg"}
                  alt="menu"
                  width={20}
                  height={20}
                  className={styles.starIcon}
                />
              </span>
              help@frybix.com
            </p>
            <p className={styles.svgIcon}>
              <span>
                <Image
                  src={"/images/svg/phone.svg"}
                  alt="menu"
                  width={20}
                  height={20}
                />
              </span>
              +1 234 456 678 89
            </p>
          </div>
        </div>
        <div className={styles.links}>
          <h2>Links</h2>
          <p>home</p>
          <p>About us</p>
          <p>Bookings</p>
          <p>blog</p>
        </div>
        <div className={styles.terms}>
          <h2>legal</h2>
          <p>terms of use</p>
          <p>privacy policy</p>
          <p>cookie policy</p>
        </div>
        <div className={styles.products}>
          <h2>product</h2>
          <p>take tour</p>
          <p>live chat</p>
          <p>reviews</p>
        </div>
        <div className={styles.newsLetter}>
          <h2>Newsletter</h2>
          <p>Stay up to date</p>
          <div className={styles.input}>
            <input type="text" placeholder="Your email" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>
      <div className={styles.borderLine}></div>
      <p>Copyright 2022 uifry.com all rights reserved</p>
    </div>
  );
}

export default Footer;
