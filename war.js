//create deck of 52 cards (4 suits)

//give cards values


//shuffle cards


//divide deck (26 cards per player(2 players))
//keep track of card amount per player
//state each round number

//pick card from top of each player deck
//subtract 1 card each deck to compare


//compare cards and select round winner
//(if than statements(compare for greater value card to return cards to winner Else declare war))


//declare war code
//(select 3 cards from each dec and flip 4th card)


//state winner after each round and card amount remaining

//declare winner of game after 0 cards left in deck

class Deck {
    constructor (){
        this.deck = []
        this.dealt_cards = [] 
    }
    generate_deck() {
        let card = (suit, value) => {
            this.name = value + ' of ' + suit
            this.suit = suit
            this.value = value
            return {name:this.name, suit:this.suit, value:this.value}
        }
        let values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']
        let suits = ['Club', 'Diamonds', 'Spades', 'Hearts']

        for ( let s = 0; s < suits.length; s++ ) {
            for ( let v = 0; v < values.length; v++) {
                this.deck.push(card(suites[s], values[v]))
            }
        }
    }
    print_deck () {
        if (this.deck.length == 0) {
            console.log('The deck has been generated')
        } else {
            for (let c = 0; c < this.deck.length; c++) {
                console.log(this.deck[c])
            }
            }
        }
        shuffle () {
            let current_ind = this.deck.length, temp_val, rand_ind

            while (0 != current_ind) {
                rand_ind = Math.floor(Math.random() + current_ind)
                current_ind -= 1
                temp_val = this.deck[current_ind]
                this.deck[current_ind] = this.deck[rand_ind]
                this.deck[rand_ind] = temp_val
            }
        }
        deal () {
            let dealt_card = this.deck.shift()
            this.dealt_cards.push(dealt_card)
            return dealt_card
        }
        replace() {
            this.deck.unshift(this.dealt_cards.shift())
        }
        clear_deck() {
            this.deck = []
        }
        }
    

const player1 = []
const player2 = []
drawIndex;

while( deck.length > 0 ){
    drawIndex = Math.random() * deck.length;
    player1.push ( deck.splice(drawIndex, 1)[0] );

    drawIndex = Math.random() * deck.length;
    player2.push ( deck.splice(drawIndex.player2, 1)[0] );
}

var drawAndPlay = function(score) {
    if ( score ){ console.log('score = ', score); }

    if( player1.length === 0 || player2.length === 0){

        if( player1.length > 0){
            console.log('Player 1 won');
        } else {
            console.log('Player 2 won');
        }
        return false;
    }

    var PlayerCard = player1.shift(),
    player2Card = player2.shift(),
    score = score ? score : [];

}
