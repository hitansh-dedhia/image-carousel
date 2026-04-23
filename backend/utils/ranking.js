// utils/ranking.js

// Calculate score for one image
export const calculateScore = (image, categoryStats) => {
  const { clicks, views, lastViewedAt, category } = image;

  // Base score
  const baseScore = clicks * 3 + views * 1;

  // -------------------------
  // Recency Boost
  // -------------------------
  let recencyBoost = 0;

  if (lastViewedAt) {
    const now = new Date();
    const lastViewed = new Date(lastViewedAt);

    const diffInHours = (now - lastViewed) / (1000 * 60 * 60);

    recencyBoost = Math.max(0, 100 - diffInHours);
  }

  // -------------------------
  // Category Boost
  // -------------------------
  const categoryBoost = categoryStats[category] || 0;

  // Final score
  return baseScore + recencyBoost + categoryBoost;
};

// Sort images by score
export const sortImagesByRanking = (images, categoryStats) => {
  return images
    .map((img) => ({
      ...img,
      score: calculateScore(img, categoryStats),
    }))
    .sort((a, b) => b.score - a.score);
};