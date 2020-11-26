const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const imgs = document.querySelectorAll('img');
const imgContainer = document.querySelector('.img-container');

let index = 0;
next.addEventListener('click', () => {
  index++;

  length = imgs.length;
  if (index > length - 1) {
    index = 0;
  }
  chooseBgc(index);
  imgContainer.style.transform = `translateX(${-index * 400}px)`;
});

prev.addEventListener('click', () => {
  index--;
  length = imgs.length;
  if (index < 0) {
    index = 3;
  }
  chooseBgc(index);
  imgContainer.style.transform = `translateX(${-index * 400}px)`;
});

function chooseBgc(index) {
  if (index === 0) {
    document.body.style.backgroundColor = '#CD001E';
  } else if (index === 1) {
    document.body.style.backgroundColor = '#E7E8EA';
  } else if (index === 2) {
    document.body.style.backgroundColor = '#F7F8FA';
  } else if (index === 3) {
    document.body.style.backgroundColor = '#3B3F40';
  }
}
