function accessorProperties() {
  return {
    numberBinary: 0,

    set number(num) {
      this.numberBinary = num.toString(2);
    },
    get number() {
      return this.numberBinary;
    },
  };
}

export {
  accessorProperties,
};
