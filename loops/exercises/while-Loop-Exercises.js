//Define three variables for the LaunchCode shuttle - one for the starting fuel level, another for the number of astronauts aboard, 
//and the third for the altitude the shuttle reaches.
const input = require('readline-sync');

let fuel = 0;
let astro = 0;
let altitude = 0;




/*Exercise #4: Construct while loops to do the following:
  a. Query the user for the starting fuel level. Validate that the user enters a positive, integer value greater than 5000 but less than 30000. */

  while (fuel < 5000 || fuel > 30000) {
    fuel = input.question('What is the current fuel level? ');
    if (fuel < 5000) {
      console.log('Fuel levels must be above 5000.');
    } else if (fuel > 30000) {
      console.log('Fuel levels must be below 30,000.');
    }
  }
  console.log(`Current fuel level: ${fuel}.`);


//b. Use a second loop to query the user for the number of astronauts (up to a maximum of 7). Validate the entry.
while (astro > 7 || astro <= 0) {
  astro = input.question('How many astronauts are on this mission? ');
  if (astro <= 0) {
    console.log('There must be at least one astronsut.');
  } else if (astro > 7) {
    console.log('The maximum number of austronauts on this mission is 7.');
  }
}
console.log(`${astro} astronauts aboard.`);
  
  
  
//c. Use a final loop to monitor the fuel status and the altitude of the shuttle. Each iteration, decrease the fuel level by 100 units for each astronaut aboard.
//Also, increase the altitude by 50 kilometers.
while (fuel-100*astro >= 0) {
  fuel = fuel - 100*astro;
  altitude = altitude + 50
}





/*Exercise #5: Output the result with the phrase, “The shuttle gained an altitude of ___ km.”

If the altitude is 2000 km or higher, add “Orbit achieved!” Otherwise add, “Failed to reach orbit.”*/
let report = `The shuttle gained an altitude of ${altitude} km.`;
if (altitude > 2000) {
  report += " Orbit acheived!";
  console.log(report);
} else {
  report += " Failed to reach orbit";
  console.log (report);
}