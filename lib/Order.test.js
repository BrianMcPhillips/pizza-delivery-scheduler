const { Order } = require('./Order.js');

describe('Order Class', () => {
  it('produces name, order items', () => {
    const pizzaOrder = new Order('Brian', ['pepperoni pizza', 'wings']);
    expect(pizzaOrder.name).toEqual('Brian');
    expect(pizzaOrder.items).toEqual(['pepperoni pizza', 'wings']);
  });
  
});
