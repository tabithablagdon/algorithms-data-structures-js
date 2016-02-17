/* function findDogs will accept two parameters - an array of dogs, and a toy name.  The function will return the name of the dog 
that owns the provided toy

code by Tee Blagdon */

var them_dogs = [{
    name: 'Henry',
    age: 0.5,
    breed: 'Aussie',
    food: 'kibble',
    toys: ['tennis ball', 'chew toy'],
    picture: 'http://rubyriverminiaustralianshepherds.com/wp-content/uploads/aussie-puppy-for-sale-940x412.jpg'
}, {
    name: 'Tilly',
    age: 5,
    breed: 'Mutt',
    food: 'kibble',
    toys: ['bone', 'kong', 'squeaky toy'],
    picture: 'http://www.dogchannel.com/images/zones/top_promo/excited-mixed-breed.jpg'
}, {
    name: 'Apollo',
    age: 10,
    breed: 'Labrador',
    food: 'absolutely anything',
    toys: ['old sock', 'other old sock', 'more old socks'],
    picture: 'http://media.cmgdigital.com/shared/img/photos/2014/08/01/5a/66/LadyLabrador.jpg'
}];

function findDog(arr1, toy) {
  var winner = "";
  them_dogs.forEach(function(dog) {
      dog.toys.forEach(function(dogtoy) {
          if (toy === dogtoy) {
              winner = dog.name;
          }
      });
  });
  return winner;
}

findDog(them_dogs, "old sock"); // -> "Apollo"
