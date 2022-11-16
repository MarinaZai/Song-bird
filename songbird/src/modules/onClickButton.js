import birdsData from "./bird";
import { clearBlocksForNewQuestion } from "./clearBlocksForNewQuestion";
import { onClickList } from "./onClickList";
import { quizeAudio } from "./quizeAudio";
import { quizeItem } from "./quizeItem";
import { shuffle } from "./shuffleArray";

export const onClickButton = () => {
  const buttonNextQuestion = document.querySelector(".bottom-button");
  const score = document.querySelector(".score");

  let pathClick = 0;

  buttonNextQuestion.onclick = function (e) {
    pathClick++;
    console.log(pathClick);
    let saveScore = (+score.innerHTML);
    console.log(saveScore)
    clearBlocksForNewQuestion();
    quizeItem(shuffle(birdsData));
    quizeAudio();
    onClickList();
    if (pathClick === 6) {
      if (saveScore === 30) {
        console.log("winner")
        location = "result.html?isWin=true";
      } else {
        console.log("luzer")
        location = "result.html";
      }
    }
  };
};
