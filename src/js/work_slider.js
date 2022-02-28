const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');
const slider = document.querySelector('.work_slider');
const slides = document.querySelectorAll('.work_slide');

const slideIcons = document.querySelectorAll('.slide-icon');

const numberOfSlides = slides.length;

var slideNumber = 0;

nextBtn.addEventListener('click', () => {
    slides.forEach((slide) => {
        slide.classList.remove('active');
    });
    slideIcons.forEach((slideIcon) => {
        slideIcon.classList.remove('active');
    });

    slideNumber++;

    if(slideNumber > (numberOfSlides - 1)){
        slideNumber = 0;
    }

    slides[slideNumber].classList.add('active');
    slideIcons[slideNumber].classList.add('active');

})


// PREVIOUS

prevBtn.addEventListener('click', () => {
    slides.forEach((slide) => {
        slide.classList.remove('active');
    });
    slideIcons.forEach((slideIcon) => {
        slideIcon.classList.remove('active');
    });

    slideNumber--;

    if(slideNumber < 0){
        slideNumber = numberOfSlides -1;
    }

    slides[slideNumber].classList.add('active');
    slideIcons[slideNumber].classList.add('active');

})

// AUTOPLAY

let playSlider;

let repeater = () => {
    playSlider =setInterval(() => {
        slides.forEach((slide) => {
            slide.classList.remove('active');
        });
        slideIcons.forEach((slideIcon) => {
            slideIcon.classList.remove('active');
        });
    
        slideNumber++;
    
        if(slideNumber > (numberOfSlides - 1)){
            slideNumber = 0;
        }
    
        slides[slideNumber].classList.add('active');
        slideIcons[slideNumber].classList.add('active');
    }, 4000);
}
repeater();

//STOP AUTOPLAY

slider.addEventListener('mouseover', () => {
    clearInterval(playSlider);
});

slider.addEventListener('mouseout', () => {
    repeater();
})

//SLIDE ICONS
let id = 0;

slideIcons.forEach(icon => {
    id++;
   
    icon.classList.add(parseInt(id));

    icon.addEventListener('click', (e) => {
        slides.forEach((slide) => {
            slide.classList.remove('active');
        });
        slideIcons.forEach((slideIcon) => {
            slideIcon.classList.remove('active');
        });

        slides[e.target.classList[1] - 1].classList.add('active');
        slideIcons[e.target.classList[1] - 1].classList.add('active');
    })
})