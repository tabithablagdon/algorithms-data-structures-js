// Write a function for reversing a linked list. Do it in-place.  
// Your function will have one input: the head of the list.  
// Your function should return the new head of the list.
//Source: InterviewCake


function reverseLinkedListInPlace(head) {
  
  let currNode = head;
  let prevNode = null;
  let nextNode = null;
  
  while (currNode) {
    nextNode = currNode.next;
    currNode.next = prevNode;
    prevNode = currNode;
    currNode = nextNode;
  }
  
  return prevNode;
}
