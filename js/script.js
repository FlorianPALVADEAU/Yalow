const leftArrow = document.querySelector('.leftArrow')
const rightArrow = document.querySelector('.rightArrow')
const left = document.querySelector('.left')
const middle = document.querySelector('.middle')
const right = document.querySelector('.right')
const mainImg = document.querySelector('.mainImg')
var counter = 1

leftArrow.addEventListener('click', e => {
    if (counter === 1) {
        left.src = " ../src/dash_selected.png";
        middle.src = " ../src/dash_unselected.png";
        right.src = " ../src/dash_unselected.png";
        mainImg.src="../src/yallow_project_1.png"
        counter = 3
    }else if (counter === 2) {
        middle.src = " ../src/dash_selected.png";
        left.src = " ../src/dash_unselected.png";
        right.src = " ../src/dash_unselected.png";
        mainImg.src="../src/yallow_project_2.png"
        counter--
    }else if (counter === 3) {
        right.src = " ../src/dash_selected.png";
        middle.src = " ../src/dash_unselected.png";
        left.src = " ../src/dash_unselected.png";
        mainImg.src="../src/yallow_project_3.png"
        counter --
    }
    
    e.preventDefault()
});

rightArrow.addEventListener('click', e => {
    if (counter === 1) {
        left.src = " ../src/dash_selected.png";
        middle.src = " ../src/dash_unselected.png";
        right.src = " ../src/dash_unselected.png";
        mainImg.src="../src/yallow_project_1.png"
        counter++
    }else if (counter === 2) {
        middle.src = " ../src/dash_selected.png";
        left.src = " ../src/dash_unselected.png";
        right.src = " ../src/dash_unselected.png";
        mainImg.src="../src/yallow_project_2.png"
        counter++
    }else if (counter === 3) {
        right.src = " ../src/dash_selected.png";
        middle.src = " ../src/dash_unselected.png";
        left.src = " ../src/dash_unselected.png";
        mainImg.src="../src/yallow_project_3.png"
        counter = 1
    }
    
    e.preventDefault()
})


left.addEventListener('click', e =>{
    left.src = " ../src/dash_selected.png";
    middle.src = " ../src/dash_unselected.png";
    right.src = " ../src/dash_unselected.png";
    mainImg.src="../src/yallow_project_1.png"
    e.preventDefault()
})

middle.addEventListener('click', e =>{
    middle.src = " ../src/dash_selected.png";
    left.src = " ../src/dash_unselected.png";
    right.src = " ../src/dash_unselected.png";
    mainImg.src="../src/yallow_project_2.png"
    e.preventDefault()
})

right.addEventListener('click', e =>{
    right.src = " ../src/dash_selected.png";
    middle.src = " ../src/dash_unselected.png";
    left.src = " ../src/dash_unselected.png";
    mainImg.src="../src/yallow_project_3.png"
    e.preventDefault()
})