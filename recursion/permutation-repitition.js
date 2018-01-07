/**
 * function findRoundCombos generates an array of all the possible outcomes for a number of rounds (or players)
 * Can use it to generate all the potential outcomes of a rock, paper, scissors round
 * 
 * @param  {[Array]} values [possible options]
 * @param  {[Number]} n [number of rounds or players]
 * @return {[Array]}        [2D array of possible outcomes]
 */
 
// Permutation with repitition
// O(n^n) time

let findRoundCombos = function(values, n = values.length) {
  let combos = [];
  
  let permute = function(n, valuesUsed = []) {
  	
  	if (n === 0) {
  	  combos.push(valuesUsed);
  	  return;
  	}
  	
  	for (let i = 0, len = values.length; i < len; i++) {
  	  let v = values[i];
  	  let roundCombo = valuesUsed.concat(v);
  	  
  	  permute(n - 1, roundCombo);
  	}
  };
  
  permute(n);
  
  return combos;
};

findRoundCombos(['r', 'p', 's']);
