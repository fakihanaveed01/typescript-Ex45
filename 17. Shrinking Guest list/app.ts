let Guest = ["Zain", "Naveed", "Areesh","Ali"];
console.log("Unfortunately, I can only invite two people for dinner.");
while(Guest.length>2){
    let removedGuest=Guest.pop();
    console.log(`sorry,${removedGuest}, I cant invite you to dinner.`);
}
Guest.forEach(Guest=>{
    console.log(`Dear ${Guest},you are still invited to dinner.`);
});
Guest.splice(0,Guest.length);
console.log(Guest);