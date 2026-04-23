// utils/ranking.js

export const calculateScore = (image) => {
  const { clicks, views, lastViewedAt } = image;

  // Base score
  const baseScore = clicks * 3 + views * 1;

  // Recency boost
  let recencyBoost = 0;

  if (lastViewedAt) {
    const now = new Date();
    const lastViewed = new Date(lastViewedAt);

    // Difference in hours
    const diffInHours = (now - lastViewed) / (1000 * 60 * 60);

    // More recent → higher boost (simple formula)
    recencyBoost = Math.max(0, 100 - diffInHours);
  }

  return baseScore + recencyBoost;
};

// Sort images by score (descending)
export const sortImagesByRanking = (images) => {
  return images
    .map((img) => ({
      ...img,
      score: calculateScore(img),
    }))
    .sort((a, b) => b.score - a.score);
};