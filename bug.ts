function add(a: number, b: number): number {
  return a + b;
}

let result = add(1, "2"); // This will compile without error in TypeScript
console.log(result); // Outputs NaN