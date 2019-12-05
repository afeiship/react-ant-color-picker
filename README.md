# react-ant-color-picker
> Color picker for ant project.

## installation
```shell
npm install -S @feizheng/react-ant-color-picker
```
## properties
| property  | type | description |
| --------- | ---- | ----------- |
| className | -    | -           |
| value     | -    | -           |
| onChange  | -    | -           |
| placement | -    | -           |
| label     | -    | -           |

## usage
1. import css
  ```scss
  @import "~@feizheng/react-ant-color-picker/dist/style.scss";

  // customize your styles:
  $react-ant-color-picker-options: ()
  ```
2. import js
  ```js
  import ReactAntColorPicker from '../src/main';
  import ReactDOM from 'react-dom';
  import React from 'react';
  import './assets/style.scss';

  class App extends React.Component {
    state = {
      value: '#eee'
    };

    onChange = (inEvent) => {
      const { value } = inEvent.target;
      this.setState({ value });
    };

    render() {
      const _value = this.state.value;
      return (
        <div className="app-container" style={{ background: _value }}>
          <ReactAntColorPicker value={_value} onChange={this.onChange} />
        </div>
      );
    }
  }

  ReactDOM.render(<App />, document.getElementById('app'));

  ```

## documentation
- https://afeiship.github.io/react-ant-color-picker/
