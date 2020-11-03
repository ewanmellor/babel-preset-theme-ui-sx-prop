const jsx = require('@babel/plugin-transform-react-jsx');
const pragmatic = require('@emotion/babel-plugin-jsx-pragmatic');
const emotion = require('babel-plugin-emotion');

let pragmaName = '___ThemeUIsx';

module.exports = (api, { pragma, sourceMap, autoLabel, labelFormat, instances, ...options } = {}) => {
  return {
    plugins: [
      [
        pragmatic,
        {
          export: 'jsx',
          module: '@theme-ui/core',
          import: pragmaName,
        },
      ],
      [jsx, { pragma: pragmaName, pragmaFrag: 'React.Fragment', ...options }],
      [
        emotion,
        {
          sourceMap,
          autoLabel,
          labelFormat,
          instances,
          cssPropOptimization: true,
        },
      ],
    ],
  };
};
