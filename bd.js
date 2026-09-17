class User {
    constructor({ name, email }) {
        this.name = name;
        this.email = email;
    }

    informList() {
        return `Имя пользователя: ${this.name}, email: ${this.email}`
    }
}

function formatMessage(users) {
    let usersList = document.getElementById('usersList')
    usersList.innerHTML = '';

    users.forEach(user => {
        const listItem = document.createElement('li')
        listItem.textContent = user.informList()
        usersList.append(listItem)
    });
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
            let user = new User({name, email})
            users.push(user)
            formatMessage(users)

            nameEL.value = ''
            emailEL.value = ''
        }
    })
}

init()


