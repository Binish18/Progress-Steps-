const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

let currentActive = 1

next.addEventListener('click', () => {
    currentActive++

    if(currentActive > circles.length) {  // length of circles 
        currentActive = circles.length // equal kardo usky 
    }

    update()
})

prev.addEventListener('click', () => {
    currentActive--    // ulta kardo pechy ki tarah 

    if(currentActive < 1) {
        currentActive = 1
    }

    update()
})

function update() {
    // Iterate through each circle in the 'circles' array
    circles.forEach((circle, idx) => {
          // If the current index is less than the 'currentActive' step,
        // add the 'active' class to the circle; otherwise, remove it.
        if(idx < currentActive) {
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    })
        // Select all elements with the 'active' class

    const actives = document.querySelectorAll('.active')
      // Calculate the progress percentage based on the number of active circles
    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%'
     // Disable 'prev' button if it's the first step, and 'next' button if it's the last step
    if(currentActive === 1) {
        prev.disabled = true
    } else if(currentActive === circles.length) {
        next.disabled = true
    } else {
        // Enable both buttons for steps in between the first and last steps
        prev.disabled = false
        next.disabled = false
    }
}