const Order = require('./Order.js');

describe('Order Class', () => {
  it('produces name, order items, delivery time', () => {
    const pizzaOrder = new Order('Brian', 45);
    
    expect(pizzaOrder.name).toEqual('Brian');
    expect(pizzaOrder.deliveryTime).toEqual(45);
  });
  
});
