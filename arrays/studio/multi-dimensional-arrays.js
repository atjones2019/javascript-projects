const input = require('readline-sync');

let food = "water bottles,meal packs,snacks,chocolate";
let equipment = "space suits,jet packs,tool belts,thermal detonators";
let pets = "parrots,cats,moose,alien eggs";
let sleepAids = "blankets,pillows,eyepatches,alarm clocks";

//1) Use split to convert the strings into four cabinet arrays. Alphabetize the contents of each cabinet.
let arrFood = food.split(',').sort();
let arrEquipment = equipment.split(',').sort();
let arrPets = pets.split(',').sort();
let arrSleepAids = sleepAids.split(',').sort();

//2) Initialize a cargoHold array and add the cabinet arrays to it. Print cargoHold to verify its structure.
let cargoHold = [
    arrFood,
    arrEquipment,
    arrPets,
    arrSleepAids
]
console.log(cargoHold);
//3) Query the user to select a cabinet (0 - 3) in the cargoHold.
// let select = input.question(`Select a cabinet 0 - 3: `);

// //4) Use bracket notation and a template literal to display the contents of the selected cabinet. If the user entered an invalid number, print an error message.
// if (select < 0) {
//     console.log("Please limit selection from 0 to 3.");
// } else if (select > 3) {
//     console.log("Please limit selection from 0 to 3.");
// } else {
//     console.log(`${cargoHold[select]}`);
// }

/* 5) Modify the code to query the user for BOTH a cabinet in cargoHold AND a particular item. 
Use the 'includes' method to check if the cabinet contains the selected item, then print “Cabinet ____ DOES/DOES NOT contain ____.” */
let select1 = input.question('Choose a cabinet to check for a specific item: ');
if (select1 < 0) {
    console.log("Please limit selection from 0 to 3.");
} else if (select1 > 3) {
    console.log("Please limit selection from 0 to 3.");
} else {
    select2 = input.question(`What are you looking for in cabinet ${select1}? `);
}
if (cargoHold[select1].includes(select2) === true) {
    console.log(`Cabinet ${select1} does contain ${select2}.`)
} else {
    console.log(`Check for ${select2} in another cabinet.`)
}