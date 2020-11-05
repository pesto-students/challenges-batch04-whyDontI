class Cycled {
  constructor(arr) {
    this.ind = 0;
    this.arr = arr;
  }

  set index(num) {
    this.ind = (this.ind + num) % this.arr.length;
    this.ind = (this.ind < 0) ? this.arr.length + this.ind : this.ind;
    return this.ind;
  }

  get index() {
    return this.ind;
  }

  current() {
    return this.arr[this.ind];
  }

  next() {
    this.ind = (this.ind + 1) % this.arr.length;
    return this.arr[this.ind];
  }

  previous() {
    this.ind = (this.ind - 1) % this.arr.length;
    this.ind = (this.ind < 0) ? this.arr.length + this.ind : this.ind;
    return this.arr[this.ind];
  }

  step(num) {
    this.ind = (this.ind + num) % this.arr.length;
    this.ind = (this.ind < 0) ? this.arr.length + this.ind : this.ind;
    return this.arr[this.ind];
  }

  [Symbol.iterator]() {
    return {
      ind: this.ind,
      arr: this.arr,
      next() {
        if (this.ind < this.arr.length) {
          this.ind += 1;
          return {
            done: false,
            value: this.arr[this.ind - 1],
          };
        }
        return {
          done: true,
          value: this.arr[this.ind],
        };
      },
    };
  }

  indexOf(num) {
    for (const i in this.arr) {
      if (this.arr[i] === num) {
        return parseInt(i, 10);
      }
    }

    return -1;
  }
}

export { Cycled };
