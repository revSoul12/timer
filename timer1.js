const args = process.argv.slice(2);
const num = args.map(x => Number(x));

const timer = function(arr) {

  

  for (let i = 0; i < arr.length; i++) {
    let item = arr[i];
    if (item == undefined || item < 0 || isNaN(item)) {
      console.log("Enter valid time value(s)");
    } else {
      setTimeout(() => {
        process.stdout.write('.');
      }
      , item * 1000)
    }
  }
}

timer(num);