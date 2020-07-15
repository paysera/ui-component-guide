const webpack = require('webpack');

module.exports = {
    addons: ['@storybook/addon-backgrounds/register'],
    stories: ['../src/**/*.stories.jsx'],
};

// TODO`s:
// - refactor theme, require as lib and without font declarations
// - add less loader and use less instead of CSS
// - add ample admin specific components (alerts, badges, etc)
// - add custom react components, andes-table, etc.
// - improve docs using examples from https://storybook.js.org/docs/examples/
