import { Console } from '@woowacourse/mission-utils';
import InputView from './View/InputView.js';
import GamePlay from './GamePlay.js';
import NumberMaker from './NumberMaker.js';

class App {
  async play() {
    const gamePlay = new GamePlay(NumberMaker);
    async function playGames() {
      do {
        const isWon = await gamePlay.playGame();
        if (!isWon) break;
      } while (await InputView.getValidRetry()); // retry 여부 체크
    }

    await playGames();
  }
}

export default App;
