/* start counters */
	/* Init definition:
	var counter = new CountUp("elementId", starValue, endValue, decimalPts, duration in seconds);
	*/
	
	/* init counter-1 */
	var counterOneAnim = new CountUp("counter-1", 0, 2.5, 1, 2);
	/* init counter-1 */

	/* init counter-2 */
	var counterTwoAnim = new CountUp("counter-2", 0, 2.6, 1, 2);
	/* init counter-2 */

	/* init counter-3 */
	var counterThreeAnim = new CountUp("counter-3", 0, 250, 0, 2);
	/* end counter-3 */

	/* init counter-4 */
	var counterFourAnim = new CountUp("counter-4", 0, 2.6, 1, 2);
	/* end counter-1 4/
/* end counters */

/* start WOW.js */
var wow = new WOW(
	{
		boxClass: 'wow',
		animateClass: 'animated',
		offset: 0,
		mobile: true,
		live: true,
		/* start counter-timeout */
		/* Pause counterup.js until wow.js finishes animating the element */ 
		callback: function(box){ // call function when animation starts
			if(box.querySelector("span.counter") != null){ // check if animated element has a counter.js child
				/* start counter-1 timeout */
				if(box.querySelector("span.counter").id == "counter-1"){ // check if child counter id is counter-1
					if (!counterOneAnim.error) {
						setTimeout(function(){counterOneAnim.start();}, 1000); // pause counterup for 1000ms (animation duration + 100ms)
					} else {
							console.error(counterOneAnim.error);
					}
				}
				/* end counter-1 timeout */
				/* start counter-2 timeout */
				if(box.querySelector("span.counter").id == "counter-2"){
					if (!counterTwoAnim.error) {
						setTimeout(function(){counterTwoAnim.start();}, 1200);
					} else {
							console.error(counterTwoAnim.error);
					}
				}
				/* end counter-2 timeout */
				/* start counter-3 timeout */
				if(box.querySelector("span.counter").id == "counter-3"){
					if (!counterThreeAnim.error) {
						setTimeout(function(){counterThreeAnim.start();}, 1000);
					} else {
							console.error(counterThreeAnim.error);
					}
				}
				/* end counter-3 timeout */
				/* start counter-4 timeout */
				if(box.querySelector("span.counter").id == "counter-4"){
					if (!counterFourAnim.error) {
						setTimeout(function(){counterFourAnim.start();}, 1200);
					} else {
							console.error(counterFourAnim.error);
					}
				}
				/* end counter-4 timeout */
			}
		}, 
		/*end counter-timeout */
		scrollContainer: null
	}
);
wow.init();
/* end WoW.js */

/* start popup-youtube */
$(document).ready(function() {
	$('.popup-youtube').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: true,
		iframe: {
			markup: '<div class="mfp-iframe-scaler">'+
					  '<div class="mfp-close"></div>'+
					  '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
					'</div>', // HTML markup of popup, `mfp-close` will be replaced by the close button
		  
			patterns: {
			  youtube: {
				index: 'youtube.com/', // String that detects type of video (in this case YouTube). Simply via url.indexOf(index).
		  
				id: 'v=', // String that splits URL in a two parts, second part should be %id%
				// Or null - full URL will be returned
				// Or a function that should return %id%, for example:
				// id: function(url) { return 'parsed id'; }
		  
				src: 'http://www.youtube.com/embed/%id%' // URL that will be set as a source for iframe.
			  }
			},
		  
			srcAction: 'iframe_src', // Templating object key. First part defines CSS selector, second attribute. "iframe_src" means: find "iframe" and set attribute "src".
		  }
	});
});
/* end popup-youtube */

/* start owl-carousel */
$(document).ready(function(){
	$('.features-carousel').owlCarousel({
	  loop: true,
	  margin: 30,
	  nav: false,
	  center: false,
	  dots: false,
	  autoplay: true,
	  autoplayTimeout: 4000,
	  smartSpeed: 1000,
	  responsive:{
		  0:{
			  items:1
		  },
		  480:{
			  items:2
		  },
		  600:{
			  items:3
		  },
		  1200:{
			  items:4
		  },
		  1500:{
			  items:5
		  },
		  1900:{
			  items:6
		  }
	  }
  })
	});
/* end owl-carousel */