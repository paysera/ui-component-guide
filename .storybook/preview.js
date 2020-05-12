import React from 'react';
import { addDecorator } from '@storybook/react';

import '../src/styles/theme.css';
import '../src/styles/storybook.css';

addDecorator(storyFn => <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '30px 0' }}>{storyFn()}</div>);
