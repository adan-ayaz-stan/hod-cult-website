import React, { useRef } from "react";
import styles from "./main.module.css";

// ICONS
import { BsDoorOpenFill } from "react-icons/bs/index";
import { useRouter } from "next/router";

function Navbar() {
  const router = useRouter();
  const logout = async () => {
    const data = await fetch("/api/logout").then((data) => data.json());
    if (data.status == "success") {
      router.push("/");
    }
  };

  return (
    <div className={styles.main}>
      <div className={styles.submain}>
        <div className={styles.logo}>LOGO.COM</div>
        <div className={styles.menu_icon} onClick={logout}>
          <input type="checkbox" />
          <BsDoorOpenFill style={{ height: "30px", width: "30px" }} />
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
