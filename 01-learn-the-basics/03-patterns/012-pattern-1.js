/**
 * Problem: Pattern 1
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
  pattern1(n) {
    for (let row = 0; row < n; row++) {
      let line = "";

      for (let star = 0; star < n; star++) {
        line += "*";
      }

      console.log(line);
    }
  }
}
