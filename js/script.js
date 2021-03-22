document.addEventListener('DOMContentLoaded', () => {

    const menu = document.querySelector('.menu'),
        menuItem2 = document.querySelector('.menu__item-2'),
        menuItem4 = document.querySelector('.menu__item-4'),
        humberger = document.querySelector('.humberger'),
        page = document.querySelector('.page');


    if (document.documentElement.clientWidth >= 992) {

        function addClassHover(item) {
            item.addEventListener('mouseover', () => {
                page.classList.add('hover');

            })
        }

        function removeClassHover(item) {
            item.addEventListener('mouseout', () => {
                page.classList.remove('hover')
            })
        }

        addClassHover(menuItem2);
        addClassHover(menuItem4);

        removeClassHover(menuItem2)
        removeClassHover(menuItem4)

    }

    humberger.addEventListener('click', () => {
        document.body.classList.toggle('overflow')
        humberger.classList.toggle('active')
        menu.classList.toggle('active')
    })

})

$(document).ready(function () {

    function toggleSubmenu(btn, submenu) {
        $(btn).each(function () {
            $(this).click(function () {
                if ($(this).next().next().hasClass('active')) {
                    $(this).removeClass('active')
                    $(this).next().next().removeClass('active')
                } else {
                    $(btn).each(function () {
                        $(this).removeClass('active')
                    })
                    $(submenu).each(function () {
                        $(this).removeClass('active')
                    })
                    $(this).addClass('active')
                    $(this).next().next().addClass('active')
                }
            })
        })
    }

    toggleSubmenu('.arrow-1', '.submenu')

    $('.arrow-2').each(function () {
        $(this).click(function () {
            $(this).next().next().toggleClass('active')
            $(this).toggleClass('active')
        })
    })
})