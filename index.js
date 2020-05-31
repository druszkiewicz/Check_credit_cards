import { getCardProvider } from './getCardProvider';

//const { getCardProvider } = require('../getCardProvider');

const result = document.querySelector('.showResult-JS');

const checkButton = document.querySelector('.checkButton-JS').addEventListener('click', () => {
   const inputValue = document.querySelector('#inputValue-JS').value;
   //inputValue = 5193080150954111;
   result.innerHTML = getCardProvider(inputValue);
});
