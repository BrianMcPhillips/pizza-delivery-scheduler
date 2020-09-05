const { Order } = require('./Order.js');

describe('Order Class', () => {
  it('produces name, delivery time in minutes, and the time the order was placed', () => {
    const pizzaOrder = new Order('Brian');
    expect(pizzaOrder.name).toEqual('Brian');
  });
});
