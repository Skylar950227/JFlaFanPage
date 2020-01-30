$(window).scroll(function() {
    if($(this).scrollTop() < 100)
        $('.menubg').fadeIn();
    else
        $('.menubg').fadeOut();
});

$(".btn").on("click", function() {
  $('.mainmenu1').toggleClass("show")
  $('.mainmenu2').toggleClass("show")
});
