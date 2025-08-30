let score = JSON.parse(localStorage.getItem('score')) ||  {
          wins: 0,
          losses: 0,
          ties: 0
        } ;

        updateScoreElement();

        /* //This code allows you to reset score like the code above
      if(!score){
        score = {
          wins: 0,
          losses: 0,
          ties: 0
        };
      }
        */

      //Convert JSON string back to an object


      function playGame(playerMove){
        const computerMove = pickComputerMove();

        if(playerMove === 'SCISSOR'){
           if(computerMove === 'ROCK'){
            result = 'You LOSE';
          }else if(computerMove === 'PAPER'){
            result = 'You WIN';
          }else if(computerMove === 'SCISSOR'){
            result = 'Tie';
          }

        }else if(playerMove === 'PAPER'){
           if(computerMove === 'ROCK'){
            result = 'You WIN';
            }else if(computerMove === 'PAPER'){
              result = 'Tie';
            }else if(computerMove === 'SCISSOR'){
              result = 'You LOSE';
            }
            
        } else if(playerMove === 'rock'){
          if(computerMove === 'rock'){
            result = 'Tie';
          }else if(computerMove === 'paper'){
            result = 'You LOSE';
          }else if(computerMove === 'scissor'){
            result = 'You WIN';
          }
        }
        
        //Calculate and keep track of the score
        if(result === 'You WIN'){
          score.wins += 1;
        }else if(result === 'You LOSE'){
          score.losses += 1;
        }else if(result === 'Tie'){
          score.ties += 1;
        }

        localStorage.setItem('score', JSON.stringify(score));

        updateScoreElement();

        document.querySelector('.js-result')
          .innerHTML = result;

        document.querySelector('.js-moves').innerHTML 
        = `You are the  
        <img src="images/${playerMove}.jpg" class="move-icon">
        <img src="images/${computerMove}.jpg" class="move-icon"> is the
        Computer`;
      }

      function updateScoreElement(){
        document.querySelector('.js-score')
        .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
      }

      function pickComputerMove() { 
        const randomNumber = Math.random();

        let computerMove = ''; 

        if(randomNumber >= 0 && randomNumber < 1/3){
          computerMove = 'rock';
        }else if(randomNumber >= 1/3 && randomNumber < 2/3){
          computerMove = 'paper';
        }else if(randomNumber
          >= 2/3 && randomNumber < 1){
          computerMove ='SCISSOR';
        }
        return computerMove;
      }