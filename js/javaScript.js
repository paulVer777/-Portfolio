//////TOP BUTTON/////////////////////////////////////


window.addEventListener('scroll', () => {
    const button = $('.top-button');
    if (scrollY > 477) button.fadeIn(500);
    else button.fadeOut(500)
});

//////////////////////////////////////////////////
let count=0;

const crazy = () => {

    const icon = $('.header__icon')
    count=count+1;

    if(count===360) count=0;

    icon.css('transform', `rotate(${count}deg)`)
console.log(count)


}

setInterval(crazy,50)




