function countVowels(str) {
    let vowelsUpper = 0;
    let vowelsLower = 0;
    const vowels = "AEIOUaeiou";

    for (let char of str) {
        if (vowels.includes(char)) {
            if (char === char.toUpperCase()) {
                vowelsUpper++;
            } else {
                vowelsLower++;
            }
        }
    }

    return { upperCaseVowels: vowelsUpper, lowerCaseVowels: vowelsLower };
}

// Пример использования:
const result = countVowels("Hello World");
console.log(result); // Вывод: { upperCaseVowels: 0, lowerCaseVowels: 3 }


function bob(num) {
    let cnt = 0
    let ans = num.toString().split("").filter(x => x % 2 == 0)
    ans.forEach(x => cnt += parseInt(x))
    console.log(ans, cnt)
}
bob(23456789)


function getaddnum() {
    let ans = [];
    for (let x = 0; x < 10; x++) {
        let num = Math.floor(Math.random() * 100) + 1;
        ans.push(num % 2 == 0 ? num : num - 1);
    }

    console.log(ans);
}
getaddnum();

function gcd(a, b) {
    // Проверка на положительные целые числа
    if (a <= 0 || b <= 0 || !Number.isInteger(a) || !Number.isInteger(b)) {
        return "Числа должны быть положительными целыми";
    }
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }

    return a;
}
console.log(gcd(60, 26)); // Вывод: НОД чисел 36 и 60 : 12

function sumMultiples() {
    let sum = 0;

    for (let i = 1; i < 100; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }
    }

    return sum;
}
;
console.log(sumMultiples());
