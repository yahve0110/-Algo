////////////slow
//     function twoSum(nums: number[], target: number): number[] {
//         let result: number[] = []
//         for (let i = 0; i < nums.length; i++) {
//             for (let j = i+1; j < nums.length; j++) {
//                 if(nums[i] + nums[j] === target) {
//                     result.push(i)
//                     result.push(j)
//                 }
//             }
//         }
//         return result
//     };
// console.log(twoSum([3,3] ,6));
//fast
function twoSum(nums, target) {
    var result = [];
    var myHashTable = {};
    for (var i = 0; i < nums.length; i++) {
        var complement = target - nums[i];
        if (complement.toString() in myHashTable) {
            result.push(myHashTable[complement.toString()]);
            result.push(i);
            break; // Assuming you want only one pair
        }
        // Insert the current number into the hash table
        myHashTable[nums[i].toString()] = i;
    }
    return result;
}
;
console.log(twoSum([2, 7, 11, 15], 9));
