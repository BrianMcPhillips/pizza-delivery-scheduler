const Driver = require('./Driver.js');
const Schedule = require('./Schedule.js');

describe('Driver class', () => {
  it('has a name and current schedule', () => {
    const driver = new Driver('Bob');

    expect(driver.name).toEqual('Bob');
    expect(driver.currentSchedule).toEqual(expect.any(Schedule));
  });
});
