class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.length = this.items.length;
  }

  get(pos) {
    if (pos > this.items.length - 1 || pos <= 0) {
      throw new Error('OutOfBounds');
    }
    return this.items[pos];
  }

  max() {
    if (this.length === 0) throw new Error('EmptySortedList');
    try {
      console.log(Math.max(...this.items));
      return Math.max(...this.items);
    } catch (error) {
      console.log(error);
    }
  }

  min() {
    if (this.length === 0) throw new Error('Empty SortedList');
    try {
      console.log(Math.min(...this.items));
      return Math.min(...this.items);
    } catch (error) {
      console.log(error);
    }
  }

  sum() {
    if (this.length === 0) return 0;
    return this.items.reduce((acc, cur) => acc + cur);
  }

  avg() {
    if (this.length === 0) throw new Error('EmptySortedList');
    return this.sum() / this.length;
  }
}

module.exports = SortedList;
