let string = prompt("Please Enter Word");
let message = "It's Is palindrome";
let lenString = string.length;
for (let i = 0; i < lenString / 2; i++) {
    if (string[i] != string[lenString - 1 - i]) {
        message = "Its Is Not Palindeome"
    } else {
        console.log(`${string}: ${message}`);
    }
    // console.log(string[i])
    // console.log(string[lenString - 1 - i])
}