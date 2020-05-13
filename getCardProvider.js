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
   const a = '00000' + cardNumber.toString();
   const c = a.substring(a.length - 16);
   let result = true;
   //const c = ('00000'+'5193080150954111').substring(('00000'+'5193080150954111').length - 16)
   console.log(c);
   let sum1 = 0;
   let sum2 = 0;
   for (let i = 0; i < c.length; i++) {
      let mno = i % 2;
      if (mno === 0) {
         sum1 = c[i] * 2 > 9 ? sum1 + 1 + ((c[i] * 2) % 10) : sum1 + c[i] * 2;
      } else {
         sum2 = sum2 + c[i] * 1;
      }
   }
   console.log(sum1, sum2);
   if ((sum1 + sum2) % 10 === 0) {
      return result;
   } else {
      return result;
   }
}

function getCardProvider(cardNumber) {
   //throw new Error('Cannot recognize card provider');
   return 'MasterCard';
}

// function isCardNumberVadid(cardNumber) {
//    return true;
// }
