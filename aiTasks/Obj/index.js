//В объекте всё ключ: значение
// Вывести все ключи из объекта settings
const settings = {
    theme: 'dark',
    language: 'ru',
    notifications: true,
    fontSize: 14
};

let keys = Object.keys(settings)
    .filter(k => k.startsWith('f'))
    .map(key => key + ' Лох')
// console.log(keys)

//Вывести все значения из объекта prices
const prices = {
    apple: 100,
    banana: 80,
    orange: 120,
    mango: 250
};

let objSum = Object.values(prices)
    .reduce((acc, curr) => acc + curr, 0)
// console.log(objSum)

//Вывести все ключ, значения из объекта scores
const scores = {
    Анна: 85,
    Борис: 42,
    Виктор: 97,
    Галина: 68,
    Дмитрий: 55
};

/* let entries = Object.entries(scores)
.filter(ball => ball[1] > 60)
.reduce((acc, [key, value]) => {
    acc[key] = value
    return acc
},{}) */

let entries = Object.fromEntries(
    Object.entries(scores).filter(([key, value]) => value > 60)
)

// console.log(entries)

//Задачи
//Создай новый объект pricesRUB, в котором все цены будут переведены в рубли (умножены на exchangeRate).
const pricesUSD = {
    laptop: 1000,
    mouse: 50,
    keyboard: 150,
    monitor: 400
};

const exchangeRate = 90; // курс доллара к рублю

let pricesRUB = Object.fromEntries(
    Object.entries(pricesUSD).map(([key, value]) => [key, value * exchangeRate])
)
// console.log(pricesRUB)

//ДАШБОРД УПРАВЛЕНИЯ ДАННЫМИ-------------------------------------------------------------
//БД
const team = [
    {
        id: 1,
        name: 'Алексей',
        role: 'admin',
        isActive: true,
        tasks: [
            { title: 'Дизайн', hours: 10, isDone: true },
            { title: 'Верстка', hours: 15, isDone: false }
        ]
    },
    {
        id: 2,
        name: 'Мария',
        role: 'developer',
        isActive: true,
        tasks: [
            { title: 'API', hours: 20, isDone: true },
            { title: 'Тесты', hours: 5, isDone: true }
        ]
    },
    {
        id: 3,
        name: 'Иван',
        role: 'developer',
        isActive: false,
        tasks: []
    },
    {
        id: 4,
        name: 'Ольга',
        role: 'manager',
        isActive: true,
        tasks: [
            { title: 'Планирование', hours: 8, isDone: true },
            { title: 'Встреча', hours: 2, isDone: false }
        ]
    }
];

//Этап 1
//...{name: 'Алексей', totalHours: 25}
let activeMembers = team.filter(activ => activ.isActive === true)
let memberWorkload = activeMembers.map(user => {
    let totalHours = user.tasks.reduce((acc, curr) => acc + curr.hours, 0)
    return {
        name: user.name,
        totalHours: totalHours
    }
})


//Этап 2
//Сколько выполненых задач у активных людей
//4
let totalCompletedTasks = activeMembers
    .flatMap(task => task.tasks)
    .filter(done => done.isDone)
    .length


//Ключами будут роли, а значениями — массивы имён активных сотрудников с этой ролью.
const teamByRole = activeMembers.reduce((acc, member) => {
    const role = member.role
    if (!acc[role]) acc[role] = []
    acc[role].push(member.name)
    return acc
}, {})


//Найди сотрудника с максимальной общей нагрузкой (сумма часов всех задач)
//{name: 'Мария', totalHours: 25}
let hardCowoker = activeMembers.reduce((lider, curr) => {
    let currSum = curr.tasks.reduce((acc, curr) => acc + curr.hours, 0)
    let liderSum = lider.tasks.reduce((acc, curr) => acc + curr.hours, 0)
    return liderSum > currSum ? lider : curr
})

let hardCowokerTotal = {
    name: hardCowoker.name,
    totalHours: hardCowoker.tasks.reduce((acc, curr) => acc + curr.hours, 0)
}

//Массив всех задач (от всех сотрудников), у которых hours > 10
//{ title: 'Верстка', hours: 15, member: 'Алексей' }
const longTask = team
    .flatMap(user =>
        user.tasks.map(task => ({
            title: task.title,
            hours: task.hours,
            member: user.name
        }))
    )
    .filter(task => task.hours > 10)


//Сводная статистика
/* {
  totalMembers: число,       // всего сотрудников в team
  activeMembers: число,      // активных сотрудников (в массиве activeMembers)
  totalTasks: число,         // всего задач у ВСЕХ сотрудников
  completedTasks: число,     // выполненных задач (у нас уже есть totalCompletedTasks)
  averageHoursPerMember: число // среднее количество часов на одного АКТИВНОГО сотрудника
} */

console.log(team)
console.log(activeMembers)

let resultTask = {
    totalMembers: team.length,
    activeMembers: activeMembers.length,
    totalTasks: team.map(user => {
        let sumTasks = user.tasks.length
        return sumTasks
    }).reduce((acc, curr) => acc + curr, 0),
    completedTasks: totalCompletedTasks,
    averageHoursPerMember: memberWorkload
    .reduce((acc,curr) => acc + curr.totalHours, 0) / memberWorkload.length
}

console.log(resultTask)
