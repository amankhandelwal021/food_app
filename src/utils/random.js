export const getRandomPrice = (min = 1, max = 100) => {
  const randomPrice = (Math.random() * (max - min) + min).toFixed(2);
  return `$${randomPrice}`;
}

export const getRandomRating = (min = 1, max = 5) => {
  const randomRating = (Math.random() * (max - min) + min).toFixed(2);
  return randomRating;
}

export const getRandomOrderNumber = (min = 1000, max = 9999) => {
  const randomOrderNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomOrderNumber;
}
