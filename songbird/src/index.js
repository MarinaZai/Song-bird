import './index.html';
import './pages/quize/quize.html'
import './pages/result/result.html'
import './pages/train/train.html'
import './index.scss';
import { painTrainPage } from './modules/painTrainPage';
import { shuffle } from './modules/shuffleAray';
import birdsData from './modules/bird';
import { quizeItem } from './modules/quizeItem';

painTrainPage()
quizeItem(shuffle(birdsData))

