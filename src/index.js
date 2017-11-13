/* eslint-disable prefer-destructuring */
import React from 'react';

const name = require('../package.json').name;
const version = require('../package.json').version;

export const Component = () => (
    <div>
        <h2>Welcome to {name} v{version} component</h2>
    </div>
);
