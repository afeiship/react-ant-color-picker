# react-ant-color-picker
> Color picker for ant project.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install -S @jswork/react-ant-color-picker
```

## properties
| Name      | Type   | Required | Default   | Description                           |
| --------- | ------ | -------- | --------- | ------------------------------------- |
| className | string | false    | -         | The extended className for component. |
| label     | string | false    | 'Select'  | The select label text.                |
| value     | string | false    | '#FFFFFF' | The runtime color.                    |
| onChange  | func   | false    | noop      | The handler when value chnage.        |
| placement | string | false    | 'bottom'  | The placement for popover.            |


## usage
1. import css
  ```scss
  @import "~@jswork/react-ant-color-picker/dist/style.css";

  // or use sass
  @import "~@jswork/react-ant-color-picker/dist/style.scss";

  // customize your styles:
  $react-ant-color-picker-options: ()
  ```
2. import js
  ```js
  import ReactDemokit from '@jswork/react-demokit';
  import React from 'react';
  import ReactDOM from 'react-dom';
  import ReactAntColorPicker from '@jswork/react-ant-color-picker';
  import './assets/style.scss';

  class App extends React.Component {
    state = {
      value: '#282c34'
    };

    onChange = (inEvent) => {
      const { value } = inEvent.target;
      this.setState({ value });
    };

    render() {
      const _value = this.state.value;
      return (
        <ReactDemokit
          className="p-3 app-container"
          style={{ background: _value }}
          url="https://github.com/afeiship/react-ant-color-picker">
          <ReactAntColorPicker value={_value} onChange={this.onChange} />
        </ReactDemokit>
      );
    }
  }

  ReactDOM.render(<App />, document.getElementById('app'));

  ```

## documentation
- https://afeiship.github.io/react-ant-color-picker/


## license
Code released under [the MIT license](https://github.com/afeiship/react-ant-color-picker/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/react-ant-color-picker
[version-url]: https://npmjs.org/package/@jswork/react-ant-color-picker

[license-image]: https://img.shields.io/npm/l/@jswork/react-ant-color-picker
[license-url]: https://github.com/afeiship/react-ant-color-picker/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/react-ant-color-picker
[size-url]: https://github.com/afeiship/react-ant-color-picker/blob/master/dist/react-ant-color-picker.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/react-ant-color-picker
[download-url]: https://www.npmjs.com/package/@jswork/react-ant-color-picker
