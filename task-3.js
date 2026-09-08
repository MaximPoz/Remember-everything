//middle
//Задание 1 

let isActive = false
let mouseOver = null
let mouseOut = null

function target() {
    mouseOver = (event) => {
        const target = event.target
        if (target === document.body || target === document.documentElement) return
        target.style.border = '1px solid red'
    }
    mouseOut = (event) => {
        const target = event.target
        if (target === document.body || target === document.documentElement) return
        target.style.border = ''
    }
}

let borderResult = document.querySelector('#borderResult')
function enebleBorder() {
    if (!isActive) {
        document.body.addEventListener('mouseover', mouseOver)
        document.body.addEventListener('mouseout', mouseOut)
        isActive = true
        borderResult.textContent = 'Вкл'
    }
}

function disableBorder() {
    if (isActive) {
        document.body.removeEventListener('mouseover', mouseOver)
        document.body.removeEventListener('mouseout', mouseOut)
        isActive = false
        borderResult.textContent = 'Выкл'
        document.querySelectorAll('*').forEach(el => {
            el.style.border = ''
        })
    }
}

function toggleBorder() {
    if (isActive) {
        disableBorder()
    } else {
        enebleBorder()
    }
}
target()


//Задание 2
function calk() {
    let calkBtn = document.querySelector('.calkButton')
    let calkInputEl = document.getElementById('calkInput')
    let calkResult = document.getElementById('calkResult')
    calkResult.style.padding = '0px 0px 0px 20px'
    calkBtn.addEventListener('click', () => {
        let sResult = calkInputEl.value * 2
        let pResult = calkInputEl.value * 4

        calkResult.textContent = `S = ${sResult}, P = ${pResult}`
    })
}
calk()


//Задание 3
let todoInput = document.getElementById('todoInput')
let todoButton = document.getElementById('todoButton')
let taskList = document.getElementById('taskList')

todoButton.addEventListener('click', ()=> {
    let li = document.createElement('li')
    li.textContent = todoInput.value
    taskList.append(li)
    todoInput.value = ''
})




//easy
//Задание 1
let qustionTree = document.querySelector('.q3')
let output = document.createElement('p')

let user = {
    name: 'Max',
    surname: 'Poz',
    patronymic: 'Yr',
}

output.textContent = `1 задание. ${user.name}, ${user.surname}, ${user.patronymic}`
qustionTree.append(output)

//Задание 2
let elem1 = document.querySelector('#elem1')
let elem2 = document.querySelector('#elem2')
let elem3 = document.querySelector('#elem3')
//Проверка
elem1.textContent = '2 Задание. Параграф'

//Задание 3
let text = document.querySelector('.www')
text.textContent = '3 задание. test'

//Задание 4
let btn1 = document.querySelector('.btn-1')
let btn2 = document.querySelector('.btn-2')
let btn3 = document.querySelector('.btn-3')

btn1.addEventListener('click', () => console.log(1))
btn2.addEventListener('click', () => console.log(2))
btn3.addEventListener('click', () => console.log(3))

//Задание 5
let root = document.getElementById('root')

let h1 = document.createElement('h1')
let p = document.createElement('p')
let site = document.createElement('a')

h1.textContent = 'Заголовок'
p.textContent = 'Это мой текст'
site.textContent = 'Ссылка на Яндекс'

// h1.classList.add('zag')
// site.setAttribute('href', 'https://yandex.ru')
// site.setAttribute('target', '_blank')

h1.style.border = '1px solid'
site.href = 'https://yandex.ru'
site.target = '_blank'

root.append(h1, p, site)

