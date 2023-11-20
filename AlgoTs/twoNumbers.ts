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

function twoSum(nums: number[], target: number): number[] {
    let result :number[] = []
    type HashTable = { [key: string]: number };
    const myHashTable: HashTable = {};
    for (let i = 0; i < nums.length; i++) {
        const difference = target - nums[i];

        if (difference.toString() in myHashTable) {
            result.push(myHashTable[difference.toString()]);
            result.push(i);
            break; 
        }

        myHashTable[nums[i].toString()] = i;
    }


    return result
};
console.log(twoSum([2,7,11,15],9));
