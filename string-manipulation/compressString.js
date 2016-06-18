var compress = function(str) {
  var compressed = '';
  var letterCount = str.length > 1 ? 1 : 0;
  debugger;
  
  for (var i = 0; i < str.length; i++) {
	  if (str[i] === str[i+1]) {
	    letterCount++;	
	  } else {
	    compressed += (str[i] + letterCount);
	    letterCount = 1;
	  }
  }
  
  return compressed;
};
