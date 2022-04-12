/*===========BurgerMenu==============*/
const buttonBurgerMenu = document.querySelector('.header__burger-menu');
const headerMenu = document.querySelector('.header__menu-container');
const headerLinks = document.querySelector('.header__links')
const wrapper = document.querySelector(".wrapper");

function burgerMenuHandler() {
    buttonBurgerMenu.classList.toggle("activate");
    headerMenu.classList.toggle("activate");
    headerLinks.classList.toggle("activate");
    document.body.classList.toggle("lock");

    if (wrapper.classList.contains("lock")) {
        wrapper.classList.add("unlock")
        setTimeout(() => wrapper.classList.remove("unlock"), 500)
    }
    wrapper.classList.toggle("lock")
}


wrapper.addEventListener("click", wrapperClickHandler)

function wrapperClickHandler(e) {
    console.log(e.target.closest(".header__burger-menu"))
    if (e.target.closest(".header__burger-menu")) {
        burgerMenuHandler();
    } else if (headerMenu.classList.contains("activate") && e.target.closest(".header__menu-item")) {
        burgerMenuHandler();
    } else if (headerMenu.classList.contains("activate") && e.target.closest(".lock") && !e.target.closest(".header__menu-container")) {
        burgerMenuHandler();
    }
}

/*================Form=======*/
const form = document.forms['footer__form'];
form.addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();
    form.reset();
}

/*===========ScrollAnimations===========*/
const animItems = document.querySelectorAll("._anim-items");

if (animItems.length > 0) {
    window.addEventListener("scroll", animOnScroll);

    function animOnScroll(params) {
        colorMenu();
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }
            if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                animItem.classList.add("_active");
            } else {
                if (!animItem.classList.contains('_anim-no-hide')) {
                    animItem.classList.remove("_active");
                }
            }
        }
    }

    let main = document.querySelector("main");

    function colorMenu() {
        if (pageYOffset !== 0) {
            headerMenu.classList.add("scrolled")
        }else{
            headerMenu.classList.remove("scrolled")
        }
        if (pageYOffset >= main.offsetTop) {
            headerMenu.classList.add('black')
            buttonBurgerMenu.classList.add('black');
        } else {
            headerMenu.classList.remove('black')
            buttonBurgerMenu.classList.remove('black');
        }
    }

    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return {
            top: rect.top + scrollTop, left: rect.left + scrollLeft
        }
    }

    animOnScroll();
}
/*=====Slider=====*/
$('.photos__slider').slick({
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: true,
});

$('.photos__slider-nav').slick({
    asNavFor: ".photos__slider",
    slidesToShow: 1,
    speed: 50,
    fade: true,
});