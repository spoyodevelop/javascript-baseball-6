import { Console } from '@woowacourse/mission-utils';

const OutputView = {
  printMessage(message) {
    Console.print(message);
  },

  displayBallStrike(ball, strike) {
    let ballString = '';
    let strikeString = '';
    if (ball > 0) {
      ballString += `${ball}볼`;
    }
    if (strike > 0) {
      strikeString += `${strike}스트라이크`;
    }
    if (ball === 0 && strike === 0) this.printMessage('낫싱');
    else this.printMessage(`${ballString} ${strikeString}`);
  },
};

export default OutputView;
d;
