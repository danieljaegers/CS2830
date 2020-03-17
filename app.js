$(document).ready(function(){
    $(".navbar_item a").each(function() {
        if ((window.location.pathname.indexOf($(this).attr('href'))) > -1) {
            $(this).parent().addClass('active');
        }
    });
  });