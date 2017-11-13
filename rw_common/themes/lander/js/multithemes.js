jQuery.noConflict();

jQuery(function ($) {

// Trigger JS with external CSS, {top:0px;} = OFF and {top:1px;} = On  
var $banner_parallax_on_off = parseInt($('#banner_parallax_on_off').css("top")); 
var $banner_fade_in = parseInt($('#banner_fade_in').css("top")); 

//----------------
        if ($banner_parallax_on_off ) { 
                              
	$(window).scroll(function(e){
	  banner_parallax_on_off();
	});
	function banner_parallax_on_off(){
	  var scrolled = $(window).scrollTop();
	  $('#rw-banner-image, #opacity_wrapper').css('margin-top',+(scrolled*0.2)+'px');     
	}
      
  }; 

//----------------

    if ($banner_fade_in) { 
                          
    $(document).ready(function (){	
      $('body').css('display', 'none').delay(200).fadeTo(600, 1,'swing'); 
      $('#pageHeader h1, #drop').css('display', 'none').delay(600).fadeTo(500, 1,'swing'); 
      $('#pageHeader h2').css('display', 'none').delay(800).fadeTo(600, 1,'swing');
    });
     
  }; 

//-----------

//  Animated top
       	// #up ID
       	$("#up").hide();    	
       	// #up animation
       	$(function () {
       		$(window).scroll(function () {
       		if ($(this).scrollTop() > 400) { 
       		$('#up').fadeIn(420);   				
       			} else {
       			$('#up').fadeOut(350);	
       			}
       		});    		    
       		// scroll body to 0px on click
       		$('#up a').click(function () {
       		$('body,html').animate({
       				scrollTop: 0, }, 240);
       			return false;
       		});
       	});
//  Animated top END    



 });





