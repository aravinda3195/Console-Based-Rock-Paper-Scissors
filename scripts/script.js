'use strict';

const weapons = document.querySelectorAll('.weapon');

// console.log(weapons);

// computer choice
const computerChoice = function(){
  let weapons = ['Rock', 'Paper', 'Scissor']
  return weapons[Math.trunc(Math.random() * 3)];
}

const myScoreEl = document.getElementById('my_score');
const compterScoreEl = document.getElementById('computer_score');

const userOptionEl = document.getElementById('my_option')
const computerOptionEl = document.getElementById('computer_option');

const resultContainer = document.querySelector('.result');
const resultEl = document.getElementById('result');

// Variables
let myScore = 0;
let computerScore = 0;

// Function

const showResult = function(userWeapon, computerWeapon) {
    resultContainer.classList.add('show');
    userOptionEl.textContent = userWeapon;
    computerOptionEl.textContent = computerWeapon;
}

// Result
 const result = function (result, userWeapon, computerWeapon) {
   if (result === 'You Win') {
     myScore += 1;
     myScoreEl.textContent = myScore;
     showResult(userWeapon, computerWeapon);
     resultEl.textcontent == 'You Win !';
   } else if (result === 'You lose'){
     computerScore += 1;
     compterScoreEl.textContent = computerScore;
     showResult(userWeapon, computerWeapon);
     resultEl.textcontent = 'You Lose';
   }
 };

// Game result
const gameResult = function (userWeapon) {
  let computerWeapon = computerChoice();
//   let userWeapon = getUserChoice();
  let gameOutput = `${computerWeapon.toLowerCase()}${userWeapon.toLowerCase()}`;
  // console.log(gameOutput);

  if (computerWeapon === userWeapon) {
    result('Draw', userWeapon, computerWeapon);
  } else if (
    gameOutput === 'rockpaper' ||
    gameOutput === 'paperscissor' ||
    gameOutput === 'scissorrock'
  ) {
    result('You Win', userWeapon, computerWeapon);
  } else if (
    gameOutput === 'paperrock' ||
    gameOutput === 'scissorpaper' ||
    gameOutput === 'rockscissor'
  ) {
    result('You lose', userWeapon, computerWeapon);
  }
};

// for(let i = 0; i < weapons.length; i++){
//     console.log(weapons[i]);
// }