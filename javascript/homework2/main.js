let minNumber = Number(prompt("Enter min number:"));
let maxNumber = Number(prompt("Enter max number:"));

if (minNumber == " " && maxNumber == " ") {

    console.log("Sorry no numbers!");

}


if (minNumber % 1 == 0 && maxNumber % 1 == 0) {

    if (maxNumber > minNumber) {

        let i = 0;
        for (i = minNumber; i <= maxNumber;i++) {

            if (i % 5 == 0) {
                console.log(i);
            } 
        }
       
    }

} else {

    alert("Please, enter min and max numbers correctly!");
}

