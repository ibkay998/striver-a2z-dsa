/**
 * Problem: If ElseIf
 * Difficulty: Easy
 * Reference: https://takeuforward.org/if-else/if-else-statements/
 *
 * Approach:
 * - TODO: Describe the approach before coding.
 *
 * Time complexity: TODO
 * Space complexity: TODO
 */

'use strict';

function studentGrade(marks) {
    if (marks >= 90) {
      console.log("Grade A");
    } else if (marks >= 70) {
      console.log("Grade B");
    } else if (marks >= 50) {
      console.log("Grade C");
    } else if (marks >= 35) {
      console.log("Grade D");
    } else {
      console.log("Failed");
    }
  }

studentGrade(85);
studentGrade(27);