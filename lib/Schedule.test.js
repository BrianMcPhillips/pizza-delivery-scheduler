const Schedule = require('./Schedule.js');

describe('schedule class', () => {
  it('should return next free minute', () => {
    const schedule = new Schedule();

    expect(schedule.nextOpenMinute()).toEqual(0);
  });
});


