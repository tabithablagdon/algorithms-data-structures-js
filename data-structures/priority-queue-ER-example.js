// Array-Implementation of Priority Queue Emergency Room Exercise

var Queue = function() {
  this.dataStore = [];
};

Queue.prototype = (function() {

 var enqueue = function(element) {
   this.dataStore.push(element);	
 };
 
 var dequeue = function() {
   var priority = 0;
   var minCode = this.dataStore[0].code;
   for (var i = 1; i < this.dataStore.length; i++) {
  	 if (this.dataStore[i].code < minCode) {
  	   minCode = this.dataStore[i].code;
  	   priority = i;
  	 }
   }
   return this.dataStore.splice(priority, 1);
 };
 
 var front = function() {
   return this.dataStore[0];
 };
 
 var back = function() {
   return this.dataStore[this.dataStore.length - 1];	
 };
 
 var empty = function() {
   return this.dataStore.length === 0 ? true : false;	
 };

  return {
	enqueue: enqueue,
	dequeue: dequeue,
	front: front,
	back: back,
	empty: empty
  };
	
})();

// Emergency room has patient's that check in - code assigned to them based on priority
// Code priority between 1 and 5, 1 being highest priority
// Patient seen is one with highest priority, then FIFO

var Patient = function(name, code) {
  this.name = name;
  this.code = code
};

// updateList() helper function removes a person from the queue and produces an waiting room update

var updateList = function(queue) {
  var seen = queue.dequeue();
  console.log('Patient being treated: ' + seen[0].name + ', Code: ' + seen[0].code + '\n\nPatients left to be treated are: ');
  queue.dataStore.forEach(function(item) {
    console.log(' - ' + item.name + ' code: ' + item.code );	
  });
};

// Loading Patients checking in into the queue
var p = new Patient("Eli Manning",5);
var waitingList = new Queue();
waitingList.enqueue(p);
p = new Patient("Tom Brady", 4);
waitingList.enqueue(p);
p = new Patient("Aaron Rodgers", 3);
waitingList.enqueue(p);
p = new Patient("Joe Montana", 1);
waitingList.enqueue(p);
p = new Patient("Peyton Manning", 1);
waitingList.enqueue(p);


updateList(waitingList);

/* 
=> Patient being treated: Joe Montana, Code: 1

Patients left to be treated are: 
Eli Manning code: 5
Tom Brady code: 4
Aaron Rodgers code: 3
Peyton Manning code: 1
*/

updateList(waitingList);

/*
=> Patient being treated: Peyton Manning, Code: 1

Patients left to be treated are: 
 - Eli Manning code: 5
 - Tom Brady code: 4
 - Aaron Rodgers code: 3
*/
