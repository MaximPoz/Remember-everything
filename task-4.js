//Бургер меню
function burger() {
    let menu = document.querySelector('.menu')
    let position = 0
    let flag = true

    menu.addEventListener('click', function animate() {
        if (flag) {
            position++
            menu.style.transform = `translateX(${position}px)`
            if (position < 150) {
                requestAnimationFrame(animate)
            } else {
                flag = false
            }

        } else {
            position--
            menu.style.transform = `translateX(${position}px)`
            if (position > 0) {
                requestAnimationFrame(animate)
            } else {
                flag = true
            }
        }
    })
}
 burger()


//Кубик
let square = document.querySelector('.square')

let moveSquare = square.animate(
    [
        {transform: "translateX(0)"},
        {transform: "translateX(350px)"},
        {transform: "translateX(0)"},
    ],
    {
        duration: 5000
    }

)

moveSquare.pause()

const btnPlay = document.querySelector('#btnSquare')

btnPlay.addEventListener("click", ()=>{
    moveSquare.play()
})
