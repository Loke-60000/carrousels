const  carrousels = document.querySelectorAll(".Image");
const nextimg = document.querySelector(".button-next");
const previmg = document.querySelector(".button-prev");

let currentImg = 0;
let maxImg =  carrousels.length - 1;

 carrousels.forEach((slide, index) => {
    slide.style.transform = `translateX(${index * 100}%)`;
});

nextimg.addEventListener("click", function () {
    if (currentImg === maxImg) {
        currentImg = 0;
    } else {
        currentImg++;
    }

     carrousels.forEach((slide, index) => {
        slide.style.transform = `translateX(${100 * (index - currentImg)}%)`;
    });
});

previmg.addEventListener("click", function () {
    if (currentImg === 0) {
        currentImg = maxImg;
    } else {
        currentImg--;
    }

     carrousels.forEach((slide, index) => {
        slide.style.transform = `translateX(${100 * (index - currentImg)}%)`;
    });
});