import ErrorRepository from '../app';

test('testing class ErrorRepository', () => {
  const expected = 'Ошибка входа';
  const received = new ErrorRepository().translate(0);
  expect(received).toBe(expected);
});

test('testing class ErrorRepository', () => {
  const expected = 'Unknown error';
  const received = new ErrorRepository().translate(2);
  expect(received).toBe(expected);
});
