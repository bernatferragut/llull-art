
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
    finalList   : [],
    randNumber  :'?',
    firstLetter : 'B',
    secondLetter: 'B',
    thirdLetter : 'B',
    fourthLetter: 'T',
    // random questions
    question    :'question',
    subject     : 'subject',
    verb        : 'verb'
  },
  
created: function() {
  // pseudo-shuffle trick!
  this.shuffledList = this.numbersList.sort(function(){ return 0.5-Math.random()});
  // first 4 pick
  this.fourSelected = this.shuffledList.splice(0,4);
  // random letter selection
  this.randNumber = this.fourSelected[Math.floor(Math.random()*4)];
  // asssign fourSelected values and push to finalList
  this.firstLetter  = this.divinities[this.fourSelected[0]].letter;
  this.finalList.push(this.firstLetter);
  this.secondLetter = this.divinities[this.fourSelected[1]].letter;
  this.finalList.push(this.secondLetter);
  this.thirdLetter  = this.divinities[this.fourSelected[2]].letter;
  this.finalList.push(this.thirdLetter);
  this.fourthLetter = this.divinities[this.fourSelected[3]].letter;
  this.finalList.push(this.fourthLetter);
  // once we have the final list we insert the T char
  this.finalList.splice(this.randNumber-1,1,'T');
  // final var assignations
  this.firstLetter  = this.finalList[0];
  this.secondLetter = this.finalList[1];
  this.thirdLetter  = this.finalList[2];
  this.fourthLetter = this.finalList[3];
  // questions, subjects and verbs
  this.question = this.divinities[this.fourSelected[0]].question;
  this.subject  = this.divinities[this.fourSelected[1]].name;
  this.verb     = this.divinities[this.fourSelected[2]].relationship;
},

methods: {
  // shuffleArray: function (array){
  //   for (let i = array.length - 1; i > 0; i--) {
  //       const rand = Math.floor(Math.random() * (i + 1));
  //       [array[i], array[rand]] = [array[rand], array[i]];
  //   }
  // },
}
});