(function($) {
	
	"use strict";
	
	
	
	//Contact Form Validation
	if($('#contact-form').length){
		$('#contact-form').validate({
			rules: {
				name: {
					required: true
				},
				email: {
					required: true,
					//email: true
				},
				subject: {
					required: true
				},
				message: {
					required: true
				}
			}
		});
	}
	

/* ==========================================================================
   When document is Scrollig, do
   ========================================================================== */
	
	$(window).on('scroll', function() {
		
	});
	
/* ==========================================================================
   When document is loading, do
   ========================================================================== */
	
	$(window).on('load', function() {
		
	});	

})(window.jQuery);