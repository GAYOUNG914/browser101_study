const figure = document.querySelector('.figure');
const picture = document.querySelector('.target');
const vertical = document.querySelector('.line-ver')
const horizontal = document.querySelector('.line-horizon')

function follow(event) {


    const x = event.pageX;
    const y = event.pageY;

    figure.innerHTML = `
    pageX = ${event.pageX},
    pageY = ${event.pageY}
    `
    figure.style.top = `${y}px`
    figure.style.left = `${x}px`
    picture.style.top = `${y}px`
    picture.style.left = `${x}px`
    horizontal.style.top = `${y}px`
    vertical.style.left = `${x}px`
}

window.addEventListener('mousemove', follow);