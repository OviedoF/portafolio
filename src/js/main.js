import { lettersAnimator } from "./animate-letters.js";

(async () => {
    await window.addEventListener('load', () => {

        setTimeout(() => {
            const loaderContainer = document.querySelector('.loader-container');

            loaderContainer.style.display = "none";   
        }, 1000);

    })

    new Typed('.typed', {
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
    new fullpage('#fullpage', {
        easing: 'easeOutBounce',
        easingcss3: 'ease-in',
        scrollingSpeed: 800,

        // NAVIGATION //
        navigation: true,
        navigationPosition: 'left',
        menu: '#menu',
        anchors: ['home', 'aboutme', 'works', 'contact'],
        navigationTooltips: ['Home', 'About Me', 'Works', 'Contact']
    });

    //---------------------------------------------------------------------//
}) ();