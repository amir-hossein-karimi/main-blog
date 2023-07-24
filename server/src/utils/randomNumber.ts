function getRandomInt() {
  let min = 1000;
  let max = 9999;

  min = Math.ceil(min);
  max = Math.floor(max);

  const random = Math.floor(Math.random() * (max - min) + min).toString();

  return random;
}

export default getRandomInt;
