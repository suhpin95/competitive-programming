var maxProfit = function(prices) {
    var cp = prices[0], maxProfit = 0;
    // loop through 1 to n
    for(var i = 1; i < prices.length; i++){
        // store the min of cost price
        var cp = Math.min(cp, prices[i]);
        // prof = sp - cp
        var profit = prices[i] - cp;
        // store maxProfit
        maxProfit = Math.max(profit,maxProfit);
    }
    return maxProfit;
};