class Schedule {
    #minutes = [...Array(1440).fill(false)];
    nextOpenMinute() {
      const firstFreeMinute = this.#minutes.indexOf(false);
      return firstFreeMinute;
    }
    clear() {
      const newSchedule = this.#minutes = [...Array(1440).fill(false)];
      return newSchedule;
    }
    /*freeWindow(startTime, endTime) {
      return this.#minutes.slice(startTime, endTime).every(minute => !minute);
    } */

    print() {
      const printSchedule = this.#minutes.reduce((acc, minute, i) => {
        if(this.#minutes[i - 1] === minute) {
          acc[acc.length - 1] = { ...acc[acc.length - 1], end: i };
        } else {
          acc.push({ start: i, end: i, status: minute ? 'busy' : 'free' });
        }
  
        return acc;
      }, []);
      console.table(printSchedule);
    }

    addOrder(order) {
      for(let i = order.startMinute; i <= order.deliveryMinute; i++) {
        this.#minutes[i] = true;
      }
    }
    

}
module.exports = Schedule;
