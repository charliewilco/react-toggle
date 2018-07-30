import { Component } from "react";

export default class ToggleInstance extends Component {
  static defaultProps = {
    defaultOpen: false
  };

  static displayName = "ToggleInstance";

  state = {
    open: this.props.defaultOpen
  };

  closeInstance = () => this.setState({ open: false });

  setInstance = value => this.setState({ open: value });

  toggleInstance = () => this.setState(({ open }) => ({ open: !open }));

  render() {
    return this.props.children({
      isOpen: this.state.open,
      onToggle: this.toggleInstance,
      onClose: this.closeInstance,
      onSet: this.setInstance
    });
  }
}
