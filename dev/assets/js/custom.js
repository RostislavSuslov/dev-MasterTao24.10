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
  
 
  function showAlert() {
    alert("Max " + 18)
  }
  showAlert()
   
  
  // const showAlert2 = (name, age)=> {
  //   alert(name, age)
  // }
  
  // showAlert2("Bill " + 12)




  mobileOnlySlider("#slider-advantages", true, false, 1024);

  function mobileOnlySlider($slidername, $dots, $arrows, $breakpoint) {
    
    var slider = $($slidername);
    var settings = {
      mobileFirst: true,
      dots: $dots,
      arrows: $arrows,
      responsive: [
        {
          breakpoint: $breakpoint,
          settings: "unslick"
        }
      ]
    };
  
    slider.slick(settings);
  
    $(window).on("resize", function () {
      if ($(window).width() > $breakpoint) {
        return;
      }
      if (!slider.hasClass("slick-initialized")) {
        return slider.slick(settings);
      }
    });
  } // Mobile Only Slider

  const burger = document.querySelector('.btn-burger');
  const navigation = document.querySelector('.header__navigation');

  const toggleMenu =()=> {
      burger.classList.toggle('open');
      navigation.classList.toggle('show');
  }

  burger.addEventListener('click', toggleMenu);

  const checkboxes = document.querySelectorAll('[type="checkbox"]')
  if(checkboxes.length > 0) {
    checkboxes.forEach(checkbox => {
      checkbox.closest('.input-column').classList.add('column-checkbox')
    })
  }



  const file = document.querySelectorAll('.input-file')

  if(file.length > 0) {
    file.forEach(item => {
      item.closest('.input-column').style.paddingTop = '6px'
    })
  }


function addClassCharter() {
    const section = document.querySelectorAll('section')
    section.forEach(item => item.classList.add('charter'))
}

document.querySelector('.home-page') ? addClassCharter() : null;










  
  // const arr = [1, 2, 3, 4]
  // const x = arr.length;
  // console.log(x);
  

  const arrayBurgers = document.querySelectorAll('.hamburger')
  
  if (arrayBurgers.length > 0) {
      arrayBurgers.forEach(item => {
        item.addEventListener('click', function(){
          item.classList.toggle('is-active');
      })
    })
  }

});



