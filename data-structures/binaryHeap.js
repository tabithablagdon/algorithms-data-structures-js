// Implementation of a Binary Heap - callback for comparing algorithm is optional

function BinaryHeap (callback) {
  this._heap = [];
  this.callback = callback || null;

  this._compare = function (i, j, callback) {
  	return callback ? callback(i, j) : i < j;
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

BinaryHeap.prototype.insert = function (value) {

  let len = this._heap.length;
  let currentIndex = len > 0 ? len : 0;
  let parentIndex = this._findParentIndex(currentIndex);

  this._heap[currentIndex] = value;

  while (parentIndex > 0 && (this._compare(this._heap[currentIndex], this._heap[parentIndex], this.callback))) {
    this._swap(parentIndex, currentIndex);

    currentIndex = parentIndex;
    parentIndex = this._findParentIndex(currentIndex);
  }

  return value;
}

BinaryHeap.prototype.removeRoot = function () {

  let len = this._heap.length;
  let root = this._heap[0];
  let currentIndex = 0;
  let childrenIndices = this._findChildrenIndices(currentIndex);

  if (len === 0) {
    return undefined;
  } else if (len < 3) {
    return this._heap.splice(0, 1);
  }

  // Remove root node and replace with last value
  this._heap[0] = this._heap.pop();

  while (this._compare(this._heap[childrenIndices[0]], this._heap[currentIndex], this.callback) || this._compare(this._heap[childrenIndices[1]], this._heap[currentIndex], this.callback)) {
  	let smallestChildNode = this._compare(this._heap[childrenIndices[0]], this._heap[childrenIndices[1]], this.callback) ? childrenIndices[0] : childrenIndices[1];

    if (this._heap[currentIndex] > this._heap[smallestChildNode]) {
      this._swap(smallestChildNode, currentIndex);
      currentIndex = smallestChildNode;
    }

    childrenIndices = this._findChildrenIndices(currentIndex);

  }
  return root;
}
