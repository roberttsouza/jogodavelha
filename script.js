let board = [
  [1,2,3],
  [4,5,6],
  [7,8,9],
];

let p1Counter = 1;
let p2Counter = 2;

class Player{
  constructor(){
    this.istTura = false;
    this.win = false;
  }
}

class space{
  constructor(id){
    this.played = false;
    this.id = id;
  }

  addSymbolx(space){
    $(space).append("<div class='x'>X</div>")
  }
  addSymbolo(space){
    $(space).append("<div class='o'>O</div>")
  }
}


const player1 = new Player();
const player2 = new Player();

const space1 = new Space('one');
const space2 = new Space('two');
const space3 = new Space('three');
const space4 = new Space('four');
const space5 = new Space('five');
const space6 = new Space('six');
const space7 = new Space('seven');
const space8 = new Space('eight');
const space9 = new Space('nine');


function switchTures(one, two){
  one.isTurn = true;
  two.isTurn = false;
}


Player1.isTurn = true;

$('.grid').one('click', (e) =>)

