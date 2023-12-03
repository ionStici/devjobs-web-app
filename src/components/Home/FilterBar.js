import styles from "./../../styles/FilterBar.module.scss";
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

  function handleSetFilter({ target }) {
    setJobFilter({
      title: title,
      loc: location,
      fullTime: fullTime,
    });

    if (smallScreen && target.classList.contains(styles.smallScreenSearch)) {
      handleShowFilter();
    }
  }

  function handleShowFilter() {
    const popup = filterPopup.current;

    if (popup.classList.contains(styles.show_popup)) {
      popup.classList.remove(styles.show_popup);
      return;
    }

    if (!popup.classList.contains(styles.show_popup)) {
      popup.classList.add(styles.show_popup);
    }
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
          <div className={styles.layout} onClick={handleShowFilter}></div>
          <div className={styles.wrapper}>
            <Image
              className={styles.icon_loc}
              src={assets.desktop.iconLocation}
              alt=""
              width={17}
              height={24}
            />
            <select
              style={{ opacity: !location && "0.5" }}
              className={styles.select_loc}
              value={location}
              onChange={({ target }) => setLocation(target.value)}
            >
              <option value="">Filter by location...</option>
              {locations.map((loc) => {
                return (
                  <option key={loc} value={loc}>
                    {loc}
                  </option>
                );
              })}
            </select>

            <label className={styles.checkbox_label}>
              <div
                style={
                  fullTime ? { backgroundColor: "#5964E0", opacity: 1 } : {}
                }
              >
                {fullTime && (
                  <img src={assets.desktop.iconCheck} alt="" width={16} />
                )}
              </div>
              <span>Full Time Only</span>
              <input
                type="checkbox"
                checked={fullTime}
                onChange={({ target }) => setFulltime(target.checked)}
              />
            </label>

            <Button styles={styles.smallScreenSearch} onClick={handleSetFilter}>
              Search
            </Button>
          </div>
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
