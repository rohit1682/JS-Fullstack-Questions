// Step 1: Create a Vehicle Factory function
function VehicleFactory() {
    this.createVehicle = function (type) {
      let vehicle; // Declare a variable for the desired object
  
      if (type === "car") {
        vehicle = { type: "car", wheels: 4 };
      } else if (type === "bike") {
        vehicle = { type: "bike", wheels: 2 };
      } else if (type === "truck") {
        vehicle = { type: "truck", wheels: 6 };
      } else {
        throw new Error("Invalid vehicle type");
      }
  
      vehicle.drive = function () {
        console.log(`Driving a ${this.type} with ${this.wheels} wheels! 🚗`);
      };
  
      return vehicle; // Return the created object
    };
  }
  
  // Step 2: Use the factory to create different vehicles
  const factory = new VehicleFactory();
  
  const car = factory.createVehicle("car");
  const bike = factory.createVehicle("bike");
  const truck = factory.createVehicle("truck");
  
  car.drive();    // Output: "Driving a car with 4 wheels! 🚗"
  bike.drive();   // Output: "Driving a bike with 2 wheels! 🚗"
  truck.drive();  // Output: "Driving a truck with 6 wheels! 🚗"
  
  // Invalid type example
  // const invalid = factory.createVehicle("plane"); // Will throw an error: "Invalid vehicle type"