import React from 'react';

class ButtonStart extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (<div onClick={this.props.buildClick} />);
  }
}

export default ButtonStart;
