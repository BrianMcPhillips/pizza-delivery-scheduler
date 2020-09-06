const Schedule = require('./Schedule.js');
const Order = require('./Order.js');

describe('schedule class', () => {
  it('should return next free minute', () => {
    const schedule = new Schedule();

    expect(schedule.nextOpenMinute()).toEqual(0);
  });
  it('should clear schedule minutes', () => {
    const schedule = new Schedule();
    expect(schedule.clear()).toEqual([...Array(1440).fill(false)]);
  });
  /*it('tests for free Window in schedule', () => {
    const schedule = new Schedule();
    expect(schedule.freeWindow(3, 7).toEqual(true));
  }); */
  /*it('prints the schedule', () => {
    console.table = jest.fn();
    const schedule = new Schedule();
    const order = new Order('pizza order', ['pepperoni'], 40, 20);
    schedule.addOrder(order);

    schedule.print();

    expect(console.table).toHaveBeenCalledWith([
      { start: 0, end: 40, status: 'busy' },
      { start: 41, end: 1439, status: 'free' }
    ]);
  }); */
});


