// problem statement can also be found on leet code

/**
 * Given two strings text1 and text2, return the length of their longest common subsequence. 
 * If there is no common subsequence, return 0.
 * 
 *  subsequence of a string is a new string generated from the original string with some characters (can be none) 
 * deleted without changing the relative order of the remaining characters.
 * 
 * For example, "ace" is a subsequence of "abcde".
 * A common subsequence of two strings is a subsequence that is common to both strings.
 * 
 * Example 1:
 * Input: text1 = "abcde", text2 = "ace" 
 * Output: 3  
 * Explanation: The longest common subsequence is "ace" and its length is 3.
 * 
 */


/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
const longestCommonSubsequence = (text1, text2) => {
    // convert the strings to array
    const text1Array = text1.split('');
    const text2Array = text2.split('');
    const text1Length = text1Array.length;
    const text2Length = text2Array.length;

    // array to keep the count of length of subsequence found after comparing the text of text1 
    // at position 'index' against all characters of text2
    // the count at any "index" will increase by one if the characters at position "index" match 

    const sequenceLengthCount = Array.from({length: text1Length + 1}, () => 0);

    for(let i = 1; i <= text2Length; i++) {
        // for each text of the text1
        let prev = 0;
        for(let j = 1; j <= text1Length; j++) {

            let temp = sequenceLengthCount[j];

            if(text1Array[j-1] === text2Array[i-1]) {
                sequenceLengthCount[j] = prev + 1
            }

            else {
                sequenceLengthCount [j] = Math.max( sequenceLengthCount[j], sequenceLengthCount[j-1])
            }
            prev = temp;
        }
    }

    // the final count gets stored on the last index 
    return sequenceLengthCount[text1Length];
};