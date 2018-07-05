//////TOP BUTTON/////////////////////////////////////


window.addEventListener('scroll', () => {
    const button = $('.top-button');
    if (scrollY > 477) button.fadeIn(500);
    else button.fadeOut(500)
});

/////////////////EFFECTS/////////////////////////
let count = 0;
let countRocket = 10;


const crazy = () => {
    const icon = $('.header__icon');
    count = count + 1;

    if (count === 360) count = 0;

    icon.css('transform', `rotate(${count}deg)`)
};

const rocket = () => {
    const limit = $(window).width()-80;
    const icon = $('.rocket-icon');
    countRocket ++;

    if (countRocket > limit) {
        icon.fadeOut(1000);
        return
    }
    icon.css('left', `${countRocket}px`);
};

setInterval(crazy, 50);
setInterval(rocket, 8);


////////SMOOTH SCROLLING/////////////////////////////////////////////

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
