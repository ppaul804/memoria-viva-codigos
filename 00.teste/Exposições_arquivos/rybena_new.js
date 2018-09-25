var rybenaServer = "http://www.rybenamobile.com.br/";
var txt = "";
var text = "";
var primeiraVezLibras = true;
var primeiraVezVoz = true;
var isLibrasAppletCarregado = false;
var soundEmbed = null;
var isVozAppletCarregado = false;

function carregaRybenaLibras() {
	document.getElementById("Rybenadialog").innerHTML =	
	"<div> "
  + "		<applet id='rybenalibras' "
  + "		    	archive='" + rybenaServer + "RybenaWEBServer/RybenaApplet.jar' "
  + "			    code='br.com.cts.rybena.libras.applet.LibrasApplet' "
  + "			    width='170' "
//  + "			    height='358'> "
  + "			    height='255'> "
  + "		   <param name='host' value='" + rybenaServer + "'> "
  + "		   <param name='tam' value='m'> "
  + "		</applet> "  
  + "</div> ";
	isLibrasAppletCarregado = true;
	//window.onmouseup = libras
}

function carregaRybenaVoz() {
	document.getElementById("Vozdialog").innerHTML =
	
    "<div> "
  + "		<applet id='rybenaVoz' "
  + "				archive='" + rybenaServer + "RybenaWEBServer/RybenaApplet.jar' "
  + "				code='br.com.cts.rybena.voz.applet.VozApplet' "
  + "			 	width='130' "
  + "			 	height='55'> "
  + "			<param name='host' value='" + rybenaServer + "'> "
  + "  			<param name='tam' value='m'> "
  + "		</applet>"  
  + "</div>	";
	isVozAppletCarregado = true;
}

//Exibindo resultado
function getInfo(){

	//criando a vari&aacute;;vel resultado
	var resultado;

	//teste para Opera/x.x ou Opera x.x
	if (/Opera[\/\s](\d+\.\d+)/.test(navigator.userAgent)){ 
	  //capture a parcela de x.x e armazene-a como um n�mero
	  var opversao=new Number(RegExp.$1) 
	  //atribua o resultado a vari&aacute;;vel resultado
	  resultado=("Opera");
	}	
	text = resultado;   
}

function libras() {		
	if (!isLibrasAppletCarregado)
	{
		carregaRybenaLibras();						
	}
	if (window.getSelection)
	{
		txt = window.getSelection();
		if((primeiraVezLibras) && (txt == ""))
		{
			txt = "Por favor, selecione algum texto para o Ryben&aacute;; traduzir";						
		}			
	} 
	else if (document.getSelection)
	{
		txt = document.getSelection();	
		if((primeiraVezLibras) && (txt == ""))
		{
			txt = "Por favor, selecione algum texto para o Ryben&aacute; traduzir";			
		}		
	}
	else if (document.selection)
	{
		txt = document.selection.createRange().text;	
		if((primeiraVezLibras) && (txt == ""))
		{
			txt = "Por favor, selecione algum texto e clique na imagem libras para que o Ryben&aacute;; traduza seus textos, para melhor utiliza&ccedil;&atilde;o atualize seu navegador de internet";			
		}	
		window.onmouseup = libras		
	}
	else if(txt == "")
	{
		return;
	}	
	
	document.getElementById("Rybenadialog").style.visibility = "visible";		
	var appletD = document.getElementById("rybenalibras");	
	appletD.traduzir(txt);
	primeiraVezLibras = false;
	window.onmouseup = libras
	
}


function voz() {	
	
	if (!isVozAppletCarregado)
	{
		carregaRybenaVoz();				
	}	
	
	if (window.getSelection)
	{
		txt = window.getSelection();
		if((primeiraVezVoz) && (txt == ""))
		{
			txt = "Por favor, selecione algum texto para o Ryben&aacute;; voz converta para audio";
		}			
	} 
	else if (document.getSelection)
	{
		txt = document.getSelection();	
		if((primeiraVezVoz) && (txt == ""))
		{
			txt = "Por favor, selecione algum texto para o Ryben&aacute;; voz converta para audio";
		}		
	}
	else if (document.selection)
	{
		txt = document.selection.createRange().text;	
		if((primeiraVezVoz) && (txt == ""))
		{
			txt = "Por favor, selecione algum texto e clique na imagem voz para que o Ryben&aacute;; converta seus textos para audio, para melhor utiliza&ccedil;&atilde;o atualize seu navegador de internet";			
		}	
		window.onmouseup = libras		
	}
	else if(txt == "")
	{
		return;
	}	

	document.getElementById("Vozdialog").style.visibility = "visible";
	var appletD = document.getElementById("rybenaVoz");
	appletD.falar(txt);
	primeiraVezVoz = false;
	window.onmouseup = voz
//	alert("Aplicativo em Manuten��o");
}