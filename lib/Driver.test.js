const Driver = require('./Driver.js');
const Schedule = require('./Schedule.js');

describe('driver class', () => {
  it('should test driver class', () => {
    const driver = new Driver('Brian');
    expect(driver.name).toEqual('Brian');
    expect(driver.currentSchedule).toEqual(expect.any(Schedule));

  });
});
