/*Exercise #1: Construct for loops that accomplish the following tasks:
    a. Print the numbers 0 - 20, one number per line.*/
    for (i = 0; i <= 20; i++) {
      console.log(i);
    }
    /*b. Print only the ODD values from 3 - 29, one number per line.*/
    for (i = 3; i <= 29; i = i+2) {
      console.log(i);
    }
    /*c. Print the EVEN numbers 12 to -14 in descending order, one number per line.*/
    for (i = 12; i >= -14; i = i-2) {
      console.log(i);
    }
    /*d. Challenge - Print the numbers 50 - 20 in descending order, but only if the numbers are multiples of 3.*/
    for (i = 50; i >= 20; i = i-1) {
      if (i % 3 === 0) {
        console.log(i);
      }
    }
    /*(Your code should work even if you replace 50 or 20 with other numbers). */
    for (i = 2000; i >= 1800; i = i-1) {
      if (i % 3 === 0) {
        console.log(i);
      }
    }



/*Exercise #2: 
Initialize two variables to hold the string “LaunchCode” and the array [1, 5, ‘LC101’, ‘blue’, 42].


Construct ``for`` loops to accomplish the following tasks:
  a. Print each element of the array to a new line.
  b. Print each character of the string - in reverse order - to a new line. */ 
let str = "LaunchCode";
let arr = [1, 5, 'LC101', 'blue', 42];

for (i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
for (i = 9; i >=0; i = i-1) {
  console.log(str.charAt(i));
}


/*Exercise #3:Construct a for loop that sorts the array [2, 3, 13, 18, -5, 38, -10, 11, 0, 104] into two new arrays:
  a. One array contains the even numbers, and the other holds the odds.
  b. Print the arrays to confirm the results. */
  let otherArr = [2, 3, 13, 18, -5, 38, -10, 11, 0, 104];
  let even = [];
  let odd = [];

  for (i = 0; i < otherArr.length; i++) {
    if (otherArr[i] % 2 === 0) {
     even.push(otherArr[i]);
    } else if (otherArr[i] % 2 !== 0) {
      odd.push(otherArr[i]);
    }
  }
  console.log(even); 
  console.log(odd);
