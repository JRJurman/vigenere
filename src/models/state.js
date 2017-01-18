module.exports = {
  state: {
    key: '',
    input: '',
    output: ''
  },
  reducers: {
    updateKey: (state, key) => {
      return Object.assign({}, state, {key})
    },
    updateInput: (state, input) => {
      return Object.assign({}, state, {input})
    },
    encrypt: (state, data) => {
      // transform key into numeric values
      const keyArray = state.key.toLowerCase().split('');
      const numberKey = keyArray.map((letter) => (letter.charCodeAt() - 96));

      // clean up (no white spaces, no puncuation)
      const inputArray = state.input.toLowerCase().split('');
      const sanitizedInput = inputArray.filter((letter) => {
        const letterValue = letter.charCodeAt() - 96;
        return (1 <= letterValue) && (letterValue <= 26);
      });

      const encryptedMessage = sanitizedInput.map((letter, index) => {
        const shit = numberKey[index % numberKey.length];
        const letterValue = letter.charCodeAt() - 97;
        const newLetterValue = (letterValue + shit) % 26;
        return String.fromCharCode(newLetterValue + 97);
      }).join('');

      return Object.assign({}, state, {output: encryptedMessage});
    },
    decrypt: (state, data) => {
      // transform key into numeric values
      const keyArray = state.key.toLowerCase().split('');
      const numberKey = keyArray.map((letter) => (letter.charCodeAt() - 96));

      // clean up (no white spaces, no puncuation)
      const inputArray = state.input.toLowerCase().split('');
      const sanitizedInput = inputArray.filter((letter) => {
        const letterValue = letter.charCodeAt() - 96;
        return (1 <= letterValue) && (letterValue <= 26);
      });

      const decryptedMessage = sanitizedInput.map((letter, index) => {
        const shit = numberKey[index % numberKey.length];
        const letterValue = letter.charCodeAt() - 97;
        const newLetterValue = (letterValue - shit + 26) % 26;
        return String.fromCharCode(newLetterValue + 97);
      }).join('');

      return Object.assign({}, state, {output: decryptedMessage});
    }
  }
}
