function longestCommonSubstring(str1, str2) {
  let longestSubstring = '';
  let longestSubstringLength = 0;
  let longestSubstringRow = 0;
  let longestSubstringColumn = 0;

  const dp = new Array(str1.length + 1)
    .fill(null)
    .map(() => new Array(str2.length + 1).fill(null));

  for (let row = 0; row <= str1.length; row += 1) {
    if (row > -1) {
      for (let column = 0; column <= str2.length; column += 1) {
        if (column > -1) {
          if (
            row === 0
            || column === 0
            || str1[row - 1] !== str2[column - 1]
          ) {
            dp[row][column] = 0;
          } else if (str1[row - 1] === str2[column - 1]) {
            dp[row][column] = dp[row - 1][column - 1] + 1;
          }

          if (longestSubstringLength < dp[row][column]) {
            longestSubstringLength = dp[row][column];
            longestSubstringRow = row;
            longestSubstringColumn = column;
          }
        }
      }
    }
  }

  if (!longestSubstringLength) return '';

  while (dp[longestSubstringRow][longestSubstringColumn] > 0) {
    longestSubstring = str2[longestSubstringColumn - 1] + longestSubstring;
    longestSubstringRow -= 1;
    longestSubstringColumn -= 1;
  }

  return longestSubstring;
}

export { longestCommonSubstring };
