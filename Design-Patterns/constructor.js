// Constructor Function for Cars
function Car(brand, model) {
    this.brand = brand;    // Define the brand property
    this.model = model;    // Define the model property
  
    // Method (function) specific to the car instance
    this.drive = function () {
      console.log(`${this.brand} ${this.model} is driving 🚗`);
    };
  }
  
  // Create car objects using the constructor
  const car1 = new Car("Toyota", "Corolla");
  const car2 = new Car("Honda", "Civic");
  
  // Use the methods and properties of the cars
  car1.drive(); // Output: "Toyota Corolla is driving 🚗"
  car2.drive(); // Output: "Honda Civic is driving 🚗"
  
  // Check if car1 and car2 are distinct objects
  console.log(car1 === car2); // false (Each car is a unique object instance)