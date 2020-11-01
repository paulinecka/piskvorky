'use-strict';

//let naTahu = 'circle';

const buttonAll = document.querySelectorAll('.tlacitka button');
const kdoHraje = document.querySelector('.ted-hraje');
let player = 'circle';

const hraj = (udalost) => {
  if (kdoHraje.classList.contains('board__field--circle')) {
    udalost.target.classList.add('board__field--circle');
    player = 'kolecko';
  } else {
    udalost.target.classList.add('board__field--cross');
    player = 'krizek';
  }
  kdoHraje.classList.toggle('board__field--circle');
  kdoHraje.classList.toggle('board__field--cross');

  console.log('Get position', getPosition(udalost.target));
  console.log('Get symbol', getSymbol(udalost.target));
  console.log('is Winning', isWinningMove(udalost.target));
};

for (let i = 0; i < buttonAll.length; i++) {
  const buttonElm = buttonAll[i];
  buttonElm.addEventListener('click', hraj);
}

const boardSize = 10; // 10x10

const getPosition = (field) => {
  let fieldIndex = 0;
  while (fieldIndex < buttonAll.length) {
    if (field === buttonAll[fieldIndex]) {
      break;
    }
    fieldIndex++;
  }

  return {
    row: Math.floor(fieldIndex / boardSize),
    column: fieldIndex % boardSize,
  };
};

const getField = (row, column) => buttonAll[row * 10 + column];

const getSymbol = (field) => {
  // Název třídy přizpůsob tvému kódu.
  if (field.classList.contains('board__field--cross')) {
    return 'cross';
  } else if (field.classList.contains('board__field--circle')) {
    return 'circle';
  }
};

const symbolsToWin = 5;
const isWinningMove = (field) => {
  const origin = getPosition(field);
  const symbol = getSymbol(field);

  let i;

  let inRow = 1; // Jednička pro právě vybrané políčko
  // Koukni doleva
  i = origin.column;
  while (i > 0 && symbol === getSymbol(getField(origin.row, i - 1))) {
    inRow++;
    i--;
  }

  // Koukni doprava
  i = origin.column;
  while (
    i < boardSize - 1 &&
    symbol === getSymbol(getField(origin.row, i + 1))
  ) {
    inRow++;
    i++;
  }

  if (inRow >= symbolsToWin) {
    return true;
  }

  let inColumn = 1;
  // Koukni nahoru
  i = origin.row;
  while (i > 0 && symbol === getSymbol(getField(i - 1, origin.column))) {
    inColumn++;
    i--;
  }

  // Koukni dolu
  i = origin.row;
  while (
    i < boardSize - 1 &&
    symbol === getSymbol(getField(i + 1, origin.column))
  ) {
    inColumn++;
    i++;
  }

  if (inColumn >= symbolsToWin) {
    alert(`Blahopřejeme, uživatel ${player} vyhrál.`);
  }

  return false;
};

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
