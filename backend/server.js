// server.js

import express from "express";
import testRoutes from "./routes/testRoutes.js";
import imageRoutes from "./routes/images.js";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

app.use(cors());

// Middleware (for JSON)
app.use(express.json());

// Routes
app.use("/", testRoutes);

app.use("/", imageRoutes);

// Server start
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});