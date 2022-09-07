// submenu - toggle class _active for submenu
let menuArrows = document.querySelectorAll('.menu__arrow');
if(menuArrows.length > 0) {
    for (let index = 0; index < menuArrows.length; index++) {
        const menuArrow = menuArrows[index];
        menuArrow.addEventListener("click", function(e) {
            menuArrow.parentElement.classList.toggle('_active');
        });
    }
}
// swiper - slider main-header
new Swiper('.sentence', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    autoplay: {
        delay: 3000,
    },
    speed: 800,
});

// slick-slider (tours-sliders)

import $ from "jquery";
import "slick-carousel";

$(".slider").slick({
    dots: false,
    slidesToShow: 3,
    speed: 1000,
    autoplay: true,
    responsive: [
        {
            breakpoint: 1710,
            settings: {
                slidesToShow:2,
            }
        },
        {
            breakpoint: 1310,
            settings: {
                slidesToShow: 1,
                centerMode: true,
            }
        }
    ]
});

// tabs - for tour section

document.querySelectorAll('.tabs-triggers__item').forEach((item) =>
    item.addEventListener('click', function(e) {
        e.preventDefault();
        
        const id = e.target.getAttribute('href').replace('#', '');

        document.querySelectorAll('.tabs-triggers__item').forEach(
            (child) => child.classList.remove('tabs-triggers__item--active')
        );
        
        document.querySelectorAll('.tabs-content__item').forEach(
            (child) => child.classList.remove('tabs-content__item--active')
        );

        item.classList.add('tabs-triggers__item--active');
        document.getElementById(id).classList.add('tabs-content__item--active');
    })
); 

document.querySelector('.tabs-triggers__item').click();