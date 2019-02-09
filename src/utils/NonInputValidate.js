class NonInputValidate {
  constructor(inputData) {
    this.inputData = inputData;
  }
  inputCheck() {
    const inputCkeck = [];
    Object.values(this.inputData).filter((value, index) => {
      if (!value) {
        const nonInputKey = Object.keys(this.inputData)[index];
        inputCkeck.push(nonInputKey);
      }
      return false;
    });
    return inputCkeck;
  }
}

export default NonInputValidate;
