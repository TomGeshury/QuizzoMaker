import React from 'react';
import ButtonStart from './CreateQuestions/ButtonStart';
import NameStartingValuesandDescription from './CreateQuestions/NameStartingValuesandDescription';
import StartingValues from './CreateQuestions/StartingValues';

class PossibilityComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    if (!this.props.Confirmed) {
      return (
        <div>
          <ButtonStart
            buildClick={this.props.buildClick}
          />

          {this.props.StartBuilding ? (
            <NameStartingValuesandDescription
              makeNewStartingValue={this.props.makeNewStartingValue}
            />
      ) : (
        <div> Press Start Above </div>
      )
    }
          {
      this.props.HowManyAnswers.map((value, idx) => (<StartingValues
        value={value}
        idx={idx}
        deleteItem={this.props.deleteItem}
        ChangeText={this.props.ChangeText}
      />))
    }
        </div>
      );
    }
    return (
      <div>Thanks For Finishing. You can now edit your options. </div>
    );
  }
}

export default PossibilityComponent;
