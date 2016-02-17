// Simple Magic 8-Ball game that prompts user to ask a question and returns a random response from the Magic 8-Ball

function magic8Ball(){
    // define array of 8ball responses
    var responses = ["You will get everything you ask", "Yes, absolutely!", "Nope!", "In 5 years, yes.", "Are you kidding?  Definitely not!"];
    
    // prompt user to ask a question - if nothing is entered, prompt again and let user know
    var question = prompt("Ask the Magic 8 Ball any question you want");
    
    if (!question) {
        question = prompt("You didn't ask a question.  Please ask a question!");
    }
    
    // generate a random number and assign to a variable
    var randNum = Math.floor(Math.random() * responses.length);
    
    // alert a random response from 8-ball array
    
    alert("You Asked:  " + question + "\n\ Magic 8-Ball Says:  " + responses[randNum]);
}

magic8Ball();
