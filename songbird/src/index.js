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

painTrainPage()
quizeItem(shuffle(birdsData))
quizeAudio()
onClickList()
onClickButton()



