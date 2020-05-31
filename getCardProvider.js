const messages = {
   1: 'MasterCard',
   2: 'American Express',
   3: 'Visa',
   10: 'Incorrect number',
   11: 'Cannot recognize card provider',
};

module.exports.getCardProvider = (cardNumber) => {
   if (isCardNumberVadid(cardNumber)) {
      return getProvider(cardNumber);
   } else {
      return 'Incorrect number';
   }
};

function isCardNumberVadid(cardNumber) {
   const tempCardNumber = '00000' + cardNumber.toString();
   const normCardNumber = tempCardNumber.substring(tempCardNumber.length - 16).split('');

   let sum1 = 0;
   let sum2 = 0;

   normCardNumber.forEach((element, index) => {
      const isIndexEven = index % 2;
      if (isIndexEven === 0) {
         sum1 = element * 2 > 9 ? sum1 + 1 + ((element * 2) % 10) : sum1 + element * 2;
      } else {
         sum2 = sum2 + element * 1;
      }
   });

   return !((sum1 + sum2) % 10);
}

function getProvider(cardNumber) {
   const cardNumberStr = cardNumber.toString();
   if (
      cardNumberStr.length === 16 &&
      isIncluded(cardNumberStr, 2, ['51', '52', '53', '54', '55'])
   ) {
      return messages[1];
   } else if (cardNumberStr.length === 15 && isIncluded(cardNumberStr, 2, ['34', '37'])) {
      return messages[2];
   } else if (
      (cardNumberStr.length === 13 || cardNumberStr.length === 16) &&
      isIncluded(cardNumberStr, 1, ['4'])
   ) {
      return messages[3];
   } else if (cardNumber === 123) {
      return messages[10];
   } else {
      throw new Error(messages[11]);
   }
}

function isIncluded(valueStr, numberOfChar, array) {
   const toCheck = valueStr.substring(0, numberOfChar);
   return array.includes(toCheck);
}

/***** */
// const inputValue = document.querySelector('.inputValue-JS').value;
// const result = document.querySelector('.showResult-JS');
// console.log(inputValue);
// const checkButton = document.querySelector('.checkButton-JS').addEventListener('click', () => {
//    result.innerHTML = getCardProvider(inputValue);
// });
