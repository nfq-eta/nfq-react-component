module.exports = {
    type: 'react-component',
    npm: {
        esModules: true,
        umd: {
            global: require('./package').name,
            externals: {
                react: 'React',
            },
        },
    },
    webpack: {
        html: {
            template: 'demo/public/index.html',
        },
    },
};
