// locate() takes a multi-dimensional array and returns true or false if the provided value is contained in the array

function locate(array, value){
  return array.reduce(function(memo, cur) {
    return Array.isArray(cur) ? locate(cur, value) : (memo || (cur === value));
  }, false);
}

ray1 = [1,2,3,[4,5,[6,7,'a']]];
ray2 = [1,[3,['a'],3],6,66,666];
ray3 = [[[['a'],4]],6];

locate(ray1,'a');  //  ===>  true
locate(ray3, 6);  //  ===>  false 
