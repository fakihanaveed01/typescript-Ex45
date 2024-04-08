let Guests = ["Zain","Naveed","Areesh"];
let unabletoattend = "Naveed";
console.log(`${unabletoattend}cannot make it to dinner.`);

let newguest="Asharib";
Guests[Guests.indexOf(unabletoattend)] = newguest;
Guests.forEach(guest => {
    console.log(`Dear ${guest},would you like to join me for dinner?`);
});