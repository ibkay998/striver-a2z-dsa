/**
 * Problem: For loops
 * Difficulty: Easy
 * Reference: https://takeuforward.org/for-loop/understanding-for-loop/
 *
 * Approach:
 * - TODO: Describe the approach before coding.
 *
 * Time complexity: TODO
 * Space complexity: TODO
 */

'use strict';

class Solution {
    forLoop(low, high) {
        let total = 0;

        for (let i = low; i <= high; i++) {
            total += i;
        }

        return total;
    }
}