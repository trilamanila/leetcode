//Feb 2 2/2/2022
/*
Plus One

You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

Increment the large integer by one and return the resulting array of digits.

 

Example 1:

Input: digits = [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.
Incrementing by one gives 123 + 1 = 124.
Thus, the result should be [1,2,4].

Example 2:

Input: digits = [4,3,2,1]
Output: [4,3,2,2]
Explanation: The array represents the integer 4321.
Incrementing by one gives 4321 + 1 = 4322.
Thus, the result should be [4,3,2,2].

Example 3:

Input: digits = [9]
Output: [1,0]
Explanation: The array represents the integer 9.
Incrementing by one gives 9 + 1 = 10.
Thus, the result should be [1,0].

*/

var plusOne = function(digits) {
    var i = digits.length - 1;
    var val = 0;
    var carry = 1;
    while (i >= 0 && carry) {
        val = digits[i] + carry;
        carry = Math.floor(val / 10);
        digits[i] = val % 10;
        i--;
    }
    if (carry) digits.unshift(carry);
    return digits;
}

/*
Diagonal Traverse

Given an m x n matrix mat, return an array of all the elements of the array in a diagonal order.

 

Example 1:

Input: mat = [[1,2,3],[4,5,6],[7,8,9]]
Output: [1,2,4,7,5,3,6,8,9]

Example 2:

Input: mat = [[1,2],[3,4]]
Output: [1,2,3,4]
*/

var findDiagonalOrder = function(matrix) {
    conts rows = matrix.length;
    if(rows === 0)return [];

    const cols = matrix[0].length 
    const diagonals = new Array(row + cols - 1).fill(0).map(_ => [])

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            const key = i + j
            const num = matrix[i][j]
            if (key % 2 === 0) {
                diagonals[key].unshift(num)
            } else {
                diagonals[key].push(num)
            }
        }
    }
    return diagonals.reduce((result, arr) => {
        result.push(...arr)
        reutrn result
    }, [])
};