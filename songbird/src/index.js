import './index.html';
import './pages/quize/quize.html'
import './pages/result/result.html'
import './pages/train/train.html'
import './index.scss';
import { painTrainPage } from './modules/painTrainPage';
import { shuffle } from './modules/shuffleArray';
import birdsData from './modules/bird';
import { quizeItem } from './modules/quizeItem';
import { quizeAudio } from './modules/quizeAudio';
import { onClickList } from './modules/onClickList';
import { onClickButton } from './modules/onClickButton';
import { onClickButtonForRestart } from './modules/onClickButtonForRestart';

const score = document.querySelector(".score");

const winnerPage = document.querySelector(".result-winner");
const resultStartAgain = document.querySelector(".result-start-again")
const resultScore = document.querySelector(".result-score")
const buttonNextQuestion = document.querySelector(".bottom-button");
const a = localStorage.getItem('saveScore');
localStorage.setItem('isFinishedGame', false);
const button = document.querySelector(".again-btn")
if(buttonNextQuestion) {
    buttonNextQuestion.disabled = true
}


if(location.pathname === '/result.html' && location.search.split('?')[1] === 'isWin=true') {
    winnerPage.style.display = "flex"
    resultStartAgain.style.display = "none"
}
if(location.pathname === '/result.html' && location.search.split('?')[1] === 'isWin=false') {
    resultScore.innerHTML = `Your finall score: ${a}`
}

painTrainPage()
quizeItem(shuffle(birdsData))
quizeAudio()
onClickList()
onClickButton()

onClickButtonForRestart(button)


let scoreResult = 0;
score.innerHTML = scoreResult;


