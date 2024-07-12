//nums = [2,7,11,15], target= 9
// output = [0, 1];

const twoSum = (nums, target) => {
    //target - nums[i] = x
    let map = new Map();

    for (let i = 0; i < nums.length; i++) {
        let num1 = nums[i];
        let num2 = target - num1;
        if (map.has(num2)) {
            console.log([i, map.get(num2)])
            // return [i, map.get(num2)]
        }
        map.set(num1, i)
    }
}; // time complexity= 0(n)


twoSum([2, 11, 15, 7], 9);
twoSum([3, 2, 4], 6);
twoSum([2, 7, 11, 15], 9);

//perfect..