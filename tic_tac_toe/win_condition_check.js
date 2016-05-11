/**
 * Created by Nick on 2/10/2016.
 */


/*
* checkWin
* 0 params
* 1 return - 'w' player who just made last move won,
*   't' player made last move made last move available AND was not a win - ergo tie
*       'c' - not matches and not last move - continue playing
* reads from global array gameArea
*
* WIN CONDITIONS -
* 1. HORIZONTAL - all entries in an array are the same
* 2. VERTICAL - all entries in the same index of different arrays are the same
* 3. DIAGONAL - all entries in at least one diagonal are the same
* */
function checkWin () {

    //declare vars
    var anyMovesLeft = false;
    var lineCheck = false;
    //  these assume game area is square
    var rows = gameArea.length;
    var cols = gameArea[0].length;
    //

    //HORIZONTAL CHECK
    //  go through the array line by line
    for (var i =0; i < rows; i++)
    {
        //the line matches unless two items aren't the same
        lineCheck = true;
        //  go through each row item by item
        for (var j =1; j < cols; j++)
        {
            console.log('check pair ' + gameArea[i][j-1] + ' ' + gameArea[i][j]);
            //loop through until something does not match
            if (gameArea[i][j-1] != gameArea[i][j])
            {
                // mismatch found, line does not match, try next line
                lineCheck = false;
                break;
            }
        }
        console.log(lineCheck);
        //if no mismatches found, whole line matches, match found, return
        if (lineCheck) {
            return 'w';
        }
    }

    //VERTICAL CHECK
    //  go through the array column by column
    for (var i = 0; i < rows; i++) {
        /*if (gameArea[0][i] == gameArea[1][i] == gameArea[2][i]) {
            return gameArea[0][i];
        }*/
        //the line matches unless two items aren't the same
        lineCheck = true;
        //  go through each row item by item
        for (var j =1; j < cols; j++)
        {
            console.log('check pair ' + gameArea[j-1][i] + ' ' + gameArea[j][i]);
            //loop through until something does not match
            if (gameArea[j-1][i] != gameArea[j][i])
            {
                // mismatch found, line does not match, try next line
                lineCheck = false;
                break;
            }
        }
        console.log(lineCheck);
        //if no mismatches found, whole line matches, match found, return to
        if (lineCheck) {
            return 'w';
        }
    }

    //DIAGONAL CHECK
    //DIAGONAL - TOP LEFT TO BOTTOM RIGHT
    for (var i = 1; i < rows; i++) {
        lineCheck = true;
        console.log('check pair ' + gameArea[i-1][i-1] + ' ' + gameArea[i][i]);
        if (gameArea[i-1][i-1] != gameArea[i][i])
        {
            // mismatch found, line does not match, try next line
            lineCheck = false;
            break;
        }
    }
    console.log(lineCheck);
    if (lineCheck) {
        return 'w';
    }

    //DIAGONAL - TOP LEFT TO BOTTOM RIGHT
    for (var i = 0; i < rows-1 ; i++) {
        //the line matches unless two items aren't the same
        lineCheck = true;
        //  go through each row item by item
        for (var j = cols-1; j >= 1; j--) {
            if ((i + j + 1) == rows) {
                console.log('check pair ' + gameArea[i][j] + ' ' + gameArea[i+1][j-1]);
                //loop through until something does not match
                if (gameArea[i][j] != gameArea[i+1][j-1]) {
                    // mismatch found, line does not match, try next line
                    lineCheck = false;
                    break;
                }
            }
        }
        if (!lineCheck) {
            break;
        }
    }
    console.log(lineCheck);
    //if no mismatches found, whole line matches, match found, return to
    if (lineCheck) {
        return 'w';

    }

    //if all possibilities checked and no match, game was tie
    //  loop through all items in all arrays
    //  assumes no moves left, if any unused space exists, there is 1+ moves left
    for (var i =0; i < rows; i++)
    {
        for (var j = 0; j < cols; j++) {
            //if current item is a number, there are moves left
            if (!isNaN(gameArea[i][j]))
            {
                anyMovesLeft = true;
            }
        }
    }
    //if no moves are left, game is tie
    if (!anyMovesLeft)
    {
        return 't';
    }

    //if no player has made winning move AND has not used last move, continue
    return 'c';
}