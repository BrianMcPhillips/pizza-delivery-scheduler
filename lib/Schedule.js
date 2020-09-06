class Schedule {
    #minutes = [...Array(1440).fill(false)];
    nextOpenMinute() {
      const firstFreeMinute = this.#minutes.indexOf(false);
      return firstFreeMinute;
    }
}
module.exports = Schedule;
