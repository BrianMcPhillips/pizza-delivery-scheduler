const Schedule = require('./Schedule.js');
const Order = require('./Order.js');

describe('Schedule class', () => {
  it('finds the next open minute', () => {
    const schedule = new Schedule();

    expect(schedule.nextOpenMinute()).toEqual(0);
  });

  it('adds order to the schedule', () => {
    const schedule = new Schedule();
    const order = new Order('Brian', 40, 20);
    schedule.addOrder(order);

    expect(schedule.nextOpenMinute()).toEqual(41);
  });

  it('adds an order to the schedule', () => {
    const schedule = new Schedule();
    const order = new Order('Customer', 40, 20);
    schedule.addOrder(order);

    schedule.clear();

    expect(schedule.nextOpenMinute()).toEqual(0);
  });

  it('prints the schedule', () => {
    console.table = jest.fn();
    const schedule = new Schedule();
    const order = new Order('Customer order', 40, 20);
    schedule.addOrder(order);

    schedule.print();

    expect(console.table).toHaveBeenCalledWith([
      { start: 0, end: 40, status: 'busy' },
      { start: 41, end: 1439, status: 'free' }
    ]);
  });

  it('adds another order to the schedule', () => {
    const schedule = new Schedule();
    const order = new Order('Customer 2', 40, 20);
    schedule.addOrder(order);

    expect(schedule.freeWindow(0, 41)).toBeFalsy();
    expect(schedule.freeWindow(41, 50)).toBeTruthy();
  });
});

