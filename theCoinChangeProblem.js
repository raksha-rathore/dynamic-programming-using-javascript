// Problem statement available on Hacker-rank as well
/* Given an amount and the denominations of coins available, determine how many ways change can be made for amount. There is a limitless supply of each coin type.

Example
n = 3
c= [8,3,1,2]

There are 3 ways to make change for n=3 : {1,1,1}, {1,2} and {3}

*/

/**
 * The function is expected to return a LONG_INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. LONG_INTEGER_ARRAY c
 */

function getWays(n, c) {

    if(n===0) {
        // the corner case, as 0 can always be acheived in only one way by not picking any coin
        return 1;
    }

    // each index in the waysCount array stores in how many ways we can acheive the index position using the denominations
    const waysCount = Array.from({length: n + 1}, (el, index)=> (index === 0 ? 1 : 0));
    const numberOfDeniminations = c.length; // all types of denominations 
    const sortedDenominations = c.sort((a, b) => (a-b))
    
    for(let i = 0; i <= numberOfDeniminations; i++) {
        for(let j = 0; j < n +1; j++){
            // any index less than the given denomination cannot be acheived
            // hence the value of the denomination should be greater than the 
            if(sortedDenominations[i] <= j) {
                const differenceOfValue =  j - sortedDenominations[i] ;
                waysCount[j] = waysCount[differenceOfValue] + waysCount[j];
            }
        }
    }

    return waysCount[n];

}