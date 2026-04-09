// Step 1: Ek base object (prototype) banate hain
const CarPrototype = {
    init: function (brand, model) {
      this.brand = brand;
      this.model = model;
    },
    drive: function () {
      console.log(`${this.brand} ${this.model} chal rahi hai! 🚗`);
    }
  };
  
  // Step 2: Naya object banate hain prototype ka clone karke
  const car1 = Object.create(CarPrototype); // Prototype clone
  car1.init("Toyota", "Corolla");          // Initialize properties
  car1.drive();                            // Output: "Toyota Corolla chal rahi hai! 🚗"
  
  // Ek aur car ka object:
  const car2 = Object.create(CarPrototype);
  car2.init("Honda", "Civic");
  car2.drive();                            // Output: "Honda Civic chal rahi hai! 🚗"
  
  // Step 3: Dono objects ek hi prototype share karte hain
  console.log(car1.__proto__ === car2.__proto__); // true