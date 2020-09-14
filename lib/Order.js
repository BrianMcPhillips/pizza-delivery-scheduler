class Order {
  name;
  deliveryMinute;
  #COOK_TIME = 20;
  #drivingDistanceInMinutes;
  
  
  constructor(name, deliveryMinute, drivingDistanceMinutes) {
    this.name = name;
    this.deliveryMinute = deliveryMinute;
    this.#drivingDistanceInMinutes = drivingDistanceMinutes;
  }

  get startMinute() {
  
    return this.deliveryMinute - (this.#COOK_TIME + this.#drivingDistanceInMinutes);

  }
}

module.exports = Order;
