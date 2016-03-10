/* [SOLVING LIFE CHALLENGES: Day Trading Stock Profit Calculation]
Suppose you could access yesterday's stock prices as a list, where:
 - The indices are the time in minutes past trade opening time, which was 9:30am local time.
 - The values are the price in dollars of Apple stock at that time.
 - So if the stock cost $500 at 10:30am, stockPricesYesterday[60] = 500.

Write an efficient function that takes stockPricesYesterday and returns the best profit you could have made from 
1 purchase and 1 sale of 1 Apple stock yesterday.  NO short-selling - buy price has to occur before the sell price.

*/

var maxStockProfit = function(array) {
  
  var minPrice = array[0];
  var maxProfit = array[1] - array[0];
  
  for (var i=1; i < array.length; i++) {
      var potentialProfit = array[i] - minPrice;
      maxProfit = Math.max(maxProfit, potentialProfit);
      minPrice = Math.min(minPrice, array[i]);
  }
  return maxProfit;
}
var stockPricesYesterday = [2, 10, 15, 11];
maxStockProfit(stockPricesYesterday);

//-> 13
