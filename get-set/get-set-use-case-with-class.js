class Circle {
    #radius;

    constructor(radius) {
        this.#radius = radius;
    }

    // Getter for the 'area' property (computed property)
    get area() {
        return Math.PI * (this.#radius * this.#radius);
    }

    // Setter for the 'radius' property with validation
    set radius(value) {
        if (value > 0) {
            this.#radius = value;
        } else {
            console.log("Radius cannot be negative!");
        }
    }

    // Getter for the 'radius' property
    get radius() {
        return this.#radius;
    }
}

// const myCircle = new Circle(10);
// console.log(myCircle.area);
// console.log(myCircle.radius);

// myCircle.radius  = 15
// console.log(myCircle.radius)

// myCircle.radius = -5


// ^-----------------------------------------------------------

class ShoppingCart {
    // Use a private field for the internal array data
    #items = [];

    // Getter to retrieve all items in the cart
    // We can return a copy of the array to prevent accidental external modification
    get items() {
        return [...this.#items];
    }

    // Setter to replace the entire cart's items (with validation)
    set items(newItems) {
        if (Array.isArray(newItems)) {
            console.log("Setting new items and validating...");
            this.#items = newItems;
        } else {
            console.error("Error: Must assign an array.");
        }
    }
    // A method to add a single item, which is a common use case
    addItem(item) {
        this.#items.push(item);
    }
}

// const cart = new ShoppingCart();
// cart.addItem("Milk");
// cart.addItem("Bread")

// console.log(cart.items)

// Use the setter to replace all items
// cart.items = ["Cheese", "Eggs"];
// console.log(cart.items)

// Attempting to set an invalid value (triggers error logic in setter)
// cart.items = "invalid data"; 
// Error: Must assign an array.


// ^-----------------------------------------------------------
// Advanced Control with Object.defineProperty()




