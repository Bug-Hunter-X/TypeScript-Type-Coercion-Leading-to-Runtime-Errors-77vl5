function add(a: number, b: number): number {
  return a + b;
}

function isNumber(x: any): x is number {
  return typeof x === 'number';
}

function addSafe(a: any, b: any): number | string {
  if (isNumber(a) && isNumber(b)) {
    return add(a, b);
  } else {
    return "Error: Inputs must be numbers";
  }
}

let result1 = addSafe(1, 2);  // Correct usage
let result2 = addSafe(1, "2"); // Safe handling of incorrect input

console.log(result1); // Outputs 3
console.log(result2); // Outputs "Error: Inputs must be numbers"