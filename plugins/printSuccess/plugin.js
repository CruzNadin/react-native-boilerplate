const {green, blue} = require('kleur');

module.exports = {
  async apply(value, previousValues) {
    return new Promise(resolve => {
      console.log('\n');
      console.log(
        'CruzNadin React-Native Boilerplate initialized with success ! 🚀\n',
      );
      console.log(`${green('CruzNadin - Kadir Barcın thekadir.com')}`);
      if (previousValues['CruzNadin/react-native-boilerplate']) {
        console.log(blue('THE TYPESCRIPT VERSION 📘'));
      }
      console.log('\n');

      console.log(
        '- 📚 If you need to read more about this boilerplate : https://github.com/CruzNadin/react-native-boilerplate/',
      );
      console.log(
        '- 🤕 If you have some troubles : https://github.com/CruzNadin/react-native-boilerplate/issues',
      );
      console.log(
        '- ⭐ If you love this boilerplate, give us a star, you will be a ray of sunshine in our lives :) https://github.com/CruzNadin/react-native-boilerplate',
      );
      resolve();
    });
  },
};
