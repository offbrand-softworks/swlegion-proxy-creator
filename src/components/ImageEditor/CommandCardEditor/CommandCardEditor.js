import React from 'react';
import './CommandCardEditor.css';

class CommandCardEditor extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isCommander: false,
      CommanderName: "",
      PipValue: "",
      CardTitle: "",
      Orders: "",
      AbilityText: ""
    };
    this.handleInputChange = this.handleInputChange.bind(this);

  }
  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    return(
      <div className="col-xs-12">
        <form>
          <div className="row">
            <label>
              Commander Card:
              <input
                name="isCommander"
                type="checkbox"
                checked={this.state.isCommander}
                onChange={this.handleInputChange} />
            </label>
          </div>
          <div className="row">
            <label hidden={!this.state.isCommander}>
              Commander Name:
              <input
                name="CommanderName"
                type="text"
                value={this.state.CommanderName}
                onChange={this.handleInputChange} />
            </label>
          </div>
          <div className="row">
            {/* <label hidden={!this.state.isCommander}>
              Commander Image:
              <input
                name="CommanderImage"
                type=""
                value={this.state.CommanderImage}
                onChange={this.handleInputChange} />
            </label> */}
          </div>
          <div className="row">
            <label>
              Pip Value (0-4):
              <input
                name="PipValue"
                type="number"
                min="0"
                max="4"
                value={this.state.PipValue}
                onChange={this.handleInputChange} />
            </label>
          </div>
          <div className="row">
            <label>
              Card Title:
              <input
                name="CardTitle"
                type="text"
                value={this.state.CardTitle}
                onChange={this.handleInputChange} />
            </label>
          </div>
          <div className="row">
            <label>
              Orders:
              <input
                name="Orders"
                type="text"
                value={this.state.Orders}
                onChange={this.handleInputChange} />
            </label>
          </div>
          <div className="row">
            <label>
              Ability/Flavor Text:
              <input
                name="AbilityText"
                type="text"
                value={this.state.AbilityText}
                onChange={this.handleInputChange} />
            </label>
          </div>
        </form>
      </div>
    );
  }
}

export default CommandCardEditor;