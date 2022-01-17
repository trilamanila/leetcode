//Day 15 1/15/22

/*
3Sum

Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

 

Example 1:

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]

Example 2:

Input: nums = []
Output: []

Example 3:

Input: nums = [0]
Output: []

*/

var threeSum = function(array) {
  array.sort((a, b) => a - b);
  const triplets = [];

  for (let i = 0; i < array.length - 2; i++) {
    if (array[i] != array[i - 1]) {
      // making sure our solution set does not contain duplicate triplets
      let left = i + 1;
      let right = array.length - 1;

      while (left < right) {
        const currentSum = array[i] + array[left] + array[right];
        if (currentSum === 0) {
          triplets.push([array[i], array[left], array[right]]);
          while (array[left] == array[left + 1]) left++;
          while (array[right] == array[right - 1]) right--; // making sure our solution set does not contain duplicate triplets
          left++;
          right--;
        } else if (currentSum < 0) {
          left++;
        } else if (currentSum > 0) {
          right--;
        }
      }
    }
  }
  return triplets;
};

/*
Letter Combinations of a Phone Number

Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

 

Example 1:

Input: digits = "23"
Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]

Example 2:

Input: digits = ""
Output: []

*/

var mapOfNumbers = {
  2: ["a", "b", "c"],
  3: ["d", "e", "f"],
  4: ["g", "h", "i"],
  5: ["j", "k", "l"],
  6: ["m", "n", "o"],
  7: ["p", "q", "r", "s"],
  8: ["t", "u", "v"],
  9: ["w", "x", "y", "z"]
};

var letterCombinations = function(digits) {
  // Return early if no digits were supplied
  if (!digits.length) {
    return [];
  }

  function getLetterCombinations(digits, previousCombinations) {
    // Initialise an array to store the possibilties for this digit
    let newPossibilities = [];

    // Loop through the previous iteration's combinations
    for (let previousCombination of previousCombinations) {
      // Loop through the possible letters for this number
      for (let possibleLetter of mapOfNumbers[digits[0]]) {
        // Add a combination of the previous set with the current letters to the array
        newPossibilities.push(previousCombination.concat(possibleLetter));
      }
    }

    // If there are more digits, run the function again, otherwise return the combinations
    return digits.length > 1
      ? getLetterCombinations(digits.slice(1), newPossibilities)
      : newPossibilities;
  }

  return getLetterCombinations(digits.toString(), [""]);
};
