const { Order } = require('./Order.js');

describe('Order Class', () => {
  it('produces name, order items, delivery time', () => {
    const pizzaOrder = new Order('Brian', ['pepperoni pizza', 'wings'], 45);
    
    expect(pizzaOrder.name).toEqual('Brian');
    expect(pizzaOrder.items).toEqual(['pepperoni pizza', 'wings']);
    expect(pizzaOrder.deliveryTime).toEqual(45);
  });
  
});
