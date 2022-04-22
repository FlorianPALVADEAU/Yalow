const leftArrow_about = document.querySelector('.leftArrow_about')
const rightArrow_about = document.querySelector('.rightArrow_about')
const left_about = document.querySelector('.left_about')
const middle_about = document.querySelector('.middle_about')
const right_about = document.querySelector('.right_about')
const mainImg_about = document.querySelector('.mainImg_about')
var counter_about = 1

leftArrow_about.addEventListener('click', e => {
    if (counter_about === 1) {
        left_about.src = " ../src/dash_selected.png";
        middle_about.src = " ../src/dash_unselected.png";
        right_about.src = " ../src/dash_unselected.png";
        mainImg_about.src="../src/slider_about_1.png"
        counter_about = 3
    }else if (counter_about === 2) {
        middle_about.src = " ../src/dash_selected.png";
        left_about.src = " ../src/dash_unselected.png";
        right_about.src = " ../src/dash_unselected.png";
        mainImg_about.src="../src/slider_about_2.png"
        counter_about--
    }else if (counter_about === 3) {
        right_about.src = " ../src/dash_selected.png";
        middle_about.src = " ../src/dash_unselected.png";
        left_about.src = " ../src/dash_unselected.png";
        mainImg_about.src="../src/slider_about_3.png"
        counter_about --
    }
    console.log(counter_about)
    e.preventDefault()
});

rightArrow_about.addEventListener('click', e => {
    if (counter_about === 1) {
        left_about.src = " ../src/dash_selected.png";
        middle_about.src = " ../src/dash_unselected.png";
        right_about.src = " ../src/dash_unselected.png";
        mainImg_about.src="../src/slider_about_1.png"
        counter_about++
    }else if (counter_about === 2) {
        middle_about.src = " ../src/dash_selected.png";
        left_about.src = " ../src/dash_unselected.png";
        right_about.src = " ../src/dash_unselected.png";
        mainImg_about.src="../src/slider_about_2.png"
        counter_about++
    }else if (counter_about === 3) {
        right_about.src = " ../src/dash_selected.png";
        middle_about.src = " ../src/dash_unselected.png";
        left_about.src = " ../src/dash_unselected.png";
        mainImg_about.src="../src/slider_about_3.png"
        counter_about = 1
    }
    console.log(counter_about)
    e.preventDefault()
})


left_about.addEventListener('click', e =>{
    left_about.src = " ../src/dash_selected.png";
    middle_about.src = " ../src/dash_unselected.png";
    right_about.src = " ../src/dash_unselected.png";
    mainImg_about.src="../src/slider_about_1.png"
    e.preventDefault()
})

middle_about.addEventListener('click', e =>{
    middle_about.src = " ../src/dash_selected.png";
    left_about.src = " ../src/dash_unselected.png";
    right_about.src = " ../src/dash_unselected.png";
    mainImg_about.src="../src/slider_about_2.png"
    e.preventDefault()
})

right_about.addEventListener('click', e =>{
    right_about.src = " ../src/dash_selected.png";
    middle_about.src = " ../src/dash_unselected.png";
    left_about.src = " ../src/dash_unselected.png";
    mainImg_about.src="../src/slider_about_3.png"
    e.preventDefault()
})