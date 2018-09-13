/**
 * Ajuste da altura do portlet-body do liferay
 * @param {} sec segundos de atraso da função
 */
function ajusteAlturaLiferay(sec) {
    var milisec = sec * 1000;
    var portlet_content = document.querySelectorAll("div.portlet-content")[0];
    var journal_content_article = document.querySelectorAll("div.portlet-content div.journal-content-article")[0];
    
    portlet_content.style.transition = "height .1s";
    setTimeout(() => {
        portlet_content.style.height = (journal_content_article.scrollHeight + 57) + "px";
    }, milisec);
}