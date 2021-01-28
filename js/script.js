document.addEventListener('DOMContentLoaded', () => {
  $('.wrapper').addClass('loaded');

  $('.icon-menu').click(function (event) {
    $(this).toggleClass('active');
    $('.menu__body').toggleClass('active');
    $('body').toggleClass('lock');
  });

  $('.menu__link').click(function (event) {
    $('.icon-menu').toggleClass('active');
    $('.menu__body').toggleClass('active');
  });
});