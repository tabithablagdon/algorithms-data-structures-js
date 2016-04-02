// function end checks to see if a string (first argument) ends with the given target string (second argument).

function end(str, target) {
  var subString = str.substr(-target.length, target.length);
  return subString === target;
}

end("Baasdasd assaf dsfsdf stian mean", "mean"); // returns true;
