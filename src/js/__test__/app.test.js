import ErrorRepository from '../app';

test('testing class ErrorRepository', () => {
  const expected = new Map([
    [0, 'Ошибка входа'],
    [1, 'Ошибка добавления'],
  ]);
  const received = new ErrorRepository().errorMap;
  expect(received).toEqual(expected);
});

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
