function toggledropdown(nome) {
    var elem = document.getElementById(nome);
    var estilo = getComputedStyle(elem);
    
    if (estilo.display == "none" || elem.style.display == "none") {
        elem.style.display = "block";
    } else {
        elem.style.display = "none";
    }
}