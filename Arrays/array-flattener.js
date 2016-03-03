// Function flattener will reduce nested arrays into a single array.

var flatten = function(nestedArray) {

    return nestedArray.reduce(function(flat, toFlatten) {
        return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
    }, []);
};

flatten([1, [2], [3, [[4]]]]); //-> [1, 2, 3, 4]
