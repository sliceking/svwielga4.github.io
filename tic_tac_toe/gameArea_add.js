/**
 * Created by Nick on 2/10/2016.
 */

/*addToIndex
    takes 2 vars, returns 0, interacts with global array gameArea
        position determines which index of gameArea is targeted
        player determines which player claims targeted index

*/
function addToIndex (position, player)
{
    console.log('addToIndex start');
    //depending on what size the game area is set to, use corresponding array size
    if (gameAreaSize == 3) {
        switch (position) {
            //row 1
            case 'square1':
                gameArea[0][0] = player;
                break;
            case 'square2':
                gameArea[0][1] = player;
                break;
            case 'square3':
                gameArea[0][2] = player;
                break;
            //row 2
            case 'square4':
                gameArea[1][0] = player;
                break;
            case 'square5':
                gameArea[1][1] = player;
                break;
            case 'square6':
                gameArea[1][2] = player;
                break;
            //row 3
            case 'square7':
                gameArea[2][0] = player;
                break;
            case 'square8':
                gameArea[2][1] = player;
                break;
            case 'square9':
                gameArea[2][2] = player;
                break;
            //error, nothing added to array
            default:
                console.log('addToIndex unable to add entry to index ' + position);
        }
    }
    else if (gameAreaSize == 5) {
        switch (position) {
            //row 1
            case 'square1':
                gameArea[0][0] = player;
                break;
            case 'square2':
                gameArea[0][1] = player;
                break;
            case 'square3':
                gameArea[0][2] = player;
                break;
            case 'square4':
                gameArea[0][3] = player;
                break;
            case 'square5':
                gameArea[0][4] = player;
            //row 2
                break;
            case 'square6':
                gameArea[1][0] = player;
                break;
            case 'square7':
                gameArea[1][1] = player;
                break;
            case 'square8':
                gameArea[1][2] = player;
                break;
            case 'square9':
                gameArea[1][3] = player;
                break;
            case 'square10':
                gameArea[1][4] = player;
            //row 3
                break;
            case 'square11':
                gameArea[2][0] = player;
                break;
            case 'square12':
                gameArea[2][1] = player;
                break;
            case 'square13':
                gameArea[2][2] = player;
                break;
            case 'square14':
                gameArea[2][3] = player;
                break;
            case 'square15':
                gameArea[2][4] = player;
                break;
            //row 4
            case 'square16':
                gameArea[3][0] = player;
                break;
            case 'square17':
                gameArea[3][1] = player;
                break;
            case 'square18':
                gameArea[3][2] = player;
                break;
            case 'square19':
                gameArea[3][3] = player;
                break;
            case 'square20':
                gameArea[3][4] = player;
                break;
            //rpw 5
            case 'square21':
                gameArea[4][0] = player;
                break;
            case 'square22':
                gameArea[4][1] = player;
                break;
            case 'square23':
                gameArea[4][2] = player;
                break;
            case 'square24':
                gameArea[4][3] = player;
                break;
            case 'square25':
                gameArea[4][4] = player;
                break;
            default:
                console.log('addToIndex unable to add entry to index ' + position);
        }
    }
    //if game size neither 3 or 5, error
    else {
        console.log('gameAreaSize not permitted option - ' + gameAreaSize);
    }
    console.log('addToIndex end');
}
