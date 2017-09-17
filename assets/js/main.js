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

		var	$window = $(window),
			$body = $('body');

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

			$window.on('load', function() {
				$body.removeClass('is-loading');
			});

      $window.on('hashchange', function(event) {
					// Empty hash?
						if (location.hash != ''
						||	location.hash != '#') {
							// Hide.
                //event.preventDefault();
								//event.stopPropagation();
                $("ol").hide();                  
								$("ol#" + location.hash.substr(1)).show();                
                //event.preventDefault();
								//event.stopPropagation();
						}            
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
        
				var x = parseInt($('.wrapper').first().css('padding-top')) - 15;
				$('#nav a, .scrolly').scrolly({
					speed: 1000,
					offset: x
				});         
			});  
      $("ol").hide();         
      if (location.hash != ''
        &&	location.hash != '#')
          $window.on('load', function() {
            $("ol#" + location.hash.substr(1)).show();
      });
      
      //$("a").click( function(event) {
      //  if (location.hash != ''
			//			||	location.hash != '#') {
							//event.preventDefault();
							//event.stopPropagation();                            
			//			}      
      //});

  });
})(jQuery);

