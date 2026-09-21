/**
 * Problem: Pattern 7
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
    pattern7(n) {
        for(let i = 1; i <= n; i++) {
            let row = "";
            for(let space = 1; space <= n-i; space++) {
                row += " ";
            }
            for(let j = 1; j <= 2 * i - 1; j++) {
                row += "*";
            } console.log(row);
        }
    }
}
let solution = new Solution();
solution.pattern7(5);