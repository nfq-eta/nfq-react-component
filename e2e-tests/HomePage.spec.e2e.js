const { name, version } = require('../package.json');

Feature('Homepage');

Scenario('test something', (I) => {
    I.amOnPage('/');
    I.see(`Welcome to ${name} v${version} component`);
});
