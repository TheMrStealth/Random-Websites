function BlackJack() {
    var g = 1;
    while (g == 1) {
        var DNum1 = Math.floor(Math.random()*11+1);
        var DNum2 = Math.floor(Math.random()*10+1);
        var Suits = ["\u2665", "\u2660", "\u2666", "\u2663"]
        var DSuit1 = Math.floor(Math.random() * Suits.length);
        var DSuit2 = Math.floor(Math.random() * Suits.length);
        var DCard1 = DNum1 + "" + Suits[DSuit1];
        var DCard2 = DNum2 + "" + Suits[DSuit2];
        document.getElementById("DCard1").innerHTML = DCard1;
        document.getElementById("DCard2").innerHTML = DCard2;

        var PNum1 = Math.floor(Math.random()*11+1);
        var PNum2 = Math.floor(Math.random()*10+1);
        var PSuit1 = Math.floor(Math.random() * Suits.length);
        var PSuit2 = Math.floor(Math.random() * Suits.length);
        var PCard1 = PNum1 + "" + Suits[PSuit1];
        var PCard2 = PNum2 + "" + Suits[PSuit2];
        document.getElementById("PCard1").innerHTML = PCard1;
        document.getElementById("PCard2").innerHTML = PCard2;


        var g = 0;
    }
}
