import React from 'react';
import { render } from 'react-dom';

import Example from '../../src';
import { name, version } from '../../package';

const Demo = () => (
    <div>
        <h1>{name} v{version} Demo</h1>
        <Example />
    </div>
);

render(<Demo />, document.querySelector('#demo'));
