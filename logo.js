const logo = document.querySelector('.prod-img')

const animation = logo.animate(
    [
        {transform: 'rotate(0deg)'},
        {transform: 'rotate(360deg)'}
    ],
    {
        duration: 3000,
        iterations: Infinity,
    }
)

animation.pause()

logo.addEventListener('mouseenter', () => {
    animation.play()
})


logo.addEventListener('mouseleave', () => {
    animation.pause()
})