const Order = require('./Order.js');


describe('order class', () => {
  it('has a name and delivery minute', () => {
    const order = new Order('Brian', 50, 20);
    expect(order.name).toEqual('Brian');
    expect(order.deliveryMinute).toEqual(50);
  });
  it('has a start minute', () => {
    const order = new Order('Brian', 50, 20);
    expect(order.startMinute).toEqual(10);
  });
});
