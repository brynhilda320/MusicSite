var modal = document.getElementById('modal');
var page = document.getElementsByClassName('page')[0];
var btn = document.getElementById("btn");
var span = document.getElementsByClassName("close")[0];


btn.onclick = function() {
    modal.style.display = "block";

}
span.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

page.onclick = function(event) {
    if (event.target == page) {
        menu.style.display = "none";
    }
};

