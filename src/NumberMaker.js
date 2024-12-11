import { MissionUtils } from '@woowacourse/mission-utils';

class NumberMaker {
  #numbers;

  constructor() {
    const computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    this.#numbers = computer;
  }

  get numbers() {
    return this.#numbers;
  }
}

export default NumberMaker;
