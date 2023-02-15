window.onload = function() {
    document.querySelector('.letter').classList.add('visible');
  };
const card = document.querySelector('.card');
const cardtwo = document.querySelector('.cardtwo');

  function flipCard() {
    card.classList.toggle('card-flipped');
  }
  
  card.addEventListener('click', flipCard)

  function flipCard2() {
    cardtwo.classList.toggle('card-flipped');
  }
  
  card.addEventListener('click', flipCard2)