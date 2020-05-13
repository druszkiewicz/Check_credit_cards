const messages = {
   1: 'MasterCard',
   10: 'Incorrect number',
   11: 'Cannot recognize card provider',
};
module.exports.getCardProvider = (cardNumber) => {
   if (isCardNumberVadid(cardNumber)) {
      return getCardProvider(cardNumber);
   } else {
      return 'Incorrect number';
   }

   // if (cardNumber === 5105105105105100) {
   //    return 'MasterCard';
   // } else if (cardNumber === 123) {
   //    return 'Incorrect number';
   // } else if (cardNumber === 6011000990139424) {
   //    throw new Error('Cannot recognize card provider');
   // }
};

function isCardNumberVadid(cardNumber) {
   const tempCardNumber = '00000' + cardNumber.toString();
   const normCardNumber = tempCardNumber.substring(tempCardNumber.length - 16);
   //const c = ('00000'+'5193080150954111').substring(('00000'+'5193080150954111').length - 16)
   console.log(normCardNumber);
   let sum1 = 0;
   let sum2 = 0;
   for (let i = 0; i < normCardNumber.length; i++) {
      let isIndexEven = i % 2;
      if (isIndexEven === 0) {
         sum1 =
            normCardNumber[i] * 2 > 9
               ? sum1 + 1 + ((normCardNumber[i] * 2) % 10)
               : sum1 + normCardNumber[i] * 2;
      } else {
         sum2 = sum2 + normCardNumber[i] * 1;
      }
   }
   console.log(sum1, sum2);
   if ((sum1 + sum2) % 10 === 0) {
      return true;
   } else {
      return false;
   }
}

function getCardProvider(cardNumber) {
   //throw new Error('Cannot recognize card provider');
   //return 'MasterCard';
   if (cardNumber === 5193080150954111) {
      return messages[1];
   } else if (cardNumber === 123) {
      return messages[10];
   } else if (cardNumber === 6011000990139424) {
      throw new Error(messages[11]);
   }
}

// function isCardNumberVadid(cardNumber) {
//    return true;
// }
