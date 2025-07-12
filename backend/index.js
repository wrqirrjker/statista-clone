import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

const chartData = [
  { year: "2021", value: 400 },
  { year: "2022", value: 600 },
  { year: "2023", value: 800 },
  { year: "2024", value: 900 }
];

app.get("/api/data", (req, res) => {
  res.json(chartData);
});

app.post("/api/data", (req, res) => {
  const { year, value } = req.body;
  if (!year || typeof value !== "number") {
    return res.status(400).json({ error: "Invalid input." });
  }
  chartData.push({ year, value });
  res.status(201).json({ message: "Data added.", data: chartData });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
