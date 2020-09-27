// Code By Webdevtrick ( https://webdevtrick.com )
var $nav = $('nav');


$('#fullpage').fullpage({
    sectionsColor: ['#3dcfa1', '#348899', '#ff8b20', '#ff5757'],
    sectionSelector: '.vertical-scrolling',
    navigation: true,
    slidesNavigation: true,
    controlArrows: true,
    anchors: ['firstSection', 'secondSection', 'thirdSection', 'fourthSection'],
    menu: '#menu',

    afterLoad: function(anchorLink, index) {

    },

    onLeave: function(index, nextIndex, direction) {

        if (index == 2){
            $('#second-section .fromLeft').removeClass('animate__animated animate__fadeInLeftBig');
            $('#second-section .fromRight').removeClass('animate__animated animate__fadeInRightBig');
        }
        if (nextIndex == 2){
            $('#second-section .fromLeft').addClass('animate__animated animate__fadeInLeftBig');
            $('#second-section .fromRight').addClass('animate__animated animate__fadeInRightBig');
        }
    },

});