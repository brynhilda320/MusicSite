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
