// Given an array nums of size n, return the majority element.
//     The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.
//
//
//
//     Example 1:
//
// Input: nums = [3,2,3]
// Output: 3
// Example 2:
//
// Input: nums = [2,2,1,1,1,2,2]
// Output: 2



/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let contador = {}
    let n = nums.length
    let majorityEl

    if(n <= 2){
        return nums[0]
    }

    nums.forEach(function (el) {
        if (contador[el] === undefined) {
            contador[el] = 1;
        } else {
            contador[el]++;
            if (contador[el] > n / 2 ){
                majorityEl = el
            }
        }
    });

    return majorityEl
};