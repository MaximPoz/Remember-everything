//Задания Easy
//Реализуйте класс Конструктор этого класса должен принимать следующие аргументы:
class Worker {
    constructor(name, surname, rate, workingDays) {
        this.name = name;
        this.surname = surname;
        this.rate = rate;
        this.workingDays = workingDays;
    }
    //Добавьте метод который будет возвращать зарплату работника
    getSalary() {
        return `Зарплата:${this.rate * this.workingDays}`
    }
}

const worker = new Worker("Иван", "Иванов", 10, 28)
// console.log(worker.name) // => "Иван"
// console.log(worker.surname) // => "Иванов"
// console.log(worker.rate) // => 10
// console.log(worker.workingDays) // => 28
// console.log(worker.getSalary()) // => 280


// reverse - принимает на вход строку, переворачивает её и возвращает;
// ucFirst - принимает на входу строку, делает первую букву заглавной и возвращает новую строку;
// ucWords - принимает на вход строку, в каждом отдельном слове этой строки делает первую букву заглавной;
class MyString {
    reverse(str) {
        return str.split('').reverse().join('')
    }
    ucFirst(str) {
        return str.charAt(0).toUpperCase() + str.slice(1)
    }
    ucWords(str) {
        return str
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    }
}

// let str = new MyString()
// console.log(str.reverse('qwe'))
// console.log(str.ucFirst('qwe'))
// console.log(str.ucWords("hello world"))



//Задание Middle
/* - isRangedNumber - принимает на вход два аргумента, первый аргумент - это само число,
второй - это массив из двух чисел, где первое число - начало диапазона включительно, а второе - конец диапазона включительно, и возвращает true, если число попадает в диапазон, иначе false;
- isPhoneNumber - принимает на вход строку (номер телефона), если в телефоне 11 
целых не отрицательных чисел, сам номер начинается с "+7" и не содержит других символов 
кроме пробела, то вернуть true, иначе false; */

class Validator {
    constructor(value) {
        this.value = value;
    }
    isRangedNumber(number, [a, b]) {
        const min = Math.min(a, b)
        const max = Math.max(a, b)
        return number >= min && number <= max
    }
    isPhoneNumber(str) {
        let res = str.replaceAll(' ', '')
        if (res.slice(0, 2) !== '+7') return false
        if (res.length !== 12) return false
        let ten = res.slice(2)
        if (!/^\d+$/.test(ten)) return false

        return true
    }
}
const validator = new Validator()

console.log(validator.isRangedNumber(1, [6, 1])) // => true
console.log(validator.isRangedNumber(2, [4, 8])) // => false

console.log(validator.isPhoneNumber("+7 999 999 99 99")) // => true
console.log(validator.isPhoneNumber("a 999 999")) // => false
console.log(validator.isPhoneNumber("9 999 999 99 99")) // => false