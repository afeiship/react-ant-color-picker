# react-ant-color-picker
> Color picker for ant project.

## installation
```shell
npm install -S @feizheng/react-ant-color-picker
```
## properties
| property        | type | description |
| --------------- | ---- | ----------- |
| className       | -    | -           |
| value           | -    | -           |
| onChange        | -    | -           |

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
    componentDidMount() {}
    render() {
      return (
        <div className="app-container">
          <ReactAntColorPicker />
        </div>
      );
    }
  }

  ReactDOM.render(<App />, document.getElementById('app'));
  ```

## documentation
- https://afeiship.github.io/react-ant-color-picker/
