// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
}

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}

  

  function pAequorFactory  (number, arrayOfDnaBases)  {
  this.specimenNum = number;
  this.dna = arrayOfDnaBases;
  
  this.mutate = function ()  {
    let randomlySelectedBasesIndex = [Math.floor(Math.random() * 15)] 
    let randomlySelectedBase = this.dna[randomlySelectedBasesIndex]
    if(randomlySelectedBase = "A"){
      let dnaBases2 = ['T', 'C', 'G']
      this.dna[randomlySelectedBasesIndex] = dnaBases2[Math.floor(Math.random() * 3)] 
      } else if (randomlySelectedBase = "T") {
      let dnaBases2 = ['A', 'C', 'G']
      this.dna[randomlySelectedBasesIndex] = dnaBases2[Math.floor(Math.random() * 3)] 
      } else if (randomlySelectedBase = "C") {
      let dnaBases2 = ['A', 'T', 'G']
      this.dna[randomlySelectedBasesIndex] = dnaBases2[Math.floor(Math.random() * 3)] 
    } else if (randomlySelectedBase = "G") {
      let dnaBases2 = ['A', 'C', 'T']
      this.dna[randomlySelectedBasesIndex] = dnaBases2[Math.floor(Math.random() * 3)] 
  }
  return this.dna;
};

  this.compareDNA = function (object) {
    let inCommon = 0;
    let inCommonRate = 0;
    for(let i in object.dna){
      if(this.dna[i] === object.dna[i]){
        inCommon += 1;
      }
    }
    inCommonRate = Math.round((inCommon / this.dna.length) * 100);
    //console.log("DNA lenght: " +this.dna.length)
    //console.log("Common DNA quantity: " +inCommon)
    //console.log("Common DNA rate: " +inCommonRate)
    console.log(`specimen #${this.specimenNum} and specimen #${object.specimenNum} have ` + inCommonRate + "% DNA in common.")
    //console.log(inCommonRate)
    return inCommonRate;
  };

  this.willLikelySurvive = function () {
    let CorGBases = 0;
    let CorGBaseRate = 0;
    for(let i in this.dna){
      if(this.dna[i] === "C" || this.dna[i] === "G"){
        CorGBases += 1;
      }
    }
    CorGBaseRate = Math.round((CorGBases / this.dna.length) * 100) ;
    console.log("Chance of survival of the organism" + this.specimenNum)
    console.log("G or B quantity: " + CorGBases);
    console.log("G or B rate (Chance of survival): " + CorGBaseRate);

    if(CorGBaseRate >= 60){
    return true;
    } else {
    return false;
    }
    
  }

  this.complementStrand = function () {
    let complement = [];
    for(let i in this.dna){
      if(this.dna[i] === "A"){
        complement.push("T")
      } else if(this.dna[i] === "T"){
        complement.push("A")
      } else if(this.dna[i] === "G"){
        complement.push("C")
      } else if(this.dna[i] === "C"){
        complement.push("G")
      }
    }
    return complement;
  }

  }


var organism1 = new pAequorFactory(1, mockUpStrand())
var organism2 = new pAequorFactory(2, mockUpStrand())
var organism3 = new pAequorFactory(3, mockUpStrand())
//console.log("Organism1 : " + organism1.dna)
//organism2.mutate()
//console.log("Organism2 : " +organism3.dna)
//organism3.compareDNA(organism1)
//console.log(organism1.willLikelySurvive());

let pAequor = [];
for(i=0; i<30; i++){
  pAequor[i] = new pAequorFactory(i, mockUpStrand())
}

//console.log(pAequor)

//CHALLANGES BELOW -----------------------------------------------------------
//1st challange
//console.log("Complementary DNA strand for organism1 is: " + organism1.complementStrand())

//2nd challenge
//console.log(pAequor)

  let mostRelated = 0;
  let relation = 0;

for(let i=0; i<30; i++){
  
  let mostRelatedarray = [];
  for(let j=0; j<30; j++){
    if(j>i){
      console.log(i,j)
      relation = pAequor[i].compareDNA(pAequor[j])
    }
    if(relation > mostRelated){
      mostRelated = relation
      //console.log("relation: " +relation)
      
    }
    
  }
  
}
console.log("mostRelated: " +mostRelated)
//console.log(pAequor[1].compareDNA(pAequor[2]))

