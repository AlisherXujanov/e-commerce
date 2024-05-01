//////////////////////////////////////////////////////Array//////////////////////////////////////
//INTERMEDIATE LEVEL
//.1
let words = ['apple', 'banana', 'cherry', 'date', 'puma'];
function longString(words) {
    ans = 'c'
    for (let x in words) {
        if (words[x].length > ans.length) {
            ans = words[x]
        }
    }
    console.log(ans);
}
longString(words)

//.2
function shortString(words) {
    ans = words[0]
    for (let x in words) {
        if (words[x].length < ans.length) {
            ans = words[x]
        }
    }
    console.log(ans);
}
shortString(words)

//.3
let numbers = [23, 5235, 23, 32, 5323, 232, 234];
function bigNum(num) {
    let ans = num[0], a = 0;
    while (a < num.length) {
        ans = (num[a] > ans) ? num[a] : ans;
        a++;
    }
    console.log(ans);
}
bigNum(numbers);

//.4
function smallNum(num) {
    let ans = num[0], a = 0;
    while (a < num.length) {
        ans = (num[a] > ans) ? ans : num[a];
        a++;
    }
    console.log(ans);
}
smallNum(numbers);

//.5
function Maxsum(num) {
    let ans = num[0], a = 0;
    while (a < num.length) {
        ans = (num[a] > ans) ? num[a] : ans;
        a++;
    }
    console.log(String(ans).split("").reduce((x, y) => parseInt(x) + parseInt(y)));
}
Maxsum(numbers);

//////////////////////////////////////////////////////Functions//////////////////////////////////////
//INTERMEDIATE LEVEL
//.1
function sortSec(nums) {
    for (let x = 0; x < nums.length + 1; x++) {
        if (nums[x] > nums[x + 1]) {
            nums[x] = nums[x + 1]
            nums[x + 1] = nums[x]
        }
    }
    console.log(nums[1], nums[nums.length - 2]);
}
sortSec(numbers)
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
    text.forEach(word=>{
        
    })
}