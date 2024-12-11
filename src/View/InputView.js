import { Console } from '@woowacourse/mission-utils';

const InputView = {
  async getValidShoppingCart() {

      const input = await Console.readLineAsync(
        '숫자를 입력해주세요 : '

      );

      const shoppingCart = validateShoppingCart(input);

     
    }
  },
};

export default InputView;
