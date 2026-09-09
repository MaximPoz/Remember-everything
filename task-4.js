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
