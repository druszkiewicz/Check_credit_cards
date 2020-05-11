const { getCardProvider } = require('../getCardProvider');

test('should recognize MasterCard', () => {
   //given
   const cardNumber = 5105105105105100;
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

test('should throw if provider cannot be recognized', () => {
   //given
   const cardNumber = 6011000990139424;
   //then
   expect(() => {
      getCardProvider(cardNumber);
   }).toThrow('Cannot recognize card provider');
});
