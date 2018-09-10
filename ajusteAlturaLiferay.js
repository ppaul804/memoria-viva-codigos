// ajuste da altura do portlet-content do liferay
function ajusteAlturaLiferay(timeout) {
    document.getElementsByClassName("portlet-content")[0].style.transition = "height .5s";
    setTimeout(() => {
        document.getElementsByClassName("portlet-content")[0].style.height = document.querySelectorAll("div.portlet-content div.journal-content-article")[0].scrollHeight + "px";
    }, timeout);
}