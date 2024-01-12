const burger = document.querySelector('.btn-burger');
const navigation = document.querySelector('.header__navigation');

const toggleMenu =()=> {    
    burger.classList.toggle('open');
    navigation.classList.toggle('show');
}

burger.addEventListener('click', toggleMenu);
