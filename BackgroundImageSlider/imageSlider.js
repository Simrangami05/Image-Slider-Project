const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const images = document.querySelector('.carImages').children;
const totalImages = images.length;
let index = 0;

next.addEventListener('click', () => {
  nextImage('prev');
})

prev.addEventListener('click', () => {
  nextImage('next');
})

function nextImage(direction) {
  if(direction == 'prev') {
    index++;
    if(index == totalImages) {
      index = 0;
    }
  } else {
    if(index == 0) {
      index = totalImages - 1;
    } else {
      index--;
    }
  }

  for(let i = 0; i < images.length; i++) {
    images[i].classList.remove('main');
  }
  images[index].classList.add('main');
}
