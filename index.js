const prime = require("@drhex/prime-x");

const M = 2;
const N = 100;

const primesInRange = prime.computePrime(M, N);

console.log(`Простые числа от ${M} до ${N}:`, primesInRange);