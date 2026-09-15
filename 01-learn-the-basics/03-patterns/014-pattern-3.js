/**
 * Problem: Pattern 3
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
    pattern3(n) {
        let row = "";

        for (let i = 1; i <= n; i++) {
            for (let j = 1; j <= i; j++) {
                row += j 
            }
            console.log(row);
            row = "";
        }
    }
}
let solution = new Solution();
solution.pattern3(5);