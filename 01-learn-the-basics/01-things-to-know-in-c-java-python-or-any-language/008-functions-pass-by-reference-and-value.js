/**
 * Problem: Functions (Pass by Reference and Value)
 * Difficulty: Easy
 * Reference: https://takeuforward.org/data-structure/functions-pass-by-reference-and-value
 *
 * Approach:
 * - TODO: Describe the approach before coding.
 *
 * Time complexity: TODO
 * Space complexity: TODO
 */

'use strict';

class Solution {
  // Pass by Value
  passByValue(num) {
    num += 10;
    console.log("Inside function (Pass by Value):", num);
  }
  passByReference(arr) {
    arr.push(10);
    console.log("Inside function (Pass by Reference):", arr);
  }
}
