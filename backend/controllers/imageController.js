// controllers/imageController.js

import images from "../models/imageData.js";
import { sortImagesByRanking } from "../utils/ranking.js";

// Existing
export const getAllImages = (req, res) => {
  const rankedImages = sortImagesByRanking(images);
  res.json(rankedImages);
};

// ✅ Update views + lastViewedAt
export const updateView = (req, res) => {
  const id = parseInt(req.params.id);

  const image = images.find((img) => img.id === id);

  if (!image) {
    return res.status(404).json({ message: "Image not found" });
  }

  image.views += 1;
  image.lastViewedAt = new Date();

  res.json(image);
};

// ✅ Update clicks
export const updateClick = (req, res) => {
  const id = parseInt(req.params.id);

  const image = images.find((img) => img.id === id);

  if (!image) {
    return res.status(404).json({ message: "Image not found" });
  }

  image.clicks += 1;

  res.json(image);
};