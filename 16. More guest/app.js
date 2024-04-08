var Guest = ["Zain", "Naveed", "Areesh"];
console.log("Great news! I found a bigger dinner table!");
//adding more guest
Guest.unshift("Isaac Newton");
Guest.splice(Guest.length / 2, 0, "Charles Darwin");
Guest.push("Ada Lovelace");
Guest.forEach(function (Guest) {
    console.log("Dear ".concat(Guest, " , would you like to join me for dinner?"));
});
