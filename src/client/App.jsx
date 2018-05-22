import React from 'react';
import Dropzone from 'react-dropzone';
import PossibilityComponent from './PossibilityComponent';
import Confirmed from './Confirmed';
import Preview from './preview';
// Create a mapped array of StartingValues.
// Each StartingValue has multiple properties that can be changed.
// Have a seperate Function that changes those individual properties from within that function


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      StartBuilding: true,
      HowManyAnswers: [],
      Confirmed: false,
      accepted: [],
    };

    this.buildClick = this.buildClick.bind(this);
    this.makeNewStartingValue = this.makeNewStartingValue.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.ChangeText = this.ChangeText.bind(this);
  }

  buildClick() {
    this.setState({
      StartBuilding: !this.state.StartBuilding,
    });
  }

  makeNewStartingValue() {
    const PreviousAnswers = this.state.HowManyAnswers;
    const newAnswers = PreviousAnswers;
    if (PreviousAnswers.length === 20) {
      alert('There is a limit of 20 questions in the free tier!');
    } else {
      newAnswers[PreviousAnswers.length] = {
        name: 'Put the Name Here',
        description: 'Put The Description of Your Value',
        image: 'Put An Image',
      };
      this.setState({
        HowManyAnswers: newAnswers,
      });
    }
  }

  deleteItem(e) {
    const { HowManyAnswers } = this.state;
    const i = parseInt(e.target.id);
    const newAnswers = HowManyAnswers.slice(0, i).concat(HowManyAnswers.slice(i + 1));
    this.setState({
      HowManyAnswers: newAnswers,
    });
  }

  ChangeText(e) {
    const test = e.target.id;
    const cool = test.split('-');
    const i = cool[0];
    const description = cool[1];
    const newAnswers = this.state.HowManyAnswers;
    newAnswers[i][description] = e.target.value;
    this.setState({
      HowManyAnswers: newAnswers,
    });
  }


  isConfirmed() {
    this.setState({
      Confirmed: !this.state.Confirmed,
    });
  }


  render() {
    return (
      <div> 
        <div className="dropzone">
      <Dropzone
        accept="image/jpeg, image/png"
        onDrop={(accepted) => { this.setState({ accepted }); }}
      >
        <p>Try dropping some files here, or click to select files to upload.</p>
        <p>Only *.jpeg and *.png images will be accepted</p>
      </Dropzone>
      <h2>Accepted files</h2>
        {
          this.state.accepted.map(f => <li key={f.name}>{f.name} - {f.size} bytes
          <img src={f.preview} /> 
          </li>)
        }
        </div>
                   
        <Confirmed
          isConfirmed={this.isConfirmed}
        />

        <PossibilityComponent
          makeNewStartingValue={this.makeNewStartingValue}
          Confirmed={this.state.Confirmed}
          buildClick={this.buildClick}
          HowManyAnswers={this.state.HowManyAnswers}
          StartBuilding={this.state.StartBuilding}
          deleteItem={this.deleteItem}
          ChangeText={this.ChangeText}
        />
        {/* if Confirmed, Remove everything but the questions. Else go to confirmed */}
      </div>);
  }
}

export default App;
