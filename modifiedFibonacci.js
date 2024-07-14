// the problem statement of modified fibonacci series can also be found on hacker-rank as well
/**
 * implement a modified Fibonacci sequence using the following definition:
 * given terms t[i] and t[i+1] then t[i + 2] is computed as:
 * t[i + 2] = t[i] + (t[i+1])^2
 * 
 * example for 6th term
 * t1 = 0
 * t2 = 1
 * t3 = 0 + 1^2 = 1
 * t4 = 1 + 1^2 = 2
 * t5 = 1 + 2^2 = 5
 * t6 = 2 + 5^2 = 27
 */


/*
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER t1
 *  2. INTEGER t2
 *  3. INTEGER n
 */

function fibonacciModified(t1, t2, n) {
    let term1 = BigInt(t1);
    let term2 = BigInt(t2);
    let term = 3;
    let fibResult;

    while (term <= n) {
        fibResult = term1 + (term2 * term2);
        term1 = term2;
        term2 = fibResult;
        term ++;
    }
    return fibResult;
}
