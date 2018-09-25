/** Alto Contraste **/
$( document ).ready((function(){

	$(".alto_contraste").click(function(){

		var atributo = jQuery.cookie('contraste_site_class');

		if (atributo == "contraste_on"){

			jQuery.cookie('contraste_site_class','contraste_off');
			jQuery("body").removeClass(jQuery.cookie('contraste_site'));
			jQuery(".alto_contraste").attr("class",jQuery.cookie('contraste_site_class'));
			jQuery.cookie('contraste_site','');

		}else{

			jQuery.cookie('contraste_site','alto-contraste');
			jQuery.cookie('contraste_site_class','contraste_on');

			jQuery("body").addClass(jQuery.cookie('contraste_site'));

			jQuery(".alto_contraste").attr("class",jQuery.cookie('contraste_site_class'));
		}

	});

	jQuery("body").addClass(jQuery.cookie('contraste_site'));
	jQuery(".alto_contraste").attr("class", jQuery.cookie('contraste_site_class'));

}));