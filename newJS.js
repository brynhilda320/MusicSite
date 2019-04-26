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

let scrollButtonDiv = document.getElementsByClassName('ScrollButton')[0];
let lastWrapper = document.getElementsByClassName('LastWrapper')[0];

function addActive(e) {
  if (e === 'yes') {
    scrollButtonDiv.classList.add('active');
  }
  if (e === 'no') {
    scrollButtonDiv.classList.remove('active');
  }
}
function scrollTop2() {
  document.body.scrollTop = document.documentElement.scrollTop = 0;
}

onscroll = () => {
  if (pageYOffset >= 200) {
    addActive('yes');
  } else addActive('no');

  lastWrapper.style.transform = `translateY(${pageYOffset/5}px)`;
  lastWrapper.style.filter = `blur(${pageYOffset/50}px)`;
};
