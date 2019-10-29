function createNewUser(name, surname) {
    this.name = name;

    this.set = function(name) {
        this.name = name;
        return this;
    };

    this.surname = surname;

    this.set = function(surname) {
        this.surname = surname;
        return this;
    };


    this.getLogin = function () {
        let userName;
        userName = (name.charAt(0) + surname).toLowerCase();
        return userName;
    }
}

let user1 = new createNewUser('Madina', 'Jabrayil');
let user2 = new createNewUser('Sarah', 'Smith');

console.log(user1.getLogin());
console.log(user2.getLogin());

