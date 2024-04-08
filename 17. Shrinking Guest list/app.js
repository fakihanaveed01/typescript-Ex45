var Guest = ["Zain", "Naveed", "Areesh", "Ali"];
console.log("Unfortunately, I can only invite two people for dinner.");
while (Guest.length > 2) {
    var removedGuest = Guest.pop();
    console.log("sorry,".concat(removedGuest, ", I cant invite you to dinner."));
}
Guest.forEach(function (Guest) {
    console.log("Dear ".concat(Guest, ",you are still invited to dinner."));
});
Guest.splice(0, Guest.length);
console.log(Guest);
