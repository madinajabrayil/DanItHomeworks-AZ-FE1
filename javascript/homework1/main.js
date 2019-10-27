let userName = prompt("Enter your name:", "John");
let userAge = prompt("Enter your age:", 18);

//Check Age and Name

    if (userName % 1 === 0 || userAge % 1 != 0) {
      
        alert("Yourn name or age is not correct!");    

    } else if (userAge < 18) {

        alert("You are not allowed to visit this website");

    } else if (userAge >= 18 && userAge <= 22) {

        if (confirm("Are you sure you want to continue?")) {
            alert(`Welcome, ${userName}`);
        } else {
            alert("You are not allowed to visit this website");
        }

    } else if (userAge > 22) {

        alert(`Welcome, ${userName}`);

    }






    



