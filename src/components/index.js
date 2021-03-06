import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from '@jswork/noop';
import { Popover } from 'antd';
import ReactColorPicker from '@jswork/react-color-picker';
import { SketchPicker } from 'react-color';
import Color from 'color';
import nxUniqe from '@jswork/next-unique';

const CLASS_NAME = 'react-ant-color-picker';

export default class ReactAntColorPicker extends Component {
  static displayName = CLASS_NAME;
  static propTypes = {
    /**
     * The extended className for component.
     */
    className: PropTypes.string,
    /**
     * The select label text.
     */
    label: PropTypes.string,
    /**
     * The runtime color.
     */
    value: PropTypes.string,
    /**
     * The handler when value chnage.
     */
    onChange: PropTypes.func,
    /**
     * The placement for popover.
     */
    placement: PropTypes.string
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
    return nxUniqe([Color(value).hex()].concat(colors)).slice(0, len);
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
