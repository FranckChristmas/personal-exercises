    //the line below allows to either getting the  score back from the local storage if it is in OR reset the score
    let score = JSON.parse(localStorage.getItem(('score'))) || {
      wins: 0,
      losses: 0,
      ties: 0
    };

    updateScoreElement();

  /*
  if(!score) {
    score = {
      wins: 0,
      losses: 0,
      ties: 0
    };
  }
  */
  function resetScore() {
    score.wins=0;
    score.losses=0;
    score.ties=0;
  };
      
  function playGame(playerMove) {
    const computerMove = pickComputerMove();
      let result = '';
      
      if (playerMove === '✌️'){
        if (computerMove === '✊') {
        result = 'Ho, you lose...'
      } else if (computerMove === '✋') {
        result = 'You win !'
      } else { result = 'Tie';}

      } else if (playerMove === '✋'){ 
        if (computerMove === '✊') {
          result = 'You win !'
        } else if (computerMove === '✋') {
          result = 'Tie'
        } else { result = 'Ho, you lose...'}

        } else if (playerMove === '✊') {
        if (computerMove === '✊') {
          result = 'Tie'
        } else if (computerMove === '✋') {
          result = 'Ho, you lose...'
        } else { result = 'You win !'}
        }

        if (result === 'You win !') {
          score.wins += 1;
        }else if (result === 'Ho, you lose...') {
          score.losses += 1;
        } else {
          score.ties += 1;            
        }

        localStorage.setItem('score', JSON.stringify(score));

        updateScoreElement();

        document.querySelector('.js-result').innerHTML = result;
        document.querySelector('.js-moves').innerHTML = `You : ${playerMove} - Computer : ${computerMove}`;

    }   

    function updateScoreElement () {
      document.querySelector('.js-score').innerHTML = `Wins : ${score.wins} | losses  : ${score.losses} | Ties :${score.ties}`;
    };
  
  function pickComputerMove() { const randNumber = Math.random();
    
    let computerMove = '' ;

    if (randNumber >= 0 && randNumber < 1/3 ) 
    {computerMove = '✊'}
    else if (randNumber >= 1/3 && randNumber < 2/3 )
    {computerMove = '✋'} 
    else {computerMove = '✌️';

      }
    return computerMove
}
