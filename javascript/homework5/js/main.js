function createNewUser(name, surname, bdate) {

    name = prompt('Please enter your first name:');
    surname = prompt('Please enter your last name:')
    bdate = prompt("Enter your birthday as 'dd.mm.yyyy'");


    this.name = name;

    this.set = function (name) {
        this.name = name;
        return this;
    };

    this.surname = surname;

    this.set = function (surname) {
        this.surname = surname;
        return this;
    };


    this.getLogin = function () {
        let userName;
        userName = (name.charAt(0) + surname).toLowerCase();
        return userName;
    }

    //Get Age function

    this.getAge = function (bdate) {

        //Date format 
        let dd = bdate.slice(0, 1); //get day
        let mm = bdate.slice(3, 5); //get month
        let yyyy = bdate.slice(6, 11); //get year

        //Today's date
        let today = new Date();
        let DD = today.getDate();
        let MM = today.getMonth();
        let YYYY = today.getFullYear();

        let age = YYYY - yyyy;

          if (mm > MM || (mm == MM && dd > DD)) {
            age = age - 1;
        }
        return age;

    }

    alert(name + ' ' + surname + ' '  + getAge(bdate));

    //Get Password function

    this.getPassword = function () {
        let yyyy = bdate.slice(6, 11);
        return (name.charAt(0)).toUpperCase() + surname.toLowerCase() + yyyy;


    }

    alert('Your password is' + ' ' + getPassword());
}

createNewUser();
