import birdsData from "./bird";
import { onClickList } from "./onClickList";
import { quizeAudio } from "./quizeAudio";
import { quizeItem } from "./quizeItem";
import { shuffle } from "./shuffleArray";

export const onClickButton = () => {
  const buttonNextQuestion = document.querySelector(".bottom-button");
  
  buttonNextQuestion.onclick = function (e) {
    quizeItem(shuffle(birdsData));
    quizeAudio();
    onClickList();
  };
};
