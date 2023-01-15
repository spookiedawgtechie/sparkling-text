(index = 0), (interval = 1000);

const random_position = (min, max) => {
  let a = Math.floor(Math.random() * (max - min + 1)) + min;
  return a
};

const animate = (star) => {
  star.style.setProperty("--star-left", `${random_position(-10, 100)}%`);
  star.style.setProperty("--star-top", `${random_position(-40, 80)}%`);

  star.style.animation = "none";
  star.offsetHeight;
  star.style.animation = "";
};
for (const star of document.getElementsByClassName("glow-star")) {
  setTimeout(() => {
    animate(star);
    setInterval(() => animate(star), 1000);
  }, index++ * (interval / 3));
}
