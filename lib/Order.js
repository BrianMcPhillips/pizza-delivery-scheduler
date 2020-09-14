class Order {
  #COOK_TIME = 20;
  #drivingDistanceInMinutes;
  
  constructor(name, deliveryTime, miles) {
    this.name = name;
    this.deliveryTime = deliveryTime;
    this.#drivingDistanceInMinutes = miles;
    this.startMinute = this.#drivingDistanceInMinutes + this.#COOK_TIME;

  }
}

module.exports = Order;
