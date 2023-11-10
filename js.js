const buttons = document.querySelectorAll("button");
const audios = document.querySelectorAll("audio");

buttons.forEach((item, index) => {
  item.addEventListener("click", () => {
    audios.forEach((seskes) => {
      seskes.pause();
      seskes.currentTime = 0;
    });
    audios[index].play();
  });
});
