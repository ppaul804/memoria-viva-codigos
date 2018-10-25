$(function() {
	$( "#Rybenadialog" ).dialog({
		autoOpen: true,			
		hide: true,			
		width: 195,
		heigth:358,
		show: 'puff',	
		close: function() {
			$("#Rybenadialog").dialog().parents(".ui-dialog").hide();				
		}                                            
	});									
   
	$( "#opener" ).click(function() {
		$("#Rybenadialog").dialog().parents(".ui-dialog").show();		
	});													
	
	$("#Rybenadialog").dialog().parents(".ui-dialog").hide();	
});

function carregaRybena()
{
	$("#Rybenadialog").dialog().parents(".ui-dialog").show();
	$("#Vozdialog").dialog().parents(".ui-dialog").hide();
}										

$(function() {
$( "#Vozdialog" ).dialog({
	autoOpen: true,			
	hide: true,			
	width: 90,
	heigth: 15,
	show: 'puff',	
	close: function() {
		$("#Vozdialog").dialog().parents(".ui-dialog").hide();				
	}                                            
});									

$( "#openerVoz" ).click(function() {
	$("#Vozdialog").dialog().parents(".ui-dialog").show();	
});													

$("#Vozdialog").dialog().parents(".ui-dialog").hide();				
});

function carregaVoz()
{
$("#Vozdialog").dialog().parents(".ui-dialog").show();
$("#Rybenadialog").dialog().parents(".ui-dialog").hide();
			
}

function sizeFont (elem, acao){
    // tamanho inicial da fonte (em px)
    var tamInic = 16;
    // Tamanho mínimo da [b]fonte (em px)
    var tamMin = 4;
    // Tamanho máximo da fonte (em px)
    var tamMax = 40;
    // Pega o tamanho da fonte. Se não foi setada ainda (primeira vez que a função é executada) terá como tamanho padrão 'tamInic'.
    if (document.getElementById(elem).style.fontSize == "") {
            var tamFonte = tamInic;
    }else{
            var tamFonte = parseInt(document.getElementById(elem).style.fontSize);
            }
            switch (acao){
                // Aumenta o tamanho, enquanto foi menor que 'tamMax'
                case '+':
                        if (tamFonte < tamMax)
                                document.getElementById(elem).style.fontSize = (tamFonte + 2) + "px";
                break;
                // Diminui o tamanbo, enquanto for maior que 'tamMin'
                case '-':
                        if (tamFonte > tamMin)
                                document.getElementById(elem).style.fontSize = (tamFonte - 2) + "px";
                break;
            }
}