const { Manager } = require('../lib/Manager');

test('Creates new Manager', () => {
  const employee = new Manager('Sara Kim', 1234, 'SaraKim@company.com', 'sara-kim');

  expect(employee.name).toBe("Sara Kim");
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toEqual(expect.any(String));
  expect(employee.officeNumber).toEqual(expect.any(Number));
})

test('Checks all methods for Engineer class', () => {
  const employee = new Manager('Sara Kim', 1234, 'SaraKim@company.com', 'sara-kim');

  expect(employee.getName()).toBe(employee.name);
  expect(employee.getId()).toBe(employee.id);
  expect(employee.getEmail()).toBe(employee.email);
  expect(employee.getOfficeNumber()).toBe(employee.officeNumber);
  expect(employee.getRole()).toBe('Manager');
})