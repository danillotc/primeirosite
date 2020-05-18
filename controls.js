function toggledropdown(nome) {
    
    var dropdowns = document.getElementsByClassName("dropdown");
    var elem = document.getElementById(nome);
    var icon = $("i",$(elem).parent());
    var estilo = getComputedStyle(elem);
    
    if (estilo.display == "none" || elem.style.display == "none") {
        for (var i = 0; i < dropdowns.length; i++) {
            dropdowns.item(i).style.display = "none";
        }
        $(elem).toggle();
        $(icon).toggleClass("fas fa-angle-right fas fa-angle-down");
    } else {
        $(icon).toggleClass("fas fa-angle-right fas fa-angle-down");
        $(elem).toggle();
    }
}