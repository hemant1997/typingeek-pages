
$(document).ready(function(){
  
  /* 
  ** Set animation effect,
  ** Supprted effects are listed on the documentation file
  */
  clock.effect = "fadeInDown";

  /*  
  ** Set launch time
  ** Accepted format: MM/DD/YYYY HH:MM  E.g: 10/25/2016 20:00
  ** Hours and minutes are optional
  */
  clock.initializeClock('timediv',"10/28/2016");

  // Preload screen fade out when background image is downloaded
  var $div = $('.wrapper'), bg = $div.css('background-image');
  	if (bg) {
    	var src = bg.replace(/(^url\()|(\)$|[\"\'])/g, ''),
      		$img = $('<img>').attr('src', src).on('load', function() {
       			$(".preload").fadeOut(500,function(){});
      	});
  }

 
   
});
