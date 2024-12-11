import { Console } from '@woowacourse/mission-utils';
import InputView from './View/InputView.js';
import NumberMaker from './NumberMaker.js';
import OutputView from './View/OutputView.js';

class App {
  async play() {
    function checkMatch(userNumbers, numbers) {
      let ball = 0;
      let strike = 0;

      for (let i = 0; i < 3; i++) {
        if (userNumbers[i] === numbers[i]) strike++;
        if (userNumbers[i] !== numbers[i] && numbers.includes(userNumbers[i]))
          ball++;
      }

      return { ball, strike };
    }
    async function playGame() {
      OutputView.displayWelcomeMessage();
      const { numbers } = new NumberMaker();
      console.log(numbers);
      while (true) {
        const userNumbers = await InputView.getValidNumber();
        const { ball, strike } = checkMatch(userNumbers, numbers);
        OutputView.displayBallStrike(ball, strike);
        if (strike === 3) {
          OutputView.displayWinningMessage();
          break;
        }
      }
    }

    async function playGames() {
      while (true) {
        const retry = await InputView.getValidRetry();
        if (retry) await playGame();
        if (!retry) break;
      }
    }
    await playGame();
    await playGames();
  }
}

export default App;
