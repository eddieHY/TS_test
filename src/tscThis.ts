let deck = {
  suits: ["hearts", "spades", "clubs", "diamonds"],
  cards: Array(52),
  createCardPicker: function() {
    // return function() {
    //   let pickedCard = Math.floor(Math.random() * 52);
    //   let pickedSuit = Math.floor(pickedCard / 13);
    //   return {suit: this.suit[pickedSuit], card: pickedCard % 13}
    // }
    return () => { // 箭头函数能保存函数创建时的this值
      let pickedCard = Math.floor(Math.random() * 52);
      let pickedSuit = Math.floor(pickedCard / 13);

      return {suit: this.suits[pickedSuit], card: pickedCard % 13};
    }
  }
}
let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker(); 

alert("card: " + pickedCard.card + " of " + pickedCard.suit)