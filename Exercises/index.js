//////////////////////////////////////////////////////Array//////////////////////////////////////
//INTERMEDIATE LEVEL
//.1
let words = ['apple', 'banana', 'cherry', 'date', 'puma']
function longString(words) {
    let ans = 'c'
    for (let x of words) {
        if (x.length > ans.length) {
            ans = x
        }
    }
    console.log(ans)
}
longString(words)

//.2
function shortString(words) {
    let ans = ""
    for (let x of words) {
        if (x.length < ans.length) {
            ans = x
        }
    }
    console.log(ans)
}
shortString(words)

//.3
let numbers = [23, 5235, 23, 32, 5323, 232, 234]
function bigNum(nums) {
    let max_num = nums[0], counter = 0
    while (counter < nums.length) {
        max_num = (nums[counter] > max_num) ? nums[counter] : max_num
        counter++
    }
    // let ans = nums[0]
    // for (let item of nums) {
    //     if (item > ans) {
    //         ans = item
    //     }
    // }
    console.log(ans)
}
bigNum(numbers)

//.4
function smallNum(num) {
    let ans = num[0], a = 0
    while (a < num.length) {
        ans = (num[a] > ans) ? ans : num[a]
        a++
    }
    console.log(ans)
}
smallNum(numbers)


//.5
function maxSum(num) {
    let ans = num[0], a = 0
    while (a < num.length) {
        ans = (num[a] > ans) ? num[a] : ans
        a++
    }
    let str_num = String(ans).split("")
    console.log(str_num.reduce((x, y) => parseInt(x) + parseInt(y)))
}
maxSum(numbers)

//////////////////////////////////////////////////////Functions//////////////////////////////////////
//INTERMEDIATE LEVEL
//.1
let n = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

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
// function sortSec(nums) {
//     for (let x = 0; x < nums.length + 1; x++) {
//         if (nums[x] > nums[x + 1]) {
//             nums[x] = nums[x + 1]
//             nums[x + 1] = nums[x]
//         }
//     }
//     console.log(nums[1], nums[nums.length - 2])
// }
// sortSec(numbers)

//.2
function uppfirst(text) {
    let ans = ''
    text.split(' ').forEach(word => {
        ans += (word[0].toUpperCase() + word.slice(1) + ' ')
    })
    console.log(ans)
}
uppfirst('all i need is your love to night')
//.3
function longWord(text) {
    let ans = []
    text.split(' ').forEach(word => {
        ans.push([word.length, word])
    })
    ans.sort((a, b) => a[0] - b[0])
    console.log(ans[ans.length - 1][1], ans)
}
longWord('Wake up to reality  Nothing ever goes as planned in this accursed world')
//.4
function CountVowels(text) {
    let x = 0
    text.forEach(word => {

    })
}