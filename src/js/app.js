export default class ErrorRepository {
  constructor() {
    this.errorMap = new Map([
      [0, 'Ошибка входа'],
      [1, 'Ошибка добавления'],
    ]);
  }

  translate(code) {
    return (this.errorMap.has(code)) ? this.errorMap.get(code) : 'Unknown error';
  }
}
