function formatDateNumber(number) {
	if (number < 10)
		return "0"+number;

	return number;
}

function populateCadernoTST() {
	var date = new Date();
	var cont = 0;

	// Começa do dia anterior ao atual
	date.setDate(date.getDate()-1);

	var select = document.getElementById("cadernoTST");

	if (select) {
		while (cont < 9) {
			var weekday = date.getDay();
	
			if (weekday != 0 && weekday != 6) {
				var formattedDate = formatDateNumber(date.getDate())+"/"+formatDateNumber(date.getMonth()+1)+"/"+date.getFullYear();
	
				select.options[cont++] = new Option("DEJT - TST - "+formattedDate, formattedDate, false, false);
			}
	
			date.setDate(date.getDate()-1);
		}
	}
}

// Interval
var banner_interval;

function resetBannerTimeout(timeout) {
	if (!timeout)
		timeout = 5;
	
	if (banner_interval)
		clearTimeout(banner_interval);
	
	banner_interval = setTimeout(function(){
		rotateBanner();
	}, timeout*1000 );
}

jQuery(document).ready(function(){

	populateCadernoTST();

	jQuery('#navigation ul li:first').addClass('primeiro');
	jQuery('#navigation ul li:last').addClass('ultimo');

	jQuery("#content-wrapper").css( { fontSize:"100%"});

	/* ------- aumenta e diminui fontes do content-wrapper ---- */

	jQuery("#fontes_id").click(function(){

		var atributo = jQuery.cookie('tamanho_fonte_class');

		if (atributo == "diminui_fonte"){
			jQuery.cookie('tamanho_fonte','100%');
			jQuery.cookie('tamanho_fonte_class', 'aumentar_fonte');
			jQuery("#main-content").animate( { fontSize:jQuery.cookie('tamanho_fonte')}, { queue:false, duration:1000 } );
			jQuery("#fontes_id").attr("class",jQuery.cookie('tamanho_fonte_class'));

		}else{
			jQuery.cookie('tamanho_fonte', '145%');
			jQuery.cookie('tamanho_fonte_class', 'diminui_fonte');			
			jQuery("#main-content").animate( { fontSize:jQuery.cookie('tamanho_fonte')}, { queue:false, duration:1000 } );
			jQuery("#fontes_id").attr("class",jQuery.cookie('tamanho_fonte_class'));
		}
	});
	

	/* ------- aumenta e diminui o contraste ---- */

	jQuery("#contraste_id").click(function(){

		var atributo = jQuery.cookie('contraste_site_class');

		if (atributo == "contraste_on"){
			jQuery.cookie('contraste_site_class','contraste_off');
			jQuery("body").removeClass(jQuery.cookie('contraste_site'));
			jQuery("#contraste_id").attr("class",jQuery.cookie('contraste_site_class'));
			jQuery.cookie('contraste_site','');
		}else{
			jQuery.cookie('contraste_site','contraste');
			jQuery.cookie('contraste_site_class','contraste_on');
			jQuery("body").addClass(jQuery.cookie('contraste_site'));
			jQuery("#contraste_id").attr("class",jQuery.cookie('contraste_site_class'));
		}
	});

	jQuery("body").addClass(jQuery.cookie('contraste_site'));
	jQuery("#contraste_id").attr("class", jQuery.cookie('contraste_site_class'));
	jQuery("#main-content").css("font-size", jQuery.cookie('tamanho_fonte'));
	jQuery("#fontes_id").attr("class",jQuery.cookie('tamanho_fonte_class'));



	/* ------- banner rotativo ---- */

	//escondendo ou outros banners
	jQuery(".banner_rotativo .banner_content:first").css("display", "");

	//obtem o numero de banners e seta para comecar mostrar do primeiro
	banners = jQuery(".banner_rotativo .banner_content");
	bannersLength = banners.length;
	currentBanner = bannersLength - 1;

	//insere contador de banners na tela
	htmlSetaAnterior = "<a id='banner_anterior'>&lt;&lt;</a>";
	htmlSetaProx = "<a id='banner_prox'>&gt;&gt;</a>";
	htmlNumeros = "";

	for(var i=0; i < bannersLength; i++){
		var index = i + 1;
		htmlNumeros += "<a class='banner_numero numero"+index+"'>" + index + "</a>";
	}

	jQuery(".banner_rotativo .final-separator").append(htmlSetaAnterior + htmlNumeros + htmlSetaProx);
	jQuery(".banner_rotativo .final-separator").css('display','none');

	/* ------- executa banner rotativo ---- */
	jQuery(".banner_rotativo #banner_anterior").click(function(){
		handlePreviousBanner();
	});

	jQuery(".banner_rotativo #banner_prox").click(function(){
		handleNextBanner();
	});

	jQuery(".banner_rotativo .banner_numero").click(function(){
		var numero = jQuery(this).html();
		updateClasses({currentBanner:this});
		handleNumbersClick({number:numero});
	});

	jQuery("div.banner_rotativo").hover(
			function() {
				clearTimeout(banner_interval);
				$(".banner_rotativo .final-separator").css('display','');
			}, 
			function() {
				resetBannerTimeout(1);
				$(".banner_rotativo .final-separator").css('display','none');
			}
	);
	
	rotateBanner();
});

//obtem o numero de banners e seta para comecar mostrar do primeiro
var banner;
var bannersLength;
var currentBanner;

//insere contador de banners na tela
var htmlSetaAnterior;
var htmlSetaProx;
var htmlNumeros;

function updateClasses(params){
	jQuery(".banner_rotativo .banner_numero").removeClass("currentBanner");
	jQuery(params.currentBanner).addClass("currentBanner");
}

function hideCurrentBanner(index){
	jQuery(banners[index]).css("display","none");
}

function showCurrentBanner(bannerAnterior, callBackFunction){
	jQuery(banners[currentBanner]).css("z-index", "1");
	jQuery(banners[currentBanner]).fadeIn("slow", function() {
		callBackFunction(bannerAnterior);	
	});
	
	resetBannerTimeout();
}

//rotacao normal do banner
function rotateBanner(){
	var bannerAnterior = currentBanner;

	//Coloca o banner atual para traz
	jQuery(banners[bannerAnterior]).css("z-index", "0");

	currentBanner++;

	if(currentBanner == bannersLength)
		currentBanner = 0;

	var selector = ".banner_rotativo .numero"+(currentBanner+1);
	updateClasses({currentBanner:jQuery(selector)});

	showCurrentBanner(bannerAnterior, hideCurrentBanner);
}

function handlePreviousBanner(){
	var bannerAnterior = currentBanner;

	//Coloca o banner atual para traz
	jQuery(banners[bannerAnterior]).css("z-index", "0");

	currentBanner--;
	if(currentBanner < 0)
		currentBanner = bannersLength - 1;

	var selector = ".banner_rotativo .numero"+(currentBanner+1);
	updateClasses({currentBanner:jQuery(selector)});

	showCurrentBanner(bannerAnterior, hideCurrentBanner);

}

function handleNextBanner(){
	var bannerAnterior = currentBanner;

	//Coloca o banner atual para traz
	jQuery(banners[bannerAnterior]).css("z-index", "0");

	currentBanner++;
	if(currentBanner == bannersLength)
		currentBanner = 0;

	var selector = ".banner_rotativo .numero"+(currentBanner+1);
	updateClasses({currentBanner:jQuery(selector)});

	showCurrentBanner(bannerAnterior, hideCurrentBanner);
}

function handleNumbersClick(params){
	var bannerAnterior = currentBanner;

	if(currentBanner == params.number - 1) 
		return true;

	//Coloca o banner atual para traz
	jQuery(banners[bannerAnterior]).css("z-index", "0");

	currentBanner = params.number - 1;

	showCurrentBanner(bannerAnterior, hideCurrentBanner);
}
