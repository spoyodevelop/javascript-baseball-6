import { Console } from '@woowacourse/mission-utils';
import validateNumber from '../Validation/validateNumber.js';

const InputView = {
  async getValidNumber() {
    const input = await Console.readLineAsync('숫자를 입력해주세요 : ');
    const number = validateNumber(input);

    return number;
  },
};

export default InputView;
