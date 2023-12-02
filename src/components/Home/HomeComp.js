import Jobs from "./Jobs";
import FilterBar from "./FilterBar";

function HomeComp({ jobs }) {
  const locations = [...new Set(jobs.map(({ location }) => location))];

  return (
    <>
      <FilterBar locations={locations} />
      <Jobs jobs={jobs} />
    </>
  );
}

export default HomeComp;
