class Order {
  #COOK_TIME = 20;
  #drivingDistanceInMinutes;
  constructor(name, items, deliveryTime, miles) {
    this.name = name;
    this.items = items;
    this.deliveryTime = deliveryTime;
    this.#drivingDistanceInMinutes = miles;
    this.startMinute = this.#drivingDistanceInMinutes + this.#COOK_TIME;

  }
}

module.exports = { Order };
