$(function() {
  $('.gamburger').click (function(e) {
    e.preventDefault();
    $(this).toggleClass('gamburger-active');
    $('.menu-nav').toggleClass('d-block').toggleClass('menu-active');
  });

  $('.form-popup').click(function(e) {
    e.preventDefault();
    $('#exampleModal').arcticmodal();
  });
});


