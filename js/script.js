let currentPlayer = 'X'
let turnNum = 0;
let isFinished = false;

function performLogic(buttonId, tileId) {
    if (!isFinished) {
        // remove button corresponding to buttonId
        $(buttonId).remove()
    
        // change text of div to player value
        $(tileId).text(currentPlayer);

        // check for winners
        checkVerticalWins();
        checkHorizontalWins();
        checkDiagonalWins();

        // update current player
        endTurn();
    }
    
}

function isWinner(tileId1, tileId2, tileId3) {
    let tile1 = $(tileId1).text()
    let tile2 = $(tileId2).text()
    let tile3 = $(tileId3).text()
    if ((tile1 == currentPlayer) && (tile1 == tile2) && (tile1 == tile3)) {
        return true
    }
    return false
}

function checkVerticalWins() {
    if (isWinner('#tile1', '#tile4', '#tile7') || 
        isWinner('#tile2', '#tile5', '#tile8') || 
        isWinner('#tile3', '#tile6', '#tile9')) {
            $('h1').text(currentPlayer + 'Wins!')
            isFinished = true;
        }
}

function checkHorizontalWins() {
    if (isWinner('#tile1', '#tile2', '#tile3') || 
        isWinner('#tile4', '#tile5', '#tile6') || 
        isWinner('#tile7', '#tile8', '#tile9')) {
            $('h1').text(currentPlayer + 'Wins!')
            isFinished = true;
        }
}

function checkDiagonalWins() {
    if (isWinner('#tile1', '#tile5', '#tile9') ||  
        isWinner('#tile3', '#tile5', '#tile7')) {
            $('h1').text(currentPlayer + 'Wins!')
            isFinished = true;
        }
}

function endTurn() {
    turnNum++;
    if (currentPlayer == 'X') {
        currentPlayer = 'O';
    } else {
        currentPlayer = 'X'
    }

    if (turnNum == 9) {
        $('h1').text('It is a draw!');
        isFinished = true;
    }
}

$("#button1").click(function() {
    performLogic("#button1","#tile1");
});

$("#button2").click(function() {
    performLogic("#button2","#tile2");
});

$("#button3").click(function() {
    performLogic("#button3","#tile3");
});

$("#button4").click(function() {
    performLogic("#button4","#tile4");
});

$("#button5").click(function() {
    performLogic("#button5","#tile5");
});

$("#button6").click(function() {
    performLogic("#button6","#tile6");
});

$("#button7").click(function() {
    performLogic("#button7","#tile7");
});

$("#button8").click(function() {
    performLogic("#button8","#tile8");
});

$("#button9").click(function() {
    performLogic("#button9","#tile9");
});

