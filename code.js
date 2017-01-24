function Card(point, suit) {
    this.point = point;
    this.suit = suit;
}

Card.prototype.getImageUrl = function() {
    if (this.point >= 2 && this.point <= 10) {
        return 'images/' + this.point + '_of_' + this.suit + '.png';
    } else if (this.point === 11) {
        return 'images/jack_of_' + this.suit + '.png';
    } else if (this.point === 12) {
        return 'images/queen_of_' + this.suit + '.png';
    } else if (this.point === 13) {
        return 'images/king_of_' + this.suit + '.png';
    } else if (this.point === 1) {
        return 'images/ace_of_' + this.suit + '.png';
    }
}

function Hand(cards) {
    this.cards = []
}

Hand.prototype.addCard = function(card) {
    this.cards.push(card)
}

Hand.prototype.getPoints = function () {
    var combine = function(a,b) {
        return a + b.point;
    };
    return this.cards.reduce(combine, 0);
};



var myHand = new Hand();
var card = new Card();
myHand.addCard(new Card(5, 'diamonds'));
myHand.addCard(new Card(13, 'spades'));
myHand.getPoints();
console.log(myHand.getPoints());
