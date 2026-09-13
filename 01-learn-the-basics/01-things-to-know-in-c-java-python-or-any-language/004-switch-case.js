/**
 * Problem: Switch Case
 * Difficulty: Easy
 * Reference: https://takeuforward.org/switch-case/switch-case-statements/
 *
 * Approach:
 * - TODO: Describe the approach before coding.
 *
 * Time complexity: TODO
 * Space complexity: TODO
 */

'use strict';

class Solution {
    whichWeekDay(day) {
     switch (day) {
        case 1:
        console.log("Monday");
        break;
        case 2: 
        console.log("Tuesday");
        break;
        case 3:
        console.log("Wednesday");
        break;
        case 4:
        console.log("Thursday");
        break;
        case 5:
        console.log("Friday");
        break;
        case 6:
        console.log("Saturday");
        break;
        case 7:
        console.log("Sunday");
        break;
        default:
        console.log("Invalid");
     }
    
    }
}
