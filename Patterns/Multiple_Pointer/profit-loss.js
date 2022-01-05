/**
 * Write a function to calculate the profit and loss
 */
var trading = [1,6,4,3,7];

const maxProfit = (prices) => {
    let minStockPrice = prices[0];
    let maxProfit = 0;

    for (let i = 1; i < prices.length; i++) {
        minStockPrice = Math.min(minStockPrice,prices[i])
        //minStockPrice > prices[i] ? prices[i] : minStockPrice;
        // maxProfit = maxProfit < prices[i] - minStockPrice ? prices[i] - minStockPrice : maxProfit;
        maxProfit = Math.max(maxProfit, prices[i]- minStockPrice);
    }

  console.log( maxProfit);
}

maxProfit(trading);