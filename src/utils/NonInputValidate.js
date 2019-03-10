class NonInputValidate {
  constructor(inputData) {
    this.inputData = inputData;
  }

  inputCheck() {
    const inputCheck = [];
    Object.values(this.inputData).filter((value, index) => {
      if (!value) {
        const nonInputKey = Object.keys(this.inputData)[index];
        inputCheck.push(nonInputKey);
      }
      return false;
    });
    return inputCheck;
  }
}

export default NonInputValidate;
