const steps = require('./index');

beforeEach(() => {
  jest.spyOn(console, 'log');
});

afterEach(() => {
  console.log.mockRestore();
});

test('steps is a function', () => {
  expect(typeof steps).toEqual('function');
});

test('steps called with n = 1', () => {
  steps(1);
  expect(console.log.mock.calls[0][0]).toEqual('#');
  expect(console.log.mock.calls.length).toEqual(1);
});

test('steps called with n = 2', () => {
  steps(2);
  expect(console.log.mock.calls[0][0]).toEqual('# ');
  expect(console.log.mock.calls[1][0]).toEqual('##');
  expect(console.log.mock.calls.length).toEqual(2);
});

test('steps called with n = 3', () => {
  steps(3);
  expect(console.log.mock.calls[0][0]).toEqual('#  ');
  expect(console.log.mock.calls[1][0]).toEqual('## ');
  expect(console.log.mock.calls[2][0]).toEqual('###');
  expect(console.log.mock.calls.length).toEqual(3);
});

test('steps called with n = 10', () => {
  steps(10);
  expect(console.log.mock.calls[0][0]).toEqual('#         ');
  expect(console.log.mock.calls[1][0]).toEqual('##        ');
  expect(console.log.mock.calls[2][0]).toEqual('###       ');
  expect(console.log.mock.calls[3][0]).toEqual('####      ');
  expect(console.log.mock.calls[4][0]).toEqual('#####     ');
  expect(console.log.mock.calls[5][0]).toEqual('######    ');
  expect(console.log.mock.calls[6][0]).toEqual('#######   ');
  expect(console.log.mock.calls[7][0]).toEqual('########  ');
  expect(console.log.mock.calls[8][0]).toEqual('######### ');
  expect(console.log.mock.calls[9][0]).toEqual('##########');
  expect(console.log.mock.calls.length).toEqual(10);
});
