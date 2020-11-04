function accessorProperties() {
  return {
    number: 0,
    numberBinary: 0,

    set number(num) {
      this.numberBinary = (num >>> 0).toString(2);
    },

    get number() {
      return this.numberBinary;
    },
  };
}

export {
  accessorProperties,
};
