import Jobs from "./Jobs";
import FilterBar from "./FilterBar";
import { useState } from "react";

function HomeComp({ jobs }) {
  const [jobFilter, setJobFilter] = useState({
    title: "",
    loc: "",
    fullTime: false,
  });

  const locations = [...new Set(jobs.map(({ location }) => location))];

  return (
    <>
      <FilterBar locations={locations} setJobFilter={setJobFilter} />
      <Jobs jobs={jobs} jobFilter={jobFilter} />
    </>
  );
}

export default HomeComp;
