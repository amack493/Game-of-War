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
    gnerate_deck() {
        let card = (suit, value) => {
            this.name = value + ' of ' + suit
            this.suit = suit
            this.value = value
            return {name:this.name, suit:this.suit, value:this.value}
        }
        let values = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace']
        let suits = ['Club', 'Diamonds', 'Spades', 'Hearts']

        for ( let s = 0; s < suits.length; s++ ) {
            for ( let v = 0; v < values.length; v++) {
                this.deck.push(card(suites[s], values[v]))
            }
        }
    }
}
