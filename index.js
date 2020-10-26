'use-strict';

let naTahu = 'circle';

const button1 = document.querySelector('.tlacitka button');

const hraj = (event) => {
  if (kdoHraje === 'circle') {
    event.target.classList.add('board__field--circle');
  }
};

for (let i = 0; i < button1.length; i++) {
  const buttonElm = button1[i];
  buttonElm.addEventListener('click', hraj);
}

/*
button1.addEventListener('click', () => {
  console.log('funguju');
  boardField.classList.add('board__field--circle');
});
*/
