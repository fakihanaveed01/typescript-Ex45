var magicians = ["Alice", "David", "Chris"];
function make_great(magicians) {
    var Magicians = []; // Changed variable name from Magicians to greatMagicians
    magicians.forEach(function (magician) {
        Magicians.push("".concat(magician, " the Great")); // Corrected variable name here
    });
    return Magicians; // Corrected return value to Magicians
}
function show_magicians(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}
var greatMagicians = make_great(magicians.slice()); // Creates a new modified array
console.log("Original magicians:");
show_magicians(magicians); // Shows original names
console.log("Great magicians:");
show_magicians(greatMagicians); // Shows modified names
