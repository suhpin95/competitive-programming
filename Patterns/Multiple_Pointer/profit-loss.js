/**
 * Write a function to calculate the profit and loss
 */
var trading = [7,6,4,3,1];

const maxProfit = (prices) => {
    let minStockPrice = prices[0];
    let maxProfit = 0;

    for (let i = 1; i < prices.length; i++) {
        minStockPrice = minStockPrice > prices[i] ? prices[i] : minStockPrice;
        maxProfit = maxProfit < prices[i] - minStockPrice ? prices[i] - minStockPrice : maxProfit;
    }

  console.log( maxProfit);
}

maxProfit(trading);