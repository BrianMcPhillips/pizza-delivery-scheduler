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

  it('adds an order to the schedule', () => {
    const schedule = new Schedule();
    const order = new Order('pizza order', ['cheese pizza'], 40, 20);
    schedule.addOrder(order);

    expect(schedule.nextOpenMinute()).toEqual(0);
  });

  it('adds an order to the schedule', () => {
    const schedule = new Schedule();
    const order = new Order('pizza order', ['supreme pizza'], 40, 20);
    schedule.addOrder(order);

    schedule.clear();

    expect(schedule.nextOpenMinute()).toEqual(0);
  });
 
  /*it('prints the schedule', () => {
    console.table = jest.fn();
    const schedule = new Schedule();
    const order = new Order('pizza order', ['pepperoni'], 0, 20);
    schedule.addOrder(order);

    schedule.print();

    expect(console.table).toHaveBeenCalledWith([
      { start: 0, end: 20, status: 'busy' },
      { start: 0, end: 1439, status: 'free' }
    ]);
  }); 

  it('adds an order to the schedule', () => {
    const schedule = new Schedule();
    const order = new Order('pizza order', ['pepperoni pizza'], 40, 20);
    schedule.addOrder(order);

    expect(schedule.freeWindow(0, 41)).toBeFalsy();
    expect(schedule.freeWindow(41, 50)).toBeTruthy();
  }); */
});


