//Part Two Section One

let dna = "  TTG-TAC-GAC-TAC-GGT-CAG-AAT-atA-CCA-GTC-CAT-AGA-GCT";
let dnaNoSpace = '';
let dnaAllCaps = '';
let dnaNoSpaceAllCaps = '';
// First, print out the dna strand in it's current state.
// console.log(dna);
// //1) Use the .trim() method to remove the leading and trailing whitespace, then print the result.

// console.log(dna.trim());

// //2) Change all of the letters in the dna string to UPPERCASE, then print the result.

// console.log(dna.toUpperCase());

//3) Note that after applying the methods above, the original, flawed string is still stored in dna. To fix this, we need to reassign the changes to back to dna.
//Apply these fixes to your code so that console.log(dna) prints the DNA strand in UPPERCASE with no whitespace.

if (dna.includes(' ')) {
    dnaNoSpace = dna.trim();
} else if (dna.includes('a')) {
    dnaAllCaps = dna.toUpperCase();
    console.log(dnaAllCaps);
} else if (dna.includes('g')) {
    dnaAllCaps = dna.toUpperCase(); 
    console.log(dnaAllCaps);   
} else if (dna.includes('c')) {
    dnaAllCaps = dna.toUpperCase();  
    console.log(dnaAllCaps);  
} else if (dna.includes('t')) {
    dnaAllCaps = dna.toUpperCase();
    console.log(dnaAllCaps);    
}
if (dnaNoSpace.includes('a')) { 
    dnaNoSpaceAllCaps = dnaNoSpace.toUpperCase();
    console.log(dnaNoSpaceAllCaps);
} else if (dnaNoSpace.includes('g')) { 
    dnaNoSpaceAllCaps = dnaNoSpace.toUpperCase();
    console.log(dnaNoSpaceAllCaps);
} else if (dnaNoSpace.includes('c')) { 
    dnaNoSpaceAllCaps = dnaNoSpace.toUpperCase();
    console.log(dnaNoSpaceAllCaps);
} else if (dnaNoSpace.includes('t')) { 
    dnaNoSpaceAllCaps = dnaNoSpace.toUpperCase();
    console.log(dnaNoSpaceAllCaps);
} else {
    console.log(dnaNoSpace);
}
if (Boolean(dnaAllCaps) === false && Boolean(dnaNoSpace) === false && Boolean(dnaNoSpaceAllCaps) === false) {
    console.log(dna);
}


//Part Two Section Two

let dnaTwo = "TCG-TAC-GAC-TAC-CGT-CAG-ACT-CAT-CCA-GTC-ACT-AGA-GCT";

//1) Replace the gene "GCT" with "AGG", and then print the altered strand.
let replace = dnaTwo.replace('GCT', 'AGG');
console.log(replace);

//2) Look for the gene "CAT" with ``indexOf()``. If found print, "CAT gene found", otherwise print, "CAT gene NOT found".
if (dnaTwo.indexOf('CAT') !== -1) {
    console.log(`CAT gene found at index ${dnaTwo.indexOf("CAT")}.`);
 } else {
    console.log("CAT gene not found.");
 }
//3) Use .slice() to print out the fifth gene (set of 3 characters) from the DNA strand.
console.log(dnaTwo.slice(16, 19));
//4) Use a template literal to print, "The DNA strand is ___ characters long."
console.log(`The DNA strand is ${dnaTwo.length} characters long.`);
//5) Just for fun, apply methods to ``dna`` and use another template literal to print, 'taco cat'.
console.log(`${dna.replace("  TTG-TAC-GAC-TAC-GGT-CAG-AAT-atA-CCA-GTC-CAT-AGA-GCT", "taco cat")}`);