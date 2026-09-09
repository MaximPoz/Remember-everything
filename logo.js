const logo = document.querySelector('.prod-img')

let isPaused = false
let degrees = 0

function animate() {
    if(!isPaused){
        degrees++
        logo.style.transform = `rotate(${degrees}deg)`

        requestAnimationFrame(animate)
    }
}

animate()

logo.addEventListener('mouseenter', ()=>{
    isPaused = true
})

logo.addEventListener('mouseleave', ()=>{
    isPaused = false
    animate()
})