 $(window).resize(function(){
   var width = $(window).width();
   //var hasClass = $('#main-nav').hasClass('navbar-fixed-top');
   if(width <= 773){
       //$('#main-nav').removeClass('navbar-fixed-top');
       $('#main-nav').hide();
   }
   if (width > 773) {
       //$('#main-nav').addClass('navbar-fixed-top');
       $('#main-nav').show();
   }
})
.resize();//trigger the resize event on page load.

