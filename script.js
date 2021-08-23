if (window.location.href.startsWith("http://")) window.location.href.replace("http://", "https://");

document.body.addEventListener("keyup", (e) => {
    if (e.keyCode == 13) {
        e.preventDefault()
        searchDivia();
    }
    return false;
});


function elementFocus(el) {
    if (el.value == el.dataset.defaultValue) el.value = "";
    el.style.color = "black";
    el.addEventListener('focusout', (event) => {
        const el = event.target;
        if (el.value == "") {
            el.style.color = "grey";
            el.value = el.dataset.defaultValue;
        }
    });
}


function searchDivia() {
    document.getElementById("result_wrapper").style.display = "none";
    document.getElementById("spinner_wrapper").style.display = "block";
    const ligne = document.getElementById("ligne_input").value;
    const sens = document.getElementById("sens_dropdown").value;
    const arret = document.getElementById("arret_input").value;
    if (ligne == "" || sens == "none" || arret == "") return alert("❌ Merci de remplir tous les champs !")
    try {
        const result = diviaApiBridge(ligne, sens, arret);
        let res1 = "—";
        let res2 = "—"
        if (result.length > 0) {
            if (result[0] || result[0] == 0) {
                if (result[0] < 1) {
                    res1 = "À l’approche";
                } else {
                    res1 = result[0].toString() + " min";
                }
                if (result[1] || result[1] == 0) {
                    if (result[1] < 1) {
                        res2 = "À l’approche";
                    } else {
                        res2 = result[1].toString() + " min";
                    }
                }
                document.getElementById("res1").innerText = res1;
                document.getElementById("res2").innerText = res2;
                document.getElementById("result_wrapper").style.display = "block";
                return document.getElementById("spinner_wrapper").style.display = "none";
            }
        }
    } catch {}
    alert("❌ Nous n’avons rien trouvé :(");
    document.getElementById("spinner_wrapper").style.display = "none";
}
