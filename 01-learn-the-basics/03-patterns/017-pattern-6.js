/**
 * Problem: Pattern 6
 * Difficulty: Easy
 * Reference: https://takeuforward.org/strivers-a2z-dsa-course/must-do-pattern-problems-before-starting-dsa/
 *
 * Approach:
 * - TODO: Describe the approach before coding.
 *
 * Time complexity: TODO
 * Space complexity: TODO
 */

'use strict';

class Solution {
    pattern6(n) {
        for(let i = 1; i <= n; i++) {
            let row = "";
            for(let j = 1; j <= n - i + 1; j++) {
                row += j;
            } console.log(row);
        }
    }
}
let solution = new Solution();
solution.pattern6(5);