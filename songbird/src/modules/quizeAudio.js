function getRandomArrayElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export const quizeAudio = () => {
  const liItem = document.querySelectorAll(".list-item");
 // console.log(liItem);
  const array = [];
  const createArray = () => {
    liItem.forEach((item) => {
      return array.push(item.getAttribute("audio"));
    });
  };
  createArray();

  const topQuestion = document.querySelector(".top-question");
  let element = getRandomArrayElement(array);

  const audio = document.createElement("AUDIO");
  audio.setAttribute("src", `${element}`);
  audio.setAttribute("controls", "controls");
  audio.classList.add("audio-quize");
  topQuestion.appendChild(audio);
};
