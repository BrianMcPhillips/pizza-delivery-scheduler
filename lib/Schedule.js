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
}
module.exports = Schedule;
