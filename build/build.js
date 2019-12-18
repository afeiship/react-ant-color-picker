import baseConfig from '.';
import merge from 'webpack-merge';
import {
  configs,
  inputs,
  outputs,
  loaders,
  plugins,
  externals
} from '@feizheng/webpack-lib-kits';

export default merge(baseConfig, {
  entry: inputs.build(),
  output: outputs.build({
    library: 'ReactAntColorPicker'
  }),
  externals: externals.base({
    '@feizheng/noop': '@feizheng/noop',
    '@feizheng/react-color-picker': '@feizheng/react-color-picker',
    antd: 'antd',
    color: 'color',
    lodash: 'lodash'
  }),
  plugins: [plugins.clean(), plugins.copyStyles()]
});
