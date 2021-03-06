import ReactDemokit from '@jswork/react-demokit';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactAntColorPicker from '../src/main';
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
