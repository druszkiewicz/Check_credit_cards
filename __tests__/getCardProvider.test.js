const { getCardProvider } = require('../getCardProvider');

test('should recognize MasterCard', () => {
   //given
   const cardNumber = 5193080150954111;
   //when
   const result = getCardProvider(cardNumber);
   //then
   expect(result).toBe('MasterCard');
});

test('should recognize American Express', () => {
   //given
   const cardNumber = 371449635398431;
   //when
   const result = getCardProvider(cardNumber);
   //then
   expect(result).toBe('American Express');
});

test('should recognize Visa', () => {
   //given
   const cardNumber = 4222222222222;
   //when
   const result = getCardProvider(cardNumber);
   //then
   expect(result).toBe('Visa');
});

test('should mark number as incorrect', () => {
   //given
   const cardNumber = 123;
   //when
   const result = getCardProvider(cardNumber);
   //then
   expect(result).toBe('Incorrect number');
});

test('card provider not recognized', () => {
   //given
   const cardNumber = 6011000990139424;
   //when
   const result = getCardProvider(cardNumber);
   //then
   expect(result).toBe('Cannot recognize card provider');
});

// test('should return true', () => {
//    //given
//    const cardNumber = 4222222222222;
//    //when
//    const result = isIncluded(cardNumber, 1, ['4']);
//    //then
//    expect(result).toBe(true);
// });

// test('should throw if provider cannot be recognized', () => {
//    //given
//    const cardNumber = 6011000990139424;
//    //then
//    expect(() => {
//       getCardProvider(cardNumber);
//    }).toThrow('Cannot recognize card provider');
// });
