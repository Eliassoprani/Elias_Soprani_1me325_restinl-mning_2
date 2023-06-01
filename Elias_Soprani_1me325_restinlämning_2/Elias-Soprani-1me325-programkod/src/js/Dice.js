function Dice() {
    this.value = 0//Detta är en egenskap för att spara värdet av den tärningen som slagit.

}

Dice.prototype.roll = function() {//skapar en tärning som appendas till ul elementet för dice-content-wrapper
    let side = Math.floor( Math.random() * 6 + 1 )//variablen side får värdet 1 till 6 menat att representera en sida av en tärning, + 1 i slutet för att side får inte vara 0
    this.value = side;
}

Dice.prototype.destroy = function() {
    for (var prop in this) {//Stegar igenom varje egenskap av objektet och tar bort egenskapen. Detta gör så att hela objektet i slut kommer tas bort av javascripts garbage collector
        delete this[prop];//ta bort egenskapen från objektet
    }
}