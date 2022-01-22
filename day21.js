//Day 21 1/21/2022

/*
Unique Paths

There is a robot on an m x n grid. The robot is initially located at the top-left corner (i.e., grid[0][0]). The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]). The robot can only move either down or right at any point in time.

Given the two integers m and n, return the number of possible unique paths that the robot can take to reach the bottom-right corner.

The test cases are generated so that the answer will be less than or equal to 2 * 109.

 

Example 1:

Input: m = 3, n = 7
Output: 28

Example 2:

Input: m = 3, n = 2
Output: 3
Explanation: From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
1. Right -> Down -> Down
2. Down -> Down -> Right
3. Down -> Right -> Down

*/

var uniquePaths = function(m, n) {
  var dp = Array(m);
  if (!m || !n) return 0;
  for (var i = 0; i < m; i++) {
    dp[i] = Array(n);
    for (var j = 0; j < n; j++) {
      if (j > 0 && i > 0) dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
      else if (j > 0 && i === 0) dp[i][j] = dp[i][j - 1];
      else if (j === 0 && i > 0) dp[i][j] = dp[i - 1][j];
      else dp[i][j] = 1;
    }
  }
  return dp[m - 1][n - 1];
};

/*
Minimum Path Sum

Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right, which minimizes the sum of all numbers along its path.

Note: You can only move either down or right at any point in time.

 

Example 1:

Input: grid = [[1,3,1],[1,5,1],[4,2,1]]
Output: 7
Explanation: Because the path 1 → 3 → 1 → 1 → 1 minimizes the sum.

Example 2:

Input: grid = [[1,2,3],[4,5,6]]
Output: 12

*/

var minPathSum = function(grid) {
  const n = grid.length;
  const m = grid[0].length;
  //Store [sum, path]
  const dp = Array(m)
    .fill(0)
    .map(_ => Number.POSITIVE_INFINITY);
  dp[0] = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      const left = j === 0 ? Number.POSITIVE_INFINITY : dp[j - 1];
      const top = dp[j];

      dp[j] = grid[i][j] + Math.min(left, top);
    }
  }

  return dp[m - 1];
};
