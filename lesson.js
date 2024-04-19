// Создайте функцию calculateFactorial, которая принимает число n в качестве аргумента и возвращает факториал этого числа.

function calculateFactorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * calculateFactorial(n - 1);
    }
}
console.log(calculateFactorial(5));

//Задача: Создайте массив numbers из 10 случайных целых чисел от 1 до 100. Затем найдите и выведите на экран наименьшее и наибольшее числа из этого массива.

let numbers = [];

// Заполнение массива случайными числами
for (let i = 0; i < 10; i++) {
    numbers.push(Math.floor(Math.random() * 100) + 1);
}

console.log("Массив чисел:", numbers);

// Поиск наименьшего и наибольшего чисел
let min = numbers[0];
let max = numbers[0];

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < min) {
        min = numbers[i];
    }
    if (numbers[i] > max) {
        max = numbers[i];
    }
}

console.log("Наименьшее число:", min);
console.log("Наибольшее число:", max);