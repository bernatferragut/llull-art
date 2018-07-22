
// LLULLIAN ALPHABET - ARS BREVIS

// VUE OBJECT
let app = new Vue({
  el: '#app',
  data: {
    // divinities object
    divinities : [
      {
        letter : "B",
        name : "Goodness",
        relationship : "Difference",
        question : "Whether?",
        subject : "God",
        virtue : "Justice",
        vice : "Avarice"
      },
      {
        letter : "C",
        name : "Greatness",
        relationship : "Concordance",
        question: "What?",
        subject: "Angel",
        virtue: "Prudence",
        vice: "Gluttony"
      },
      {
        letter: "D",
        name: "Eternity",
        relationship: "Contrariety",
        question: "Of what?",
        subject : "Heaven",
        virtue: "Fortitude",
        vice: "Lust"
      },
      {
        letter: "E",
        name: "Power",
        relationship: "Beginning",
        question: "Why?",
        subject: "Man",
        virtue: "Temperance",
        vice: "Pride"
      },
      {
        letter: "F",
        name: "Wisdom",
        relationship: "Middle",
        question: "How much?",
        subject: "Imaginative",
        virtue: "Faith",
        vice: "Accidie"
      },
      {
        letter: "G",
        name: "Will",
        relationship: "End",
        question: "Of what kind?",
        subject: "Sensitive",
        virtue: "Hope",
        vice: "Envy"
      },
      {
        letter: "H",
        name: "Virtue",
        relationship: "Majority",
        question: "When?",
        subject: "Vegetative",
        virtue: "Charity",
        vice: "Ire"
      },
      {
        letter: "I",
        name: "Truth",
        relationship: "Equality",
        question: "Where?",
        subject: "Elementative",
        virtue: "Patience",
        vice: "Lying"
      },
      {
        letter: "K",
        name: "Glory",
        relationship: "Minority",
        question: "How and with who?",
        subject: "Instrumentative",
        virtue: "Pity",
        vice: "Inconstancy"
      }
    ],
    // random letters
    numbersList: [1,2,3,4,5,6,7,8,9],
    shuffledList: [],
    fourSelected: [],
    randLetter:'?',
    firstLetter: 'B',
    secondLetter: 'B',
    thirdLetter: 'B',
    fourthLetter: 'K',
    // random questions
    question:'question',
    subject: 'subject',
    verb: 'verb'
    
  },
created: function() {
  // pseudo-shuffle trick!
  this.shuffledList = this.numbersList.sort(function(){
    return 0.5-Math.random()
  });
  this.fourSelected = this.shuffledList.splice(0,4);
  console.log(this.fourSelected);
  this.randLetter = this.fourSelected[Math.floor(Math.random()*4)];
  // console.log(this.randLetter);
  let i = this.fourSelected.indexOf(this.randLetter);
  console.log(i);
  this.fourSelected.splice(i,1,'T');
  console.log(this.fourSelected);

  // console.log(this.fourSelected);
  this.firstLetter  = this.divinities[this.fourSelected[0]].letter;
  this.secondLetter = this.divinities[this.fourSelected[1]].letter;
  this.thirdLetter  = this.divinities[this.fourSelected[2]].letter;
  this.fourthLetter = this.divinities[this.fourSelected[3]].letter;
},

methods: {
  shuffleArray: function (array){
    for (let i = array.length - 1; i > 0; i--) {
        const rand = Math.floor(Math.random() * (i + 1));
        [array[i], array[rand]] = [array[rand], array[i]];
    }
  },
}
});