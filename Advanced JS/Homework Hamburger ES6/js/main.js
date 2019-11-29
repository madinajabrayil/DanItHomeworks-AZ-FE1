class Hamburger {
    constructor(size, stuffing) {
        try {
            if (!size || size.type != 'size') {
                throw "Wrong size argument!"
            }

            this._size = size;

            if (!stuffing || stuffing.type != 'stuffing') {
                throw "No stuffing!"
            }

            this._stuffing = [stuffing];
        } catch (err) {
            console.log(err);
        }

        this._toppings = [];
    }

    //get size,toppings,stuffing
    getSize() {
        return this._size;
    }

    getToppings() {
        return this._toppings;
    }

    getStuffing() {
        return this._stuffing;
    }

    //add topping
    addTopping(topping) {
        try {
            if (!topping || topping.type != 'topping')
                throw 'Not Valid Topping';
            if (this._toppings.find((item) => item.name == topping.name))
                throw 'Topping already exist';
            this._toppings.push(topping);
        }
        catch (err) {
            alert(err);
        }
    }

    //remove topping
    removeTopping(topping) {
        try {
            if (!topping || topping.type != 'topping')
                throw 'Not Valid Topping';
            const itemIndex = this._toppings.findIndex((item) => item.name == topping.name);
            if (itemIndex < 0) throw 'Topping Not Exist';
            this._toppings.splice(itemIndex, 1);
        }
        catch (err) {
            alert(err);
        }
    }

    //calculate price
    calculatePrice() {
        return [this._size, ...this._stuffing, ...this._toppings].reduce((sum, item) => sum + item.price, 0);

    };


    //calculate calories
    calculateCalories() {
        return [this._size, ...this._stuffing, ...this._toppings].reduce((sum, item) => sum + item.calories, 0);

    };

}


Hamburger.SIZE_SMALL = {
    price: 50,
    calories: 20,
    type: "size"
};

Hamburger.SIZE_LARGE = {
    price: 100,
    calories: 40,
    type: "size"
};

Hamburger.STUFFING_CHEESE = {
    name: "cheese",
    price: 10,
    calories: 20,
    type: "stuffing"
};

Hamburger.STUFFING_SALAD = {
    name: "salad",
    price: 20,
    calories: 5,
    type: "stuffing"
};

Hamburger.STUFFING_POTATO = {
    name: "potato",
    price: 15,
    calories: 10,
    type: "stuffing"
};

Hamburger.TOPPING_SPICE = {
    name: "spice",
    price: 15,
    calories: 0,
    type: "topping"
};

Hamburger.TOPPING_MAYO = {
    name: "mayo",
    price: 20,
    calories: 5,
    type: "topping"
};


//CHECKING!
// small hamburger with cheese
var hamburger = new Hamburger(Hamburger.SIZE_LARGE, Hamburger.STUFFING_SALAD);

//add topping mayo
hamburger.addTopping(Hamburger.TOPPING_SPICE);

// asking the number of calories
console.log("Calories: %f", hamburger.calculateCalories());

// asking the price
console.log("Price: %f", hamburger.calculatePrice());

// I've changed my mind, and I've decided to add more topping
hamburger.addTopping(Hamburger.TOPPING_MAYO);

// Did the price changed?
console.log("Price with sauce: %f", hamburger.calculatePrice());

// How large is this hamburger
console.log("Is hamburger large: %s", hamburger.getSize() === Hamburger.SIZE_LARGE); // -> false

// Remove the topping
hamburger.removeTopping(Hamburger.TOPPING_SPICE);
console.log("Have %d toppings", hamburger.getToppings().length); // 1
