// The user can press b and it should beep right away
// The user can input any number from 1 to 9 and it should immediately output "setting timer for x seconds...", and beep after that number of seconds has passed
// The user can use ctrl + c to exit the program, at which point the program should say "Thanks for using me, ciao!" before terminating
/*
const timer = function(input) {

  if (input === "b") {
    process.stdout.write('\x07');
  }
  if (input >= 1 && input <= 9) {
    console.log(`Setting timer for ${input} seconds.`);

    setTimeout(()=> {
      process.stdout.write('\x07');
    }, input * 1000)

  }
 
}

timer(num);
*/

const stdin = process.stdin;

stdin.setRawMode(true);
stdin.setEncoding('utf8');


stdin.on('data', (key) => {
  
  //If entered "b"
  if (key === "b") {
    process.stdout.write('\x07');
  }

  //Entered number from 1 - 9
  if (key >= 1 && key <= 9) {
    console.log(`Setting timer for ${key} seconds.`);

    setTimeout(()=> {
      process.stdout.write('\x07');
    }, key * 1000)
  }

  //If Entered ctrl + c
  if (key === '\u0003') {
    console.log("Thanks for using me, ciao!")

    process.exit();
  }

});

console.log('after callback');