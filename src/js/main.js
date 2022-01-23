import { lettersAnimator } from "./animate-letters.js";

(async () => {
    await window.addEventListener('load', () => {

        setTimeout(() => {
            const loaderContainer = document.querySelector('.loader-container');

            loaderContainer.style.display = "none";   
        }, 1000);

    })

    const typed = new Typed('.typed', {
        strings: ['<i class="typedText-main">front-end.</i>', '<i class="typedText-main">ux/ui designer.</i>', '<i class="typedText-main">codder.</i>', '<i class="typedText-main">nerd.</i>', '<i class="typedText-main">geek.</i>'],
        typeSpeed: 50,
        startDelay: 200,
        backSpeed: 75,
        shuffle: false,
        backDelay: 1000,
        loop: true,
        loopCount: false,
        showCursor: true,
        cursorChar: '|',
        contentType: 'html'
    });

    setTimeout(() => {
        lettersAnimator.init('h1');
        lettersAnimator.init('.nav-container a');
    }, 1000);

    //---------------------------------------------------------------------//

    const navBar = document.querySelector('.nav-container');
    const heroImg = document.querySelector('.hero-img');
    
    //---------------------------------------------------------------------//
    const pageSections = new fullpage('#fullpage', {
        easing: 'easeOutBounce',
        easingcss3: 'ease-in',
        scrollingSpeed: 800,
        navigation: true,
        navigationPosition: 'left'
    });

    //---------------------------------------------------------------------//
}) ();