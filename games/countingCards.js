/*
In the casino game Blackjack, a player can gain an advantage over the house by keeping track of the relative number of 
high and low cards remaining in the deck. This is called Card Counting.

Having more high cards remaining in the deck favors the player. Each card is assigned a value according to the table below. 
When the count is positive, the player should bet high. When the count is zero or negative, the player should bet low.

Count Change	Cards
+1	2, 3, 4, 5, 6
0	7, 8, 9
-1	10, 'J', 'Q', 'K','A'

You will write a card counting function. It will receive a card parameter and increment or decrement the global count 
variable according to the card's value (see table). The function will then return a string with the current count and the 
string "Bet" if the count is positive, or "Hold" if the count is zero or negative. The current count and the player's 
decision ("Bet" or "Hold") should be separated by a single space.

Example Output
"-3 Hold"
"5 Bet"

*/

var count = 0;
var cc = function(card) {

  if (card > 1 && card <=6) {
    count++;
  }
  else if (card === 10 || card === 'J' || card === 'Q' || card === 'K' || card === 'A') {
    count--;
  }
  
  var action = count > 0 ? "Bet" : "Hold";
  
  return count + " " + action;
};

cc(2); cc(3); cc(7); cc('K'); cc('A');
