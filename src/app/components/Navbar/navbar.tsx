import React from "react";
import styles from "./navbar.module.scss";
import Image from "next/image";

function Navbar() {
  return (
    <div className={styles.container}>
      <nav>
        <div className={styles.leftContainer}>
          <Image
            src={"/images/logo.png"}
            alt="Logo"
            width={200}
            height={200}
            className={styles.logo}
          />
          <p>Home</p>
          <p>About us</p>
          <p>Pricing</p>
          <p>Features</p> 
        </div>
        <div className={styles.rightContainer}>
            <button className={styles.downloadBtn}>Download</button>
            <Image 
                src={"/images/star.png"}
                alt="menu"
                width={50}
                height={50}
                className={styles.starIcon}
            />
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
