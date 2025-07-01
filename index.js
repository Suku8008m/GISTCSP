const prev = document.getElementById('prev');
const next = document.getElementById('next');
const slide = document.getElementById('slide');


let currentIndex = 0;
let width = 0;

function updateSlide() {
    slide.style.transform = `translateX(-${width}px)`;
}


const totalSlides = slide.children.length;
next.onclick = () => {
    if (currentIndex < totalSlides - 1) {
        currentIndex++;
        width = currentIndex * 550;
        updateSlide();
    }

};

prev.onclick = () => {
    if (currentIndex > 0) {
        currentIndex--;
        width = currentIndex * 550;
        updateSlide();
        console.log(currentIndex)

    }

};
