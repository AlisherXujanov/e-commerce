//////////////////////////////////////////////////////Array//////////////////////////////////////

// Function to find the longest string in an array
function longestString(words) {
    let longest = words[0];
    for (let word of words) {
        if (word.length > longest.length) {
            longest = word;
        }
    }
    return longest;
}

// Function to find the shortest string in an array
function shortestString(words) {
    let shortest = words[0];
    for (let word of words) {
        if (word.length < shortest.length) {
            shortest = word;
        }
    }
    return shortest;
}

// Function to find the largest number in an array
function largestNumber(nums) {
    let largest = nums[0];
    for (let num of nums) {
        if (num > largest) {
            largest = num;
        }
    }
    return largest;
}

// Function to find the smallest number in an array
function smallestNumber(nums) {
    let smallest = nums[0];
    for (let num of nums) {
        if (num < smallest) {
            smallest = num;
        }
    }
    return smallest;
}

// Function to find the sum of digits of the largest number in an array
function digitSum(num) {
    let max = Math.max(...num);
    let sum = max.toString().split('').reduce((acc, digit) => acc + parseInt(digit), 0);
    return sum;
}

// Test cases for the array functions
let words = ['apple', 'banana', 'cherry', 'date', 'puma'];
console.log("Longest String:", longestString(words));
console.log("Shortest String:", shortestString(words));

let numbers = [23, 5235, 23, 32, 5323, 232, 234];
console.log("Largest Number:", largestNumber(numbers));
console.log("Smallest Number:", smallestNumber(numbers));
console.log("Digit Sum of Largest Number:", digitSum(numbers));

//////////////////////////////////////////////////////Functions//////////////////////////////////////

// Function to perform bubble sort on an array
function bubbleSort(numbers) {
    let sorted = false;

    while (!sorted) {
        sorted = true;

        for (let i = 0; i < numbers.length - 1; i++) {
            if (numbers[i] > numbers[i + 1]) {
                [numbers[i], numbers[i + 1]] = [numbers[i + 1], numbers[i]];
                sorted = false;
            }
        }
    }
    return numbers;
}

// Function to capitalize the first letter of each word in a sentence
function capitalizeFirstLetter(text) {
    return text.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

// Function to find the longest word in a sentence
function longestWord(text) {
    let words = text.split(' ');
    let longest = words.reduce((acc, curr) => acc.length > curr.length ? acc : curr);
    return longest;
}

// Function to count the number of vowels in a sentence
function countVowels(text) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;
    for (let char of text.toLowerCase()) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}

// Function to count the occurrences of a letter in a sentence
function countLtr(text, letter) {
    let cnt = 0;
    for (let x of text) {
        if (x.toLowerCase() === letter.toLowerCase()) {
            cnt++;
        }
    }
    return cnt;
}

// Test cases for the function
console.log("Bubble Sort:", bubbleSort([1, 5, 3, 2, 4]));
console.log("Capitalized Sentence:", capitalizeFirstLetter('all i need is your love tonight'));
console.log("Longest Word:", longestWord('Wake up to reality Nothing ever goes as planned in this accursed world'));
console.log("Vowel Count:", countVowels('Sorry, but I am number one'));
console.log("Letter 'H' Count:", countLtr("Hello World", "H"));



//                                                  ADVANCED LEVEL(PRO)
//.1
function uniqueChar(text) {
    let ans = []
    for (let x of text) {
        (!text.replace(x, '').includes(x)) ? ans.push(x) : '';
    }
    console.log(ans);
}
uniqueChar("hello world");
//.2
function generateID(num) {
    let ans = ''
    for (let x = 0; x < num; x++) {
        ans += Math.floor(Math.random() * 10).toString();
    }
    console.log(parseInt(ans))
}
generateID(9);
//.3
function firstLtrUpperCase(text) {
    console.log(text.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '));
}
firstLtrUpperCase('the quick brown fox jumps over the lazy dog');

//.4 
function reverseTxts(texts) {
    console.log(texts.map(word => word.split('').reverse().join('')))
}
reverseTxts(['hello', 'world']);

//.5
function sortByLength(sentence) {
    let words = sentence.split(' ');
    let sortedWords = words.sort((a, b) => a.length - b.length);
    console.log(sortedWords.join(' '));
}


sortByLength("This is a sample sentence to test the function");
//.6
function biggestWord(text) {
    let txt = text.split(' ');
    let ans = txt.reduce((a, b) => a.length > b.length ? a : b);
    console.log(ans);
}

biggestWord("This is a sample sentence to test the function");

//.7
function changeNextVowels(text) {
    let txt = text.split('');
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    for (let i = 0; i < txt.length; i++) {
        let x = txt[i];
        if (vowels.includes(x) && x !== 'u') {
            txt[i] = vowels[vowels.indexOf(x) + 1];
        } else if (x === 'u') {
            txt[i] = 'a';
        }
    }
    console.log(txt.join(''));
}

changeNextVowels("The quick brown fox jumps over the lazy dog");



///////////////////////////////////////////////////////OBJECTS////////////////////////////////////////////////////

//.1
function listSum(arrey) {
    let ans = 0
    for (let x of arrey) {
        (typeof (x) == 'number') ? ans += x : null;
    }
    console.log(ans)
}
listSum([2, 3, "4", 5]);


//.2 
function reverseCaseKeys(obj) {
    let reversedObj = {};
    for (const [key, value] of Object.entries(obj)) {
        console.log(key)
        console.log(value)
        let reversedKey = reverseCase(key);
        reversedObj[reversedKey] = value;
    }
    console.log(reversedObj);
}
function reverseCase(str) {
    return str.split('').reverse().join('')
}

reverseCaseKeys({ firstName: "John", lastName: "Doe", age: 30 });


//.3
function checkObj(obj) {
    for (let arrey of obj) {
        for (let [key, value] of Object.entries(arrey)) {
            if (value == '' || value == null || value == undefined) { return false }
        }
        console.log(arrey)
    }
}
const people = [
    { firstName: "John", lastName: "Doe", age: 30 },
    { firstName: "", lastName: "Smith", age: null },
    { firstName: "Alice", lastName: "", age: 25 },
    { firstName: "Bob", lastName: "Johnson", age: undefined },
    { firstName: "", lastName: "", age: 40 },
    { firstName: "Eve", lastName: "Brown", age: 35 },
    { firstName: "Eve", lastName: "Brown", age: 45 },
    { firstName: "Charlie", lastName: "Chaplin" },
]
checkObj(people)
