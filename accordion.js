import "ajusteAlturaLiferay.js";
var box = document.getElementsByClassName("box");
var acc = document.getElementsByClassName("accordion");

for (var i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function (e) {
        var thisBox = e.target.parentElement;
        var htmlColSecBoxes = thisBox.parentElement.children;
        // cria Array do HTMLCollection
        var rawSecBoxes = Array.prototype.slice.call(htmlColSecBoxes);
        var secBoxes = []; // é os boxs da seção
        rawSecBoxes.forEach(rawSecBox => {
            // filtra por class="box"
            if (rawSecBox.classList.contains("box")) {
                secBoxes.push(rawSecBox);
            }
        });

        this.classList.toggle("active");

        // defini o panel do accordion clicado
        thisAccArray = Array.prototype.slice.call(thisBox.children);
        var panel = thisAccArray[1];

        // se tem tamanho definido, ou seja, estiver aberto
        if (panel.style.maxHeight) {
            console.log('FECHA');

            // fecha o panel
            panel.style.maxHeight = null;
        } else {
            console.log('ABRE');

            // abre o panel
            panel.style.maxHeight = panel.scrollHeight + "px";
            
            // atualiza o tamanho dos panels anteriores
            var panAnt = panel.parentElement.parentElement;
            var panAntAnt = panel.parentElement.parentElement.parentElement.parentElement;

            panAnt.style.maxHeight = (panAnt.scrollHeight + panel.scrollHeight) + "px";
            panAntAnt.style.maxHeight = (panAntAnt.scrollHeight + panAnt.scrollHeight) + "px";


            // fecha os outros panels dos boxes da seção
            secBoxes.forEach(secBox => {
                // pega o panel do box
                var secPanel = secBox.lastElementChild;
                // se o panel da seção não for igual o panel do acc originalmente clicado
                if (panel !== secPanel) {
                    // considera o elemento anterior como o accordion da seção
                    secAcc = secPanel.previousElementSibling;
                    // se o acc não clicado tiver class = "active"
                    if (secAcc.classList.contains("active")) {
                        // desativa ele
                        secAcc.classList.toggle("active");
                    }
                    // finalmente fecha o panel da seção
                    secPanel.style.maxHeight = null;
                }
            });

        }
        console.log("---------------------------------------------");
    });
}