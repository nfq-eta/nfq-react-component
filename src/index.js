/* eslint-disable prefer-destructuring */
import React from 'react';

const name = require('../package.json').name;
const version = require('../package.json').version;

export default () => (
    <div>
        <h2>Welcome to {name} {version} component</h2>
    </div>
);
