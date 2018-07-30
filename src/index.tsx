import * as React from "react";

export interface ToggleInstanceParams {
  isOpen: boolean,
  onToggle: () => void,
  onClose: () => void,
  onSet: (value: boolean) => void
}

export interface ToggleProps {
  defaultOpen: boolean,
  children: (params: ToggleInstanceParams) => React.ReactNode
}
export interface ToggleState {
  open: boolean
}

export default class ToggleInstance extends React.Component<ToggleProps, ToggleState> {
  static defaultProps = {
    defaultOpen: false
  };

  static displayName = "ToggleInstance";

  state = {
    open: this.props.defaultOpen
  };

  closeInstance = () => this.setState({ open: false });

  setInstance = (value: boolean) => this.setState({ open: value });

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
