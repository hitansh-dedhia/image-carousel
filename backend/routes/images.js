// routes/images.js

import express from "express";
import {
  getAllImages,
  updateView,
  updateClick
} from "../controllers/imageController.js";

const router = express.Router();

router.get("/images", getAllImages);

// ✅ New routes
router.post("/images/:id/view", updateView);
router.post("/images/:id/click", updateClick);

export default router;