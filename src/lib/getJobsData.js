import fs from "fs/promises";
import path from "path";

export async function getJobsData() {
  const filePath = path.join(process.cwd(), "src", "data", "data.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);
  return data;
}
