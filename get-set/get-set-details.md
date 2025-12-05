# 1. Getters (get)

A getter method is defined using the get keyword before a method name.
It binds an object property to a function that executes when that property's value is accessed.
Getters are useful for returning computed values, formatting data upon retrieval, or abstracting underlying logic.



# 2. Setters (set)
A setter method is defined using the set keyword before a method name.
It binds an object property to a function that executes when that property's value is assigned.
Setters are useful for validating input, performing transformations on the value before storing it, or triggering side effects when a property is modified.


# -------------------------

Getters and setters allow you to encapsulate property access and modification logic.
They provide a way to make computed properties or properties with validation look and behave like regular data properties.
Getters and setters can be used in both class syntax and with Object.defineProperty() for regular object literals.
A getter and a setter can share the same name for a property.


# Why use them?
Encapsulation: They allow you to hide the internal implementation of how data is stored and managed.
Data Validation: Setters can enforce rules to ensure data integrity before a value is stored (e.g., ensuring an age is a positive number).
Computed Properties: Getters can return a value that is calculated on the fly based on other properties, without having to call an explicit function.
Read/Write Control: You can define only a getter (making a property read-only) or only a setter (write-only). 



