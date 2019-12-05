import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from '@feizheng/noop';
import objectAssign from 'object-assign';
import { Popover } from 'antd';
import ReactColorPicker from '@feizheng/react-color-picker';

const CLASS_NAME = 'react-ant-color-picker';

export default class extends Component {
  static displayName = CLASS_NAME;
  static propTypes = {
    className: PropTypes.string,
    placement: PropTypes.string,
    label: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func
  };

  static defaultProps = {
    label: 'Select',
    value: '#fff',
    placement: 'bottom',
    onChange: noop
  };

  constructor(inProps) {
    super(inProps);
    this.state = {
      value: inProps.value
    };
  }

  shouldComponentUpdate(inProps) {
    const { value } = inProps;
    if (value !== this.state.value) {
      this.setState({ value });
    }
    return true;
  }

  onChange = (inEvent) => {
    const { value } = inEvent.target;
    const { onChange } = this.props;
    const target = { value };
    this.setState(target, () => {
      onChange({ target });
    });
  };

  render() {
    const {
      className,
      placement,
      value,
      onChange,
      label,
      children,
      ...props
    } = this.props;
    const _value = this.state.value;
    return (
      <Popover
        placement={placement}
        data-component={CLASS_NAME}
        className={classNames(CLASS_NAME, className)}
        {...props}
        content={
          <ReactColorPicker
            value={_value}
            onChange={this.onChange}
            className={`${CLASS_NAME}__picker`}
          />
        }>
        <span className="is-text">{label}</span>
        <label className="is-label" style={{ background: _value }}></label>
      </Popover>
    );
  }
}
