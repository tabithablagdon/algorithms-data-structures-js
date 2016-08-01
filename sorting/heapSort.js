function BinaryHeap () {
  this._heap = [];

  this._compare = function (i, j) { 
  	return i < j; 
  };

  this._findParentIndex = function(childIndex) {
    return Math.floor( (childIndex - 1) / 2 );
  };

  this._findChildrenIndices = function(parentIndex) {
    return [parentIndex * 2 + 1, parentIndex * 2 + 2];
  }

  this._swap = function(index1, index2) {
	  var temp = this._heap[index1];
	  this._heap[index1] = this._heap[index2];
	  this._heap[index2] = temp;
	  return this._heap;
	}
}

// This function works just fine and shouldn't be modified
BinaryHeap.prototype.getRoot = function () {
  return this._heap[0];
}

BinaryHeap.prototype.insert = function (value) {

  var len = this._heap.length;
  var currentIndex = len > 0 ? len : 0;
  var parentIndex = this._findParentIndex(currentIndex);

  this._heap[currentIndex] = value;

  while (this._compare(this._heap[currentIndex], this._heap[parentIndex])) {
    this._swap(parentIndex, currentIndex);

    currentIndex = parentIndex;
    parentIndex = this._findParentIndex(currentIndex);
  }

  return value;
}

BinaryHeap.prototype.removeRoot = function () {

  var len = this._heap.length;
  var root = this._heap[0];
  var currentIndex = 0;
  var childrenIndices = this._findChildrenIndices(currentIndex);

  if (len === 0) {
    return undefined;
  } else if (len < 3) {
    return this._heap.splice(0, 1)[0];
  }
  
  // Remove root node and replace with last value
  this._heap[0] = this._heap.pop();

  while (this._compare(this._heap[childrenIndices[0]], this._heap[currentIndex]) || this._compare(this._heap[childrenIndices[1]], this._heap[currentIndex])) {
  	var smallestChildNode = this._compare(this._heap[childrenIndices[0]], this._heap[childrenIndices[1]]) ? childrenIndices[0] : childrenIndices[1];

    if (this._heap[currentIndex] > this._heap[smallestChildNode]) {
      this._swap(smallestChildNode, currentIndex);
      currentIndex = smallestChildNode;
    }

    childrenIndices = this._findChildrenIndices(currentIndex);

  }

  return root;
}

var arr = [3, 5, 1, 10, 7, 4];

function heapSort(arr) {
  let bh = new BinaryHeap();
  let sorted = [];

  for (var i = 0; i < arr.length; i++) {
    bh.insert(arr[i]);	
  }
  
  for (var j = 0; j < arr.length; j++) {
    sorted.push(bh.removeRoot());  	
  }
  
  return sorted;
}

heapSort(arr);
