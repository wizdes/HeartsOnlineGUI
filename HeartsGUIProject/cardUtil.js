/**
 * Created by Yi on 10/31/2014.
 */
/**
 * @return {string}
 */
function GetCardName(i){
    cardSuitVal = Math.floor(i / 13);
    cardValueVal = i % 13 + 1;

    if(cardValueVal == 1){
        cardValueVal = "ace";
    }

    cardSuitString = "none";
    cardValueString = "none";
    additive = "";

    switch(cardValueVal){
        case 11:
            cardValueString = "jack";
            additive = "2";
            break;
        case 12:
            cardValueString = "queen";
            additive = "2";
            break;
        case 13:
            cardValueString = "king";
            additive = "2";
            break;
        default:
            cardValueString = cardValueVal;
            break;
    }

    switch (cardSuitVal){
        case 0:
            cardSuitString = "spades";
            break;
        case 1:
            cardSuitString = "clubs";
            break;
        case 2:
            cardSuitString = "hearts";
            break;
        case 3:
            cardSuitString = "diamonds";
            break;
        default:
            cardSuitString = cardSuitVal;
            break;
    }

    return cardValueString + "_of_" + cardSuitString + additive;
}

// 105,5 + 80, 0
// 5, 105 + 0, 25
// 5, 605 + 98, 0
// 1185, 105 + 0, 25
function getXAndY(canvas, bmp, i){
    setVal = Math.floor(i / 13);
    iterVal = i % 13;

    switch(setVal){
        case 0:
            bmp.x = 105 + 80 * iterVal;
            bmp.y = 5;
            break;
        case 1:
            bmp.x = 5 ;
            bmp.y = 105 + 25 * iterVal;
            break;
        case 2:
            bmp.x = 5 + 98 * iterVal;
            bmp.y = 605;
            break;
        case 3:
            bmp.x = 1185;
            bmp.y = 105 + 25 * iterVal;
            break;
        default:
            bmp.x = 0;
            bmp.y = 0;
            break;
    }

    return bmp;
}
