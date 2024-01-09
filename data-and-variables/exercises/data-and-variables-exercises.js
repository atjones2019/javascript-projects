// Declare and assign the variables below
let ship = "Determination";
let speed = 17500;
let distanceMars = 225000000;
let distanceMoon = 384400;
let km_mi = .621;

// Use console.log to print the 'typeof' each variable. Print one item per line.
console.log(typeof ship);
console.log(typeof speed);
console.log(typeof distanceMars);
console.log(typeof distanceMoon);
console.log(typeof km_mi);

// Calculate a space mission below
let mi_Mars = distanceMars * km_mi;

let hoursMars = mi_Mars/speed;

let daysMars = hoursMars/24;

// Print the results of the space mission calculations below
console.log(ship + " " + "will take" + " " + daysMars + " " + "days to reach Mars.");
// Calculate a trip to the moon below
let mi_Moon = distanceMoon * km_mi;

let hoursMoon = mi_Moon/speed;

let daysMoon = hoursMoon/24;
// Print the results of the trip to the moon below 
console.log(ship + " " + "will take" + " " + daysMoon + " " + "days to reach the Moon.")