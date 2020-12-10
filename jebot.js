const startGame = (totalComputer) => {
    var players = [];
    players[0] = {
        name:'Player',
        guessNumber: 0,
        thumbsUp: 0,
        currentHand: 2
    };
    for(var i = 1;i<=totalComputer;i++){
        players[i] = {...players[i-1], name: `Computer${i}`};
    }
    var turns = 0;
    var totalTurn = 0;
    while(!players.filter(x => x.currentHand === 0).length){
        console.log(players[turns].name, ' turn');
        players[turns].guessNumber = getRandomInt(players.reduce((t,c) => t + c.currentHand,0) + 1);
        console.log(players[turns].name, ' guesses', players[turns].guessNumber);
        for(var i = 0;i < players.length;i++){
            players[i].thumbsUp = getRandomInt(players[i].currentHand + 1);
            console.log(players[i].name, players[i].thumbsUp, ' thumbs UP');
        }
        const totalThumbs = players.reduce((t,c) => t + c.thumbsUp,0);
        if(players[turns].guessNumber === totalThumbs){
            console.log(players[turns].name, ' guessed', players[turns].guessNumber, ' Correctly !!!');
            players[turns].currentHand--;
        }
        else {
            console.log('what a shame, ', players[turns].name, ' guesses ', players[turns].guessNumber, ' but ', totalThumbs, ' up');
        }
        turns = turns === (players.length - 1) ? 0 : (turns + 1);
        totalTurn++;
    }
    console.log('The winner is ', players.filter(x => x.currentHand === 0)[0].name, ' game finished in ', totalTurn, ' turns');
    return true;
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

startGame(100);