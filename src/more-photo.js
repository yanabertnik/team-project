var modal = document.getElementById('myModal');

var image = document.querySelectorAll('.more-photo__img');
var modalImg = document.getElementById('img01');
var captionText = document.getElementById('caption');
const refs = {
  body: document.querySelector('body'),
};
image.forEach(Element => {
  Element.addEventListener('click', () => {
    modal.style.display = 'block';
    modalImg.src = Element.src;
    captionText.innerHTML = Element.alt;
    refs.body.classList.toggle('no-scroll');
  });
});

var span = document.getElementsByClassName('button__close')[0];

span.onclick = function () {
  modal.style.display = 'none';
  refs.body.classList.toggle('no-scroll');
};
