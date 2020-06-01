import { getCardProvider } from './getCardProvider';

const result = document.querySelector('.showResult-JS');

const checkButton = document.querySelector('.checkButton-JS').addEventListener('click', () => {
   const inputValue = document.querySelector('#inputValue-JS').value;
   // card numbers for tests
   //5193080150954111;
   //371449635398431
   //6011000990139424
   //4222222222222

   result.innerHTML = getCardProvider(inputValue);
});
