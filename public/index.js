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
