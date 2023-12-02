import Image from "next/image";
import { useState } from "react";

function FilterBar({ locations, setJobFilter }) {
  const iconSearch = "assets/desktop/icon-search.svg";
  const iconLocation = "assets/desktop/icon-location.svg";
  const iconCheck = "assets/desktop/icon-check.svg";

  return (
    <section>
      <input type="text" />

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
    </section>
  );
}

export default FilterBar;
