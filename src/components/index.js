import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from '@feizheng/noop';
import objectAssign from 'object-assign';
import { Popover } from 'antd';
import ReactColorPicker from '@feizheng/react-color-picker';
import { SketchPicker } from 'react-color';
import Color from 'color';
import _ from 'lodash';

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
    value: '#FFFFFF',
    placement: 'bottom',
    onChange: noop
  };

  get presetColors() {
    const { value } = this.state;
    const colors = SketchPicker.defaultProps.presetColors;
    const len = colors.length;
    return _.uniq([Color(value).hex()].concat(colors)).slice(0, len);
  }

  constructor(inProps) {
    super(inProps);
    this.state = {
      presetColors: [],
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

  onVisibleChange = (visible) => {
    visible && this.setState({ presetColors: this.presetColors });
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
    const presetColors = this.state.presetColors;

    return (
      <Popover
        placement={placement}
        onVisibleChange={this.onVisibleChange}
        data-component={CLASS_NAME}
        className={classNames(CLASS_NAME, className)}
        {...props}
        content={
          <ReactColorPicker
            value={_value}
            onChange={this.onChange}
            className={`${CLASS_NAME}__picker`}
            presetColors={presetColors}
          />
        }>
        <span className="is-text">{label}</span>
        <label className="is-label" style={{ background: _value }}></label>
      </Popover>
    );
  }
}
