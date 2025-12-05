//  In an Object Literal

const person = {
    firstName: "Ranjan",
    lastNAme: "Kumar",
    // The internal property is often prefixed with an underscore by convention to distinguish it from the accessor property.
    _language: "en",

    // Getter for the 'lang' property
    get lang() {
        return this._language.toLocaleUpperCase();
    },

    // Setter for the 'lang' property
    set lang(value) {
        // validation logic
        if (value.length === 2) {
            this._language = value;
        } else {
            console.log("Language code must be 2 characters long!");
        }
    },
};

console.log(person.lang);
person.lang = "hi";
console.log(person.lang);
person.lang = "hindi";
