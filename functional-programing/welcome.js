/* Wrote a random welcome function while trying to practice using closures to hide state.  */


function getName() { // could also be form data
    var firstName = prompt("what's your first name");
    var lastName = prompt("what's your last name?");
    
    return {
        "firstName": firstName,
        "lastName": lastName
    };
}

function greeter(name) {
    var message = "hello " + name.firstName + " " + name.lastName + "!  Welcome to our site.";
    
    return function greet() {
        console.log(message);
    };
}

// creating a closure
var welcome = greeter(getName());

// invoke it
welcome();
