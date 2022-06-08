//  Array of Strings
// Notes: The pop Array method will remove the last element of the Array.

var charNames = ["ObiWan", "Satine", "Ahsoka", "Anakin", "Padme"];
console.log(charNames.pop());
console.log(charNames);

// Array of Numbers
// Notes: The slice Array method will create a new Array of the chosen elements in that Index Position.

var noteableAges = [13, 18, 21, 25, 30];
console.log(noteableAges.slice(1));
console.log(noteableAges);

// Array of Booleans
// Notes: The shift Array method will remove the first element of the Array.

var inClass = [true, false, false, true, false];
console.log(inClass.shift());
console.log(inClass);
