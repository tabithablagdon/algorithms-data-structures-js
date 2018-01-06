// Write an algorithm to generate all possible subsets of a set
// Time: O(n*2^n)
// Space: O(n*2^n)

var set1 = [1, 2, 3, 4];
var set2 = [];

// iterative solution - can be solved recursively as well

var getSubsets = function(set) {
  let subsets = {};
  
  subsets[0] = [[]];
  
  set.forEach((item, index) => {
    let previousSubsets = subsets[index].slice();
    
    if (!subsets.hasOwnProperty(index+1)) {
      subsets[index+1] = previousSubsets;
    }
    
    previousSubsets.forEach(subitem => {
      subsets[index+1].push(subitem.concat(item));
    });
  });
  
  return subsets[set.length];
};

getSubsets(set1);
