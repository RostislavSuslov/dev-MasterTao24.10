$(document).ready(function(){
    $('#banner').slick({
        // setting-name: setting-value
        arrows: true,
        dots: true,
        fade: true,
        appendArrows: $('.banner-arrows'),
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                arrows: false,
              }
            },
          ]
    });

    const burger = document.querySelector('.btn-burger');
    const navigation = document.querySelector('.header__navigation');

    const toggleMenu =()=> {    
        burger.classList.toggle('open');
        navigation.classList.toggle('show');
    }

    burger.addEventListener('click', toggleMenu);

});

