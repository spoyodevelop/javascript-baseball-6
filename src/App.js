import { Console } from '@woowacourse/mission-utils';
import InputView from './View/InputView.js';
import NumberMaker from './NumberMaker.js';

class App {
  async play() {
    const userNumbers = await InputView.getValidNumber();

    const { numbers } = new NumberMaker();

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
      const { numbers } = new NumberMaker();
      while (true) {
        const userNumbers = await InputView.getValidNumber();
        const { ball, strike } = checkMatch(userNumbers, numbers);
      }
    }
  }
}
new App().play();

export default App;
