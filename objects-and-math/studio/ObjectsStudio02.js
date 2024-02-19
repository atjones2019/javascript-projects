
// Candidate data & crew array.
let candidateA = {
   'name':'Gordon Shumway',
   'species':'alf',
   'mass':90,
   'o2Used':function(hrs){return 0.035*hrs},
   'astronautID':414
 };
 let candidateB = {
   'name':'Lassie',
   'species':'dog',
   'mass':19.1,
   'o2Used':function(hrs){return 0.030*hrs},
   'astronautID':503
 };
 let candidateC = {
   'name':'Jonsey',
   'species':'cat',
   'mass':3.6,
   'o2Used':function(hrs){return 0.022*hrs},
   'astronautID':796
 };
 let candidateD = {
   'name':'Paddington',
   'species':'bear',
   'mass':31.8,
   'o2Used':function(hrs){return 0.047*hrs},
   'astronautID':291
 };
 let candidateE = {
   'name':'Pete',
   'species':'tortoise',
   'mass':417,
   'o2Used':function(hrs){return 0.010*hrs},
   'astronautID':599
 };
 let candidateF = {
   'name':'Hugs',
   'species':'ball python',
   'mass':2.3,
   'o2Used':function(hrs){return 0.018*hrs},
   'astronautID':890
 };
 
 let crew = [candidateA,candidateC,candidateE];
 
 // Code your orbitCircumference function here:

function orbitCircumference(radius){
  r = radius;
  circumference = 2 * Math.PI * radius;
  return Math.round(circumference);
}

// Code your missionDuration function here:

function missionDuration(orbits, orbitRadius, orbitalSpeed){
  let time = (orbits * orbitCircumference(orbitRadius))/orbitalSpeed;
  return Math.round(time * 100)/100
}

let radius = 2000;
let speed = 28000;

console.log(`The mission will travel ${orbitCircumference(radius)*3} km around the planet, and it will take ${missionDuration(3,radius, speed)} hours to complete.`)

// Copy/paste your selectRandomEntry function here:

function selectRandomEntry(randomID){
  let threeIDs = [];
  while(threeIDs.length < 3){
    let randomIndex = Math.floor(Math.random()*randomID.length);
    if (!threeIDs.includes(randomID[randomIndex])){
      threeIDs.push(randomID[randomIndex])
    }
  }  
  return threeIDs;
}

// Code your oxygenExpended function here:

let idNumbers = [291, 414, 503, 599, 796, 890];
let animals = [candidateA,candidateB,candidateC,candidateD,candidateE,candidateF];
let threeRandom = selectRandomEntry(idNumbers);

function oxygenExpended(){

}

