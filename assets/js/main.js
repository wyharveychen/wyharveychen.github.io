/*
	Miniport by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	skel
		.breakpoints({
			desktop: '(min-width: 737px)',
			tablet: '(min-width: 737px) and (max-width: 1200px)',
			mobile: '(max-width: 736px)'
		})
		.viewport({
			breakpoints: {
				tablet: {
					width: 1080
				}
			}
		});

	$(function() {
    var $is_content = false;
		var	$window = $(window),
			$body = $('body');

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

			$window.on('load', function() {
				$body.removeClass('is-loading');
			});
      
		// Fix: Placeholder polyfill.
			$('form').placeholder();

		// Prioritize "important" elements on mobile.
			skel.on('+mobile -mobile', function() {
				$.prioritize(
					'.important\\28 mobile\\29',
					skel.breakpoint('mobile').active
				);
			});

		// CSS polyfills (IE<9).
			if (skel.vars.IEVersion < 9)
				$(':last-child').addClass('last-child');

		// Scrolly.
			$window.load(function() {
        
				var x = parseInt($('.wrapper').first().css('padding-top')) - 5;
				$('#nav a, .scrolly').scrolly({
					speed: 1000,
					offset: x
				});         
			});  
              
      $(".popout").on( "click", function(event) {      
          $("#page_" + event.target.id).show();  
          $('html, body').css({
              overflow: 'hidden',            
          });
      });

      $(".modal-content").on( "click", function(event) {               
          $is_content = true              
      });
      
      $(".modal").on( "click", function(event) {      
          //$("#page_" + event.target.id).show();  
          var $this = $(this);
          if($is_content){
            $is_content = false 
          }else{
            $this.hide() 
            $('html, body').css({
                overflow: 'auto',              
            });            
          }
      });
            
      
  });
})(jQuery);

