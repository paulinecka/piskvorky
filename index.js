'use-strict';

let naTahu = 'circle';

const button1 = document.querySelectorAll('.tlacitka button');
const kdoHraje = document.querySelector('.ted-hraje');

const hraj = (udalost) => {
  kdoHraje.classList.toggle('board__field--circle');
  if (kdoHraje.classList.contains('board__field--circle')) {
    udalost.target.classList.add('board__field--circle');
  } else {
    udalost.target.classList.add('board__field--cross');
  }
};

for (let i = 0; i < button1.length; i++) {
  const buttonElm = button1[i];
  buttonElm.addEventListener('click', hraj);
}

/*
  if ((naTahu = 'circle')) {
    buttonElm.addEventListener('click', () => {
      buttonElm.classList.add('board__field--circle');
    });
  } else {
    buttonElm.addEventListener('click', () => {
      buttonElm.classList.remove('board__field--circle');
      buttonElm.classList.add('board__field--cross');
    });
  }



const hraj = (event) => {
  if (kdoHraje.contains('board__field--circle')) {
    event.target.classList.add('board__field--circle');
  }
}; 

for (let i = 0; i < button1.length; i++) {
  const buttonElm = button1[i];
  buttonElm.addEventListener('click', () => {
    console.log('funguju');
    button1.classList.add('board__field--circle');
  });
} 

button1.addEventListener('click', () => {
  console.log('funguju');
  boardField.classList.add('board__field--circle');
});


const kliknu = button1.addEventListener('click', () => {
  console.log('funguju');
  button1.classList.add('board__field--circle');
});
*/
