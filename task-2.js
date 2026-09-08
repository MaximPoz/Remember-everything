//easy

/* function getSum(array) {

    let arrSt = []
    for (let i = 0; i < array.length; i++) {
        let element = array[i] * array[i];
        arrSt.push(element)
    }
    let el = 0
    for (let i = 0; i < arrSt.length; i++) {
        el += arrSt[i];
    }
    console.log(el);
} */

/* function getSum(array) {
    let sum = 0
    for (let i = 0; i < array.length; i++) {
        sum += array[i] * array[i]
    }
    return sum
}
console.log(getSum([2, 3]));



function getDigitsSum(num) {
    let sum = 0
    let numStr = String(num)

    for (let i = 0; i < numStr.length; i++) {
        sum += +numStr[i];

    }
    return sum
}
console.log(getDigitsSum(251))


function getDivisors(num) {
    let arrDiv = []

    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            arrDiv.push(i)
        }
    }
    return arrDiv
}
console.log(getDivisors(18));

function reversStr(str) {
    let arrStr = []
    let element = ""
    for (let i = 0; i < str.length; i++) {
        const element = str[i];
        arrStr.unshift(str[i])
    }
    for (let i = 0; i < arrStr.length; i++) {
        element += arrStr[i];
    }
    console.log(element);
}
reversStr('мир')


function delElem(value, arr) {
    let arrDel = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== value) {
            arrDel.push(arr[i])
        }
    }
    console.log(arrDel);
}
delElem("да", ["да", "нет", "да", "нет"]) // => ["нет", "нет"]
delElem(0, [1, 3, 0, 1, 0, 5]) // => [1, 3, 1, 5]



function fillArray(num) {
    let arrFill = []
    for (let i = 1; i <= num; i++) {
        arrFill.push(i)
    }
    return arrFill
}
console.log(fillArray(10));

 */

//middle

/* Напиши функцию compareArrays, которая принимает на вход два двумерных массива и возвращает true, если элементы в 
этих двух массивах одинаковые, иначе возвращает false.Для решения используй цикл for. */

function compareArrays(arr1, arr2) {
    let sum1 = []
    let sum2 = []

    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr1[i].length; j++) {
            sum1.push(arr1[i][j]);
        }
    }

    for (let i = 0; i < arr2.length; i++) {
        for (let j = 0; j < arr2[i].length; j++) {
            sum2.push(arr2[i][j]);
        }
    }

    if (sum1.length !== sum2.length) {
        console.log(false);
        return false
    }
    for (let i = 0; i < sum1.length; i++) {
        if (sum1[i] !== sum2[i]) {
            console.log(false);
            return false
        }
    }

    console.log(true);
    return true
}

/* compareArrays([
    [1, 2, 3], [4, 5, 6]],
    [[1, 2, 3], [4, 5, 6]
    ]) // => true
compareArrays([
    [1, 2], [4]],
    [[1], [4, 5]
    ]) // => false */


/* Напиши программу, которая будет вызывать prompt и запрашивать у пользователя время в формате ЧЧ:ММ:СС и 
ставить таймер. Когда таймер истечёт, необходимо вывести alert, что таймер истёк, и запросить новый таймер. */

function timer() {

    function promptTime() {
        let clockPrompt = prompt('Введите время в формате ЧЧ:ММ:СС (например, 14:30:45) ', '00:00:03')
        if (clockPrompt === null) {
            console.log("Пользователь отменил ввод")
            return null
        }
        const [h, m, s] = clockPrompt.split(':').map(Number)

        if (h < 0 || h > 23 || m < 0 || m > 59 || s < 0 || s > 59) {
            alert("Неверно введено время Введите время в формате ЧЧ:ММ:СС (например, 14:30:45)")
            return promptTime()
        }
        return { h, m, s, clockPrompt }
    }

    let time = promptTime()

    if (time === null) {
        console.log('Данных в time нет')
        return
    }

    let h = 3600 * time.h
    let m = 60 * time.m
    let s = 1 * time.s
    let sumInterval = h + m + s

    if (sumInterval !== null) {
        let interval = setInterval(() => {
            console.log(sumInterval)
            sumInterval--

            if (sumInterval <= 0) {
                alert('Таймер закончился')
                clearInterval(interval)
                let confirmInt = confirm('Ещё таймер?')
                if (confirmInt === false) {
                    console.log('Вы нажали отмена')
                } else {
                    timer()
                }
            }
        }, 1000)
    } else {
        console.log("вы не ввели данные")
    }
}


/* Пусть arr — массив строк. Напиши функцию unique(arr), которая возвращает массив, 
содержащий только уникальные элементы arr. */


function unique(arr) {
    let animals = []
    for (let i = 0; i < arr.length; i++) {
        let flag = 0
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                flag++
            }
        }
        if (flag === 1) {
            animals.push(arr[i])
        }
    }

    return animals
}


let strings = ["ёж", "кот", "собака", "енот", "кот", "хорёк", "собака"];
// alert(unique(strings)); // енот, хорёк, ёж