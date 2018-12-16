$(document).ready(function() {
	$('.popup-youtube').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,

		fixedContentPos: false,
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