import React, { Component } from "react";
import Switch from "react-switch";
import {checkedIcon, uncheckedIcon} from './icons';

class CustomSwitch extends Component {
  constructor(props) {
    super(props);
    this.state = { checked: false };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(checked) {
    this.setState({ checked });
    this.props.setCheckedValue(checked);
  }

  render() {
    return (
      <label>
        <Switch
        onColor="#ff0000" 
        checkedIcon={checkedIcon} 
        uncheckedIcon={uncheckedIcon} 
        offColor="#0000FF" 
        onChange={this.handleChange} 
        checked={this.state.checked} />
      </label>
    );
  }
}

export default CustomSwitch;