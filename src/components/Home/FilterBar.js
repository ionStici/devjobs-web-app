import styles from "./../../styles/Jobs.module.scss";
import Image from "next/image";
import { useEffect, useState } from "react";
import { assets } from "@/data/assets";
import { useRef } from "react";
import Button from "../ui/Button";

function FilterBar({ locations, setJobFilter }) {
  const [smallScreen, setSmallScreen] = useState(null);
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [fullTime, setFulltime] = useState(false);
  const filterPopup = useRef(null);

  useEffect(() => {
    setSmallScreen(window.matchMedia("(max-width: 768px)").matches);
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    const handleChange = (e) => setSmallScreen(e.matches ? true : false);
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  function handleSetFilter() {
    setJobFilter({
      title: title,
      loc: location,
      fullTime: fullTime,
    });
  }

  function handleShowFilter() {
    filterPopup.current.classList.add(styles.show_popup);
  }

  return (
    <section className={styles.filter_bar_section}>
      <form onSubmit={(e) => e.preventDefault()}>
        {!smallScreen && (
          <Image
            src={assets.desktop.iconSearch}
            alt=""
            width={24}
            height={24}
          />
        )}

        <input
          className={styles.input_title}
          type="text"
          placeholder="Filter by title…"
          value={title}
          onChange={({ target }) => setTitle(target.value)}
        />

        <div className={styles.filter_popup} ref={filterPopup}>
          <select
            value={location}
            onChange={({ target }) => setLocation(target.value)}
          >
            {locations.map((loc) => {
              return (
                <option key={loc} value={loc}>
                  {loc}
                </option>
              );
            })}
          </select>

          <input
            type="checkbox"
            checked={fullTime}
            onChange={({ target }) => setFulltime(target.checked)}
          />
        </div>

        {smallScreen && (
          <Button styles={styles.filter_btn} onClick={handleShowFilter}>
            <Image
              src={assets.mobile.iconFilter}
              alt=""
              width={20}
              height={20}
            />
          </Button>
        )}
        <Button styles={styles.search_btn} onClick={handleSetFilter}>
          {smallScreen ? (
            <Image
              src={assets.desktop.iconSearchWhite}
              alt=""
              width={24}
              height={24}
            />
          ) : (
            "Search"
          )}
        </Button>
      </form>
    </section>
  );
}

export default FilterBar;
