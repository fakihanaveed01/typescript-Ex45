var Guests = ["Zain", "Naveed", "Areesh"];
var unabletoattend = "Naveed";
console.log("".concat(unabletoattend, "cannot make it to dinner."));
var newguest = "Asharib";
Guests[Guests.indexOf(unabletoattend)] = newguest;
Guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ",would you like to join me for dinner?"));
});
