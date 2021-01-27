class Parlor {
    #allDrivers = [];
    #orders = [];
  
    #clearDriversSchedule() {
      this.#allDrivers
        .forEach(driver => driver.currentSchedule.clear());
    }
    #sortOrders() {
      return this.#orders
        .sort((a, b) => a.deliveryMinute - b.deliveryMinute);
    }
    #calculateSchedule() {
      this.#clearDriversSchedule();
      this.#sortOrders()
        .forEach(order => {
          for(let i = 0; i < this.#allDrivers.length; i++) {
            const driverSchedule = this.#allDrivers[i].currentSchedule;
            if(driverSchedule.freeWindow(order.startMinute, order.deliveryMinute)) {
              driverSchedule.addOrder(order);
              break;
            }
          }
        });
    }
  
    addDriver(driver) {
      this.#allDrivers.push(driver);
      this.#calculateSchedule();
    }
    
    addOrder(order) {
      this.#orders.push(order);
      this.#calculateSchedule();
    }
  
    printSchedule() {
      this.#allDrivers
        .forEach(driver => {
          driver.currentSchedule.print();
        });
    }
}
  
module.exports = Parlor;

