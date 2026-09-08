function Users(name, email) {
    this.name = name;
    this.email = email;
}

Users.prototype.informList = function () {
    return `Имя пользователя: ${this.name}, email: ${this.email}`
}

function formatMessage(users) {
    let usersList = document.getElementById('usersList')
    usersList.innerHTML = '';

    for (let i = 0; i < users.length; i++) {
        let list = document.createElement('li')

        list.textContent = `Имя пользователя: ${users[i].name}, email: ${users[i].email}`
        list.addEventListener("click", () => { list.remove() })

        usersList.append(list)
    }
}

function createUser(fields) {
    let newUser = {}

    for (let i = 0; i < fields.length; i++) {
        do {
            const fieldValue = prompt(fields[i].message)
            if (fieldValue) {
                newUser[fields[i].key] = fieldValue
                break;
            }
        } while (true)
    }
    return new Users(newUser.name, newUser.email)
}

function init() {
    let users = []
    let btnCreatUser = document.querySelector(".usersButton")

    btnCreatUser.addEventListener("click", () => {
        let nameEL = document.querySelector("input[type='text']")
        let emailEL = document.querySelector("input[type='email']")

        let name = nameEL.value;
        let email = emailEL.value;

        if (name && email) {
            let user = new Users(name, email)
            users.push(user)
            formatMessage(users)

            nameEL.value = ''
            emailEL.value = ''
        }
    })

    formatMessage(users)
}

init()


//Анонимная функция - нам нужно создать функцию в которую будут приходить
//2 аргумента arr и функция обратного вызова (callback), в arr будет массив который мы будем переберать FOR,  
//будет агонимная функция, результат которой надо пушить в пустой массив 
//а в callback будет фунцкия которая просто возвращает свой аргумент который мы можем изменять (там будет элемент массива который перебераем)
//И не забыть вернуть заполненый новый массив обратно в функцию

function each(arr, callback) {
    const arrRes = []
    for (let i = 0; i < arr.length; i++) {
        arrRes.push(callback(arr[i]))
    }
    return arrRes
}

let resCallback = each([1, 2, 3], function (params) {
    return params * 10
})


//setInterval - создаём обратный отчёт

/* function init() {
    let sec = +prompt('Введите колличество секунд')
    if(sec <= 0 ){
        alert('Введите значение больше 0')
        init()
    }else{
    let timer = setInterval(function () {
        sec--
        console.log(`Осталось ${sec} секунд`);

        if (sec === 0) {
            console.clear()
            clearInterval()
            init()
        }
    }, 1000
    )}
} */
//init()