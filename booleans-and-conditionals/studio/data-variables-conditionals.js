// Initialize Variables below
let date = "Monday 2019-03-18";
let time = "10:05:34 AM";
let astronautCount = 7;
let astronautStatus = "ready";
let averageAstronautMassKg = 80.7;
let crewMassKg = astronautCount * averageAstronautMassKg;
let fuelMassKg = 760000;
let shuttleMassKG = 74842.31;
let totalMassKg = crewMassKg + fuelMassKg + shuttleMassKG;
let maximumMassLimit = 850000;
let fuelTempCelsius = 0;
let minimumFuelTemp = -300;
let maximumFuelTemp = -150;
let fuelLevel = 1.00;
let = weatherStatus = "cloudy";
let preparedForLiftOff = "true";

// add logic below to verify total number of astronauts for shuttle launch does not exceed 7
if (astronautCount <= 7) {
    console.log("Astronaut count acceptable.");
} else {
    console.log("WARNING: reduce astronaut count to seven (7) or below.");
}
// add logic below to verify all astronauts are ready
if (astronautStatus === "ready") {
    console.log("Astronauts ready.");
} else {
    console.log("WARNING: astronaut status failure.");
}
// add logic below to verify the total mass does not exceed the maximum limit of 850000
if (totalMassKg <= 850000) {
    console.log("Total shuttle mass is acceptable.");
} else {
    console.log("WARNING: reduce total shuttle mass.");
}
// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300
if (fuelTempCelsius <= maximumFuelTemp && fuelTempCelsius >= minimumFuelTemp) {
    console.log("Fuel temperature is acceptable.");
} else {
    console.log("WARNING: adjust fuel temp.");
    if (fuelTempCelsius <= minimumFuelTemp) {
        console.log("   • Fuel temperature is below -350°C");
    } else {
        console.log("   • Fuel temperature is above -100°C");
    }
}
// add logic below to verify the fuel level is at 100%
if ((fuelLevel * 100) === 100) {
    console.log("Fuel level is at 100%.");
} else {
    console.log("WARNING: increase fuel level.");
}
// add logic below to verify the weather status is clear
if (weatherStatus === "clear") {
    console.log("Weather conditions are clear.");
} else {
    console.log("WARNING: Weather conditions are poor.");
}
// Verify shuttle launch can proceed based on above conditions
if ((astronautCount <= 7) && (astronautStatus === "ready") && (totalMassKg <= 850000) && (fuelTempCelsius <= maximumFuelTemp) && (fuelTempCelsius >= minimumFuelTemp) && 
(fuelLevel * 100 === 100) && (weatherStatus === "clear")) {
    console.log("All systems are a go! Initiating space shuttle launch sequence.");
    console.log("----------------------------------------------------------------------------");
    console.log(date);
    console.log(time);
    console.log("Astronaut count: " + astronautCount +".");
    console.log("Crew Mass: " + crewMassKg +" Kg");
    console.log("Fuel Mass: " + fuelMassKg +" Kg");
    console.log("Shuttle Mass: " + shuttleMassKG + " Kg");
    console.log("Total Mass: " + totalMassKg + " Kg");
    console.log("Fuel Temperature: " + fuelTempCelsius + "°C");
    console.log("Weather Status: " + weatherStatus);
    console.log("----------------------------------------------------------------------------");
    console.log("Have a safe trip, astronauts!");
} else {
    console.log("Launch scrubbed. See failures above.")
}