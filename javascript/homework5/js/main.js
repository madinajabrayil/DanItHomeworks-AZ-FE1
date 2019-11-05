function createNewUser(name, surname, age) {

    this.name = name;
   
    this.surname = surname;

    this.age = age

    let bdate;
    bdate+=age;

    this.getLogin = function () {
        let userName;
        userName = (name.charAt(0) + surname).toLowerCase();
        return userName;
    },

    //Get Age function

    this.getAge = function () {

        //Date format 
        let dd = bdate.slice(0, 1); //get day
        let mm = bdate.slice(3, 5); //get month
        let yyyy = bdate.slice(-4); //get year

        //Today's date
        let today = new Date();
        let DD = today.getDate();
        let MM = today.getMonth();
        let YYYY = today.getFullYear();

         age = YYYY - yyyy;

        if (mm > MM || (mm == MM && dd > DD)) {
            age = age - 1;
        }
        return age;

    },

     alert(name + ' ' + surname + ' '  + getAge(age));

    //Get Password function

    this.getPassword = function () {
        let yyyy = bdate.slice(-4);
        let password = (name.charAt(0)).toUpperCase() + surname.toLowerCase() + yyyy;
        return password;

    }

        alert('Your password is' + ' ' + getPassword());
}
 let user = createNewUser("Madina", "Jabrayil", "11.01.2000");
//  alert('Your age is' + ' ' + user.getAge());
//  alert('Your password is' + ' ' + user.getPassword());
