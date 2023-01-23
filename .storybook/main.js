const webpack = require('webpack');
const path = require('path');
const createCompiler = require('@storybook/addon-docs/mdx-compiler-plugin');

const modulesPath = path.resolve(__dirname, '../src');

module.exports = {
    core: {
        builder: 'webpack5',
      },
    addons: [
        '@storybook/addon-backgrounds/register',
        '@storybook/addon-essentials',
        {
            name: '@storybook/addon-docs',
            options: {
              sourceLoaderOptions: null,
              transcludeMarkdown: true,
            },
        },
    ],
    stories: ['../src/**/*.stories.@(jsx|mdx)'],
    webpackFinal: async (config, { configType }) => {
        config.resolve.alias.modernizr$ = path.resolve(__dirname, '../node_modules/@paysera/modernizr-config/.modernizrrc.js');

        const mdxRule = config.module.rules.find(rule => rule.test.toString() === /\.mdx$/.toString());
        mdxRule.use.find(loader => loader.loader.includes('mdx1-csf')).options['compilers'] = [
        createCompiler({}),
        ];
        
        config.module.rules.push({
            test: /\.mdx?$/,
            include: [path.resolve(__dirname, '..')],
            exclude: [/node_modules/],
            use: [
              {
                loader: path.resolve(__dirname, 'mdx-code-block-rewrite'),
              },
            ],
          });

        // Load the whole example code of story files to display in docs.
        config.module.rules.push({
            test: /examples\/.*\.jsx?$/,
            include: [modulesPath],
            rules: [
            {
                loader: path.resolve(__dirname, 'whole-source-loader'),
            },
            ],
            // enforce: 'pre',
        });

        config.module.rules.push(
            {
                test: /\.modernizrrc\.js$/,
                use: ['webpack-modernizr-loader'],
            },
            {
                test: /\.less$/,
                use: [
                    require.resolve('style-loader'),
                    {
                        loader: require.resolve('css-loader'),
                        options: {
                            importLoaders: 1,
                        },
                    },
                    require.resolve('less-loader')
                ],
            },
        );
        // config.node = {
        //     fs: 'empty'
        // };
        return config;
    },
};

// TODO`s:
// - refactor theme, require as lib and without font declarations
// - add less loader and use less instead of CSS
// - add ample admin specific components (alerts, badges, etc)
// - add custom react components, andes-table, etc.
// - improve docs using examples from https://storybook.js.org/docs/examples/
