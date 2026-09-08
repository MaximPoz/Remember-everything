function startSum() {
    let pResult = document.getElementById('result')
    let sum = 0;

    while (true) {
        let value = +prompt("Введите");
        if (!value) break;
        sum += value;

    }
    pResult.textContent = "Сумма: " + sum;
    pResult.addEventListener('click', function () {
        pResult.textContent = ''
    })

}


let arr = [[1, 2, 3], [3, 4, 5], [4, 5, 6], [7, 8, 9]]
//console.table(arr)


//TO DO list
console.time("Работа TODO")
function todo() {
    const tasks = []
    let curentTask

    do {
        curentTask = prompt('Введите задание')
        console.info(`curentTask ${curentTask}`)
        if (!curentTask) break;

        tasks.push(curentTask)
        let message = ''
        for (let i = 0; i < tasks.length; i++) {
            message += `${i + 1}.${tasks[i]}\n`
        }
        alert("Ваш список задач:\n" + message)
        console.table(tasks)
    } while (true)

    alert("Программа завершена")
    console.timeEnd("Работа TODO")
}


// Middle
// Задание 1 
const films = ['Последний дом', "Призрак в тюрьме", "Человек паук"]
const result = []

function film() {
    for (let i = 0; i < films.length; i++) {
        let question = confirm(`Смотрели ли вы ${films[i]}`)
        if (question) {
            result.push(`${i + 1}.${films[i]}: Да`)
        } else {
            result.push(`${i + 1}.${films[i]}: Нет`)
        }
    }
    alert(`Ваш список ответов:\n${result.join('\n')}`)
}

//Задание 2
const sums = [
    [1, 5, 6],
    [7, 2, 4, 6],
    [7, 10, 1],
    [1, 3]
]


//Задание 3
function arrDuo() {
    let sumArr = []

    for (let i = 0; i < sums.length; i++) {
        let sum = 0
        for (let j = 0; j < sums[i].length; j++) {
            sum += sums[i][j]
        }
        sumArr.push(sum)
    }

    let min = sumArr[0]
    let max = sumArr[0]
    let total = 0

    for (let i = 0; i < sumArr.length; i++) {
        if (sumArr[i] < min) { min = sumArr[i] }
        if (sumArr[i] > max) { max = sumArr[i] }
        total += sumArr[i]
    }

    let average = total / sumArr.length

    console.table(sumArr);
    console.log(total);

    alert(`максимальное значение: ${max}\nминимальное значение ${min}\nсреднее значение ${average}`)
}


const sums1 = [
    [1, 5, 6],
    [7, 2, 4, 6],
    [7, 10, 1],
    [1, 3]
]
const sums2 = [
    [2, 4, 11],
    [1, 2, 5, 6],
    [3, 10, 1],
    [1, 6, 1]
]


function comparison() {

    let arrSum1 = []
    for (let i = 0; i < sums1.length; i++) {
        let sum1 = 0
        for (let j = 0; j < sums1[i].length; j++) {
            sums1[i][j] % 2 === 0 ? sum1 += sums1[i][j] : sum1

        }
        arrSum1.push(sum1)
    }
    let element = 0
    for (let i = 0; i < arrSum1.length; i++) {
        element = element + arrSum1[i];
    }


    let arrSum2 = []
    for (let i = 0; i < sums2.length; i++) {
        let sum2 = 0
        for (let j = 0; j < sums2[i].length; j++) {
            sums2[i][j] % 2 === 0 ? sum2 += sums2[i][j] : sum2
        }
        arrSum2.push(sum2)
    }
    let element2 = 0
    for (let i = 0; i < arrSum2.length; i++) {
        element2 = element2 + arrSum2[i];
    }

    if (element > element2) {
        alert(`Сумма sums1  sums2`)
    } else if (element < element2) {
        alert(`Сумма sums2 больше sums1`)
    } else {
        alert(`Сумма sums1 ровна sums2`)
    }
    console.log('arrSum1' + '  ' + element);
    console.log('arrSum2' + '  ' + element2);
}


// Дан массив с оценками студентов по предметам
const grades = [
    [5, 4, 5, 4],  // Студент 1
    [3, 4, 4, 5],  // Студент 2
    [5, 5, 4, 3],  // Студент 3
    [4, 3, 5, 4],  // Студент 4
    [2, 4, 3, 5]   // Студент 5
]

function analyzeGrades() {
    let sumStud = []
    let fourBal = []
    let result = 'Cредний балл каждого студента: <br>'


    // 1. Найти средний балл каждого студента
    for (let i = 0; i < grades.length; i++) {
        let sum = 0
        for (let j = 0; j < grades[i].length; j++) {
            sum = sum + grades[i][j] 
        }
        sum = sum / grades[i].length
        result += `Студент №${i + 1}: ${sum}<br>`
        sumStud.push(sum)
        
    }
    console.log(sumStud)
    
    // 2. Определить, кто из студентов имеет средний балл выше 4
    result += '<br>Кто из студентов имеет средний балл выше 4: <br>'
    for (let i = 0; i < sumStud.length; i++) {
        if (sumStud[i] > 4) {
            fourBal.push(sumStud[i])
            result += `Студент №${i + 1}: ${sumStud[i]}<br>`
        }
    }
    console.log(fourBal)

    // 3. Найти общий средний балл всей группы
    result += '<br>Общий средний балл всей группы:<br>'
    let sumAllStudents = 0
    for (let i = 0; i < sumStud.length; i++) {
        sumAllStudents += sumStud[i]
    }
    let total = sumAllStudents / sumStud.length
    result += total
    console.log(total);


    // 4. Показать студента с самым высоким и самым низким средним баллом
    let topStud = sumStud[0]
    let topIndex = 0

    for (let i = 1; i < sumStud.length; i++) {
        if(topStud < sumStud[i]){
            topStud = sumStud[i]
            topIndex = i
        }
    }
        result += `<br>Лучший студент №${topIndex + 1} с баллами: ${topStud.toFixed(2)}`

    console.log(`Лучший студент №${topIndex + 1} с баллами: ${topStud.toFixed(2)}`)

    let badStud = sumStud[0]
    let badIndex = 0
    for (let i = 1; i < sumStud.length; i++){
        if(badStud > sumStud[i]){
            badStud = sumStud[i]
            badIndex = i
        }
    }
    result += `<br>Худний студент №${badIndex} с баллами: ${badStud.toFixed(2)}<br>`
    console.log(`Худний студент №${badIndex} с баллами: ${badStud.toFixed(2)}`)
    document.getElementById('resultStud').innerHTML = result

}

