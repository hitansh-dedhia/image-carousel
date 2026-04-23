// controllers/imageController.js

import images from "../models/imageData.js";
import { sortImagesByRanking } from "../utils/ranking.js";

// ✅ In-memory category tracker
const categoryStats = {};

// -----------------------------
// GET ALL IMAGES (with ranking)
// -----------------------------
export const getAllImages = (req, res) => {
  const rankedImages = sortImagesByRanking(images, categoryStats);
  res.json(rankedImages);
};

// -----------------------------
// UPDATE VIEW
// -----------------------------
export const updateView = (req, res) => {
  const id = parseInt(req.params.id);

  const image = images.find((img) => img.id === id);

  if (!image) {
    return res.status(404).json({ message: "Image not found" });
  }

  // Update image stats
  image.views += 1;
  image.lastViewedAt = new Date();

  // ✅ Update category stats
  const category = image.category;

  if (!categoryStats[category]) {
    categoryStats[category] = 0;
  }

  categoryStats[category] += 1;

  // (Optional) Debug
  console.log("Category Stats:", categoryStats);

  res.json(image);
};

// -----------------------------
// UPDATE CLICK
// -----------------------------
export const updateClick = (req, res) => {
  const id = parseInt(req.params.id);

  const image = images.find((img) => img.id === id);

  if (!image) {
    return res.status(404).json({ message: "Image not found" });
  }

  // Update image stats
  image.clicks += 1;

  // ✅ Update category stats
  const category = image.category;

  if (!categoryStats[category]) {
    categoryStats[category] = 0;
  }

  categoryStats[category] += 1;

  // (Optional) Debug
  console.log("Category Stats:", categoryStats);

  res.json(image);
};