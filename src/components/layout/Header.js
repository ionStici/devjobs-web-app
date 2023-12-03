import styles from "./../../styles/Header.module.scss";
import { useState, useEffect } from "react";
import { assets } from "@/data/assets";
import Image from "next/image";
import Link from "next/link";

const { iconMoon, iconSun, logo } = assets.desktop;

function Header() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e) => setTheme(e.matches ? "dark" : "light");
    mediaQuery.addEventListener("change", handleChange);
    setTheme(mediaQuery.matches ? "dark" : "light");
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    const { body } = document;
    body.classList = "";
    body.classList.add(theme === "dark" ? "dark" : "light");
  }, [theme]);

  function handleThemeSwitch() {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  }

  return (
    <>
      <header className={styles.header}>
        <div className={styles.wrapper}>
          <Link href="/">
            <Image
              src={logo}
              alt="DevJobs Logo"
              width={115}
              height={32}
              priority
            />
          </Link>
          <button onClick={handleThemeSwitch}>
            <Image src={iconSun} alt="" width={20} height={20} />
            <div className={styles.toggle}>
              <div
                className={`${styles.circle} ${
                  theme === "dark" ? styles.to_left : ""
                }`}
              ></div>
            </div>
            <Image src={iconMoon} alt="" width={12} height={12} />
          </button>
        </div>
      </header>
    </>
  );
}

export default Header;
