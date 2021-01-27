class Schedule {
    DAILY_MINUTES = 60 * 24;
    #schedule = Array(this.DAILY_MINUTES).fill(false);
    nextOpenMinute() {
      const firstFreeMinute = this.#schedule.findIndex(minute => !minute);
      return firstFreeMinute;
    }
    clear() {
      const newSchedule = this.#schedule.fill(false);
      return newSchedule;
    }
    freeWindow(startTime, endTime) {
      return this.#schedule.slice(startTime, endTime).every(minute => !minute);
    } 

    print() {
      const printSchedule = this.#schedule.reduce((acc, minute, i) => {
        if(this.#schedule[i - 1] === minute) {
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
        this.#schedule[i] = true;
      }
    }
    

}
module.exports = Schedule;
