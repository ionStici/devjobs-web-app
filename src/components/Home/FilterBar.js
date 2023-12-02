import styles from "./../../styles/Jobs.module.scss";
import Image from "next/image";
import { useEffect, useState } from "react";
import { assets } from "@/data/assets";
import Button from "../ui/Button";

function FilterBar({ locations, setJobFilter }) {
  const [less375, setLess375] = useState(null);
  const [title, setTitle] = useState("");
  const [loc, setLoc] = useState("");
  const [fullTime, setFulltime] = useState(false);

  useEffect(() => {
    setLess375(window.matchMedia("(max-width: 375px)").matches);
    const mediaQuery = window.matchMedia("(max-width: 375px)");
    const handleChange = (e) => setLess375(e.matches ? true : false);
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return (
    <section className={styles.filter_bar_section}>
      <form onSubmit={(e) => e.preventDefault()}>
        {!less375 && (
          <Image
            src={assets.desktop.iconSearch}
            alt=""
            width={24}
            height={24}
          />
        )}

        <input
          type="text"
          placeholder="Filter by title…"
          value={title}
          onChange={({ target }) => setTitle(target.value)}
        />

        <select>
          {locations.map((loc) => {
            return (
              <option key={loc} value={loc}>
                {loc}
              </option>
            );
          })}
        </select>

        <input type="checkbox" />

        {less375 && (
          <Button
            styles={styles.filter_btn}
            onClick={() => console.log("filter")}
          >
            <Image
              src={assets.mobile.iconFilter}
              alt=""
              width={20}
              height={20}
            />
          </Button>
        )}
        <Button
          styles={styles.search_btn}
          onClick={() => console.log("search")}
        >
          {less375 ? (
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
