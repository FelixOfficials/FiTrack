import express from "express";
import exerciseRoute from "./routes/exerciseRoute";

const app = express();

app.use(express.json());

app.use("/api", exerciseRoute)

app.listen(3000, () => {
    console.log("Server running on port 3000");
});