type RatingResultType = {
  fullStars: number;
  hasHalfStar: boolean;
  outlineStars: number;
};

export const ratingResult = (rating: number): RatingResultType => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const outlineStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
  return { fullStars, hasHalfStar, outlineStars };
};
