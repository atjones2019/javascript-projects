// Here are the candidates and the 'animals' array:
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

let animals = [candidateA,candidateB,candidateC,candidateD,candidateE,candidateF];

let idNumbers = [291, 414, 503, 599, 796, 890];

// Code your selectRandomEntry function here:
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
// console.log(selectRandomEntry(idNumbers));


// Code your buildCrewArray function here:
let threeIDs = selectRandomEntry(idNumbers);

function buildCrewArray(selectedCrew,candidates){
  let crew = [];
  for (i = 0; i < 3; i++){
    for (j = 0; j < candidates.length; j++){
      if (candidates[j].astronautID === selectedCrew[i]){
        crew.push(candidates[j].name)
      }
    }
  }
  return crew;
}


// Code your template literal and console.log statements:
let threeCrew = buildCrewArray(threeIDs, animals)

console.log(`${threeCrew[0]}, ${threeCrew[1]}, and ${threeCrew[2]} are going to space!`);