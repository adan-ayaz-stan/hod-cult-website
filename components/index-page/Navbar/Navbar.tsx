import React, { useRef } from "react";
import styles from "./main.module.css";

// ICONS
import { MdOutlineMenu } from "react-icons/md/index";
import Link from "next/link";

function Navbar() {
  const hamburgerRef: any = useRef();

  return (
    <div className={styles.main}>
      <div className={styles.submain}>
        <div className={styles.logo}>ADANAYAZ.COM</div>
        <div className={styles.menu_icon}>
          <input type="checkbox" ref={hamburgerRef} />
          <MdOutlineMenu style={{ height: "30px", width: "30px" }} />
        </div>
      </div>
      {/* <div className={styles.hidden_menu}>
        <p>
          <Link href={"/"}>Home</Link>
        </p>
        <p>
          <Link href={"/"}>About</Link>
        </p>
        <p>
          <Link href={"/"}>Contact</Link>
        </p>
      </div> */}
    </div>
  );
}

export default Navbar;
