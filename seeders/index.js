var User = require('../app/models').User;
var Expense = require('../app/models').Expense;
var faker = require('faker');

//admin user for login
User.create({
  username: 'Sam Gyory',
  password: 'securePassword',
  admin: true
});
//employee for login
User.create({
  username: 'Chuck Norris',
  password: 'password',
  admin: false
});

console.log('starting to create employees');
//create 100 employees
for(let i = 0; i < 100; i++) {
  User.create({
    username: faker.name.findName(),
    password: 'weAllHaveTheSamePassword',
    admin: false
  });
}

const descriptionPrice = {
  'coffee': 2.50, 'dinner': 40, 'lunch': 14.75, 'hotel stay': 150,
  'flight to NYC': 370,'team lunch': 105, 'team dinner': 200,
  'three night hotel stay': 400, 'taxi to airport': 20.25,
  'taxi to hotel': 15.50, 'dinner with clients': 440, 'breakfast': 12,
  'company party': 1550, 'office supplize': 37, 'taxi from the office': 10
};

console.log('creating expenses');
//create 20 expenses for every employee
//there are 102 employees total
for(let i = 1; i < 103; i++) {
  for(let j = 0; j < 20; j++) {
    const index = Math.floor(Math.random() * Object.keys(descriptionPrice).length);
    const description = Object.keys(descriptionPrice)[index];
    const amount = descriptionPrice[description];
    const date = faker.date.past();
    Expense.create({
      amount,
      description,
      userId: i,
      date
    });
  }
}

console.log('seeded');
