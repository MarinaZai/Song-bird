import birdsData from "./bird";
import { clearBlocksForNewQuestion } from "./clearBlocksForNewQuestion";
import { onClickList } from "./onClickList";
import { quizeAudio } from "./quizeAudio";
import { quizeItem } from "./quizeItem";
import { shuffle } from "./shuffleArray";

export const onClickButton = (isFinishedGame) => {
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
    localStorage.setItem('saveScore', `${saveScore}`);
    localStorage.setItem('isFinishedGame', false);
    const isFinishedGame = localStorage.getItem(isFinishedGame)
    buttonNextQuestion.disabled = isFinishedGame !== true
    if (pathClick === 6) {
      if (saveScore === 30) {
        location = "marinazai-JSFE2022Q3/result.html?isWin=true";
      } else {
        location = "marinazai-JSFE2022Q3/result.html?isWin=false";
      }
    }
  };
};
