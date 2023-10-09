
const circles = document.querySelectorAll('.icon');
circles.forEach((circle) => {
    circle.addEventListener('click', (e) => {
        circles.forEach((circle) => {
            circle.classList.remove('active');
        })
        e.target.classList.add('active');
    })
})
