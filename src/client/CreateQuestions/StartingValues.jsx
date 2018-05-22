import React from 'react';

class StartingValues extends React.Component {
  constructor(props) {
    super(props);
  }
  

  render() {
    return (
      <div className="StartingValue">
        <div className="Number-Choices" >
         Choice: {this.props.idx + 1}
        </div>

        <div className="Name">
          {this.props.value.name}
          <input type="text" value={this.props.value.name} onChange={this.props.ChangeText} id={`${this.props.idx}-name`}/>
        </div>

        <div className="Description">
          {this.props.value.description}
          <input type="text" value={this.props.value.description} onChange={this.props.ChangeText} id={`${this.props.idx}-description`}/>
        </div>
        <div className="Image">
          {this.props.value.image}
        </div>
        <div className="Add-Image" id={this.props.idx} />
        <div className="DeleteValue" onClick={this.props.deleteItem} id={this.props.idx}>
          Click Here To Delete Question
        </div>
      </div>
    );
  }
}

export default StartingValues;
