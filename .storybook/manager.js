import React from 'react';
import { addons } from '@storybook/addons';
// import { addParameters } from '@storybook/react';

import theme from './theme';

addons.setConfig({
    theme,
});

// addParameters({
//     backgrounds: [
//         { name: "light", value: 'transparent' },
//         // { name: "gray", value: "#eeeeee" },
//         // { name: "dark", value: "#505959", default: true }
//     ]
// });
