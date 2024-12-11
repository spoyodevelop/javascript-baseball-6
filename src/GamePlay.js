import InputView from './View/InputView.js';
import OutputView from './View/OutputView.js';

class GamePlay {
  #NumberMaker;

  constructor(numberMaker) {
    this.#NumberMaker = numberMaker;
  }

  checkMatch(userNumbers, numbers) {
    let ball = 0;
    let strike = 0;

    for (let i = 0; i < 3; i++) {
      if (userNumbers[i] === numbers[i]) strike++;
      if (userNumbers[i] !== numbers[i] && numbers.includes(userNumbers[i]))
        ball++;
    }

    return { ball, strike };
  }

  async playGame() {
    OutputView.displayWelcomeMessage();
    const { numbers } = new this.#NumberMaker();

    while (true) {
      const userNumbers = await InputView.getValidNumber();
      const { ball, strike } = this.checkMatch(userNumbers, numbers);
      OutputView.displayBallStrike(ball, strike);
      if (strike === 3) {
        OutputView.displayWinningMessage();
        return true; // 게임 종료 신호
      }
    }
  }
}
export default GamePlay;
