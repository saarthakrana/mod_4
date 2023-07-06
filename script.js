var names = new Array; 
names[0] = "sarthak";
names[1] = "John";
names[2] = "Jason";
names[3] = "sudeikis";
names[4] = "paul";
names[5] = "mollie";
names[6] = "jacob";
names[7] = "jenny";
names[8] = "lol";
names[9] = "end";
console.log("abcde ");
for (let i = 0; i < names.length; i++) {
    if(names[i].charAt(0)=='J' || names[i].charAt(0)=='j'){
        console.log("Goodbye " + names[i]);
    }
    else{
        console.log("Hello " + names[i]);
    }
}