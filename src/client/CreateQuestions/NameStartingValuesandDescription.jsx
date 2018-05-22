import React from 'react';

class NameStartingValuesandDescription extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div onClick={this.props.makeNewStartingValue}>
        Click Here to Add A Question To Your List (Max 20)
        </div>
      </div>
    );
  }
}

export default NameStartingValuesandDescription;
