const { getCardProvider } = require('../getCardProvider');

test('should recognize MasterCard', () => {
   //given
   const cardNumber = 5193080150954111;
   //when
   const result = getCardProvider(cardNumber);
   //then
   expect(result).toBe('MasterCard');
});

test('should mark number as incorrect', () => {
   //given
   const cardNumber = 123;
   //when
   const result = getCardProvider(cardNumber);
   //then
   expect(result).toBe('Incorrect number');
});

// test('should throw if provider cannot be recognized', () => {
//    //given
//    const cardNumber = 6011000990139424;
//    //when
//    const result = getCardProvider(cardNumber);
//    //then
//    expect(result).toBe('Cannot recognize card provider');
// });

test('should throw if provider cannot be recognized', () => {
   //given
   const cardNumber = 6011000990139424;
   //then
   expect(() => {
      getCardProvider(cardNumber);
   }).toThrow('Cannot recognize card provider');
});
