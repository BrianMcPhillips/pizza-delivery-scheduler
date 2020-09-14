const Parlor = require('./Parlor');
const Driver = require('./Driver');
const Order = require('./Order');

describe('Parlor class', () => {
  it('can add drivers', () => {
    const parlor = new Parlor();
    const driver = new Driver('jay');

    parlor.addDriver(driver);
  });

  it('can add orders', () => {
    const parlor = new Parlor();
    const order = new Order('pizza order', 50, 20);

    parlor.addOrder(order);
  });

  it('prints a schedule', () => {
    console.table = jest.fn();
    const parlor = new Parlor();

    const order1 = new Order('Brian', 30, 10);
    parlor.addOrder(order1);

    const order2 = new Order('Bob', 50, 20);
    parlor.addOrder(order2);

    const order3 = new Order('Bill', 60, 5);
    parlor.addOrder(order3);

    const rachel = new Driver('Rachel');
    parlor.addDriver(rachel);

    const chris = new Driver('Chris');
    parlor.addDriver(chris);

    parlor.printSchedule();

    expect(console.table).toHaveBeenCalledWith([
      { start: 0, end: 30, status: 'busy' },
      { start: 31, end: 34, status: 'free' },
      { start: 35, end: 60, status: 'busy' },
      { start: 61, end: 1439, status: 'free' }
    ]);

    expect(console.table).toHaveBeenCalledWith([
      { start: 0, end: 9, status: 'free' },
      { start: 10, end: 50, status: 'busy' },
      { start: 51, end: 1439, status: 'free' }
    ]);

  }); 
});
