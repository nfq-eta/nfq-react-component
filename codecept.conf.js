exports.config = {
    tests: './e2e-tests/*.spec.e2e.js',
    timeout: 10000,
    output: './e2e-tests/logs',
    helpers: {
        Nightmare: {
            url: 'http://localhost:3000',
            windowSize: '1920x1200',
        },
    },
    include: {
        I: './e2e-tests/steps.js',
    },
    bootstrap: false,
    mocha: {},
    name: require('./package').name,
};
