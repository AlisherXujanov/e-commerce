let n = [1, 2, 5, 10, 6, 3, 1, 2, 9]

// function sortSec(nums) {
//     for (let x = 0; x < nums.length + 1; x++) {
//         if (nums[x] > nums[x + 1]) {
//             nums[x] = nums[x + 1]
//             nums[x + 1] = nums[x]
//         }
//     }
//     console.log(nums)
//     console.log(nums[1], nums[nums.length - 2])
// }

// Memory efficient
function bubble_sort(numbers) {
    let ns_copy = numbers
    let sorted = false

    while (sorted == false) {
        sorted = true

        for (let i = 0; i < ns_copy.length - 1; i++) {
            if (ns_copy[i] > ns_copy[i + 1]) {
                ns_copy[i] = ns_copy[i + 1]
                ns_copy[i + 1] = ns_copy[i]
                sorted = false
            }
        }
    }
    console.log(ns_copy)
    return ns_copy
}
bubble_sort(n)