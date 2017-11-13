import React from 'react';

import { storiesOf } from '@storybook/react';

import { Component } from '../src/index';

storiesOf('Demo', module).add('index', () => <Component super={false} foo="bar" bar={{ foo: 'bar' }} />);
