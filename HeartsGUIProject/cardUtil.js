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
