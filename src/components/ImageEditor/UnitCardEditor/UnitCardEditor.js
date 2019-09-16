import React from 'react';
import { connect } from 'react-redux';
import { saveUnitCardConfig } from "../../../redux/actions/unitCardActions";
import { Container, Col, Row, Form, FormCheck } from 'react-bootstrap'
import './UnitCardEditor.css';

class UnitCardEditor extends React.Component {
  constructor(props){
    super(props);
    this.nameInput = React.createRef();
    this.rebelRadio = React.createRef();
    this.empireRadio = React.createRef();
    this.republicRadio = React.createRef();
    this.separatistRadio = React.createRef();
    this.whiteDefDieRadio = React.createRef();
    this.redDefDieRadio = React.createRef();
    this.speedOneRadio = React.createRef();
    this.speedTwoRadio = React.createRef();
    this.speedThreeRadio = React.createRef();
    this.nameInput = React.createRef();
    this.costInput = React.createRef();
    this.typeInput = React.createRef();
    this.rankInput = React.createRef();
    this.modelCountInput = React.createRef();
    this.upgradeSlotsInput = React.createRef();

    this.state = {
      Faction: "",
      Name: "",
      Cost: "",
      Type: "",
      Rank: "",
      ModelCount: "",
      UpgradeSlots: "",
      DefDie: "",
      Speed: 0
    };

  }

  componentDidUpdate(){
    this.saveUnitCardConfig();
  }

  saveUnitCardConfig(){
    this.props.saveUnitCardConfig(this.state);//Dispatches updated editor configuration to redux state;
  }

  _selectFactionType(factionType, inputRef){
    if(inputRef.current.value === 'on' && this.state.Faction !== factionType){
      this.setState({Faction: factionType});
    } else {
      this.setState({Faction: "Rebel"});
    }
  }

  _selectDefenseDie(defenseDieType, inputRef){
    if(inputRef.current.value === 'on' && this.state.DefDie !== defenseDieType){
      this.setState({DefDie: defenseDieType});
    } else {
      this.setState({DefDie: "White"});
    }
  }

  _selectSpeed(speed, inputRef){
    if(inputRef.current.value === 'on' && this.state.DefDie !== speed){
      this.setState({Speed: speed});
    } else {
      this.setState({Speed: 1});
    }
  }

  render() {
    return(
      <Container className="editorFormContainer">
        <Col xs="12">
          <Form>
            <Form.Group>
              <Form.Label className="pipgroup-label">Select a Faction Type:</Form.Label>
              <Form.Check inline type="radio" label="Rebel" ref={this.rebelRadio} checked={this.state.Faction === "Rebel"} onChange={() => this._selectFactionType("Rebel", this.rebelRadio)}/>
              <Form.Check inline type="radio" label="Empire" ref={this.empireRadio} checked={this.state.Faction === "Empire"} onChange={() => this._selectFactionType("Empire", this.empireRadio)}/>
              <Form.Check inline type="radio" label="Republic" ref={this.republicRadio} checked={this.state.Faction === "Republic"} onChange={() => this._selectFactionType("Republic", this.republicRadio)}/>
              <Form.Check inline type="radio" label="Separatist" ref={this.separatistRadio} checked={this.state.Faction === "Separatist"} onChange={() => this._selectFactionType("Separatist", this.separatistRadio)}/>
            </Form.Group>
            <Form.Group>
              <Form.Label className="pipgroup-label">Defense Die:</Form.Label>
              <Form.Check inline type="radio" label="White" ref={this.whiteDefDieRadio} checked={this.state.DefDie === "White"} onChange={() => this._selectDefenseDie("White", this.whiteDefDieRadio)}/>
              <Form.Check inline type="radio" label="Red" ref={this.redDefDieRadio} checked={this.state.DefDie === "Red"} onChange={() => this._selectDefenseDie("Red", this.redDefDieRadio)}/>
            </Form.Group>
            <Form.Group>
              <Form.Label className="pipgroup-label">Speed:</Form.Label>
              <Form.Check inline type="radio" label="1" ref={this.speedOneRadio} checked={this.state.Speed === 1} onChange={() => this._selectSpeed(1, this.speedOneRadio)}/>
              <Form.Check inline type="radio" label="2" ref={this.speedTwoRadio} checked={this.state.Speed === 2} onChange={() => this._selectSpeed(2, this.speedTwoRadio)}/>
              <Form.Check inline type="radio" label="3" ref={this.speedThreeRadio} checked={this.state.Speed === 3} onChange={() => this._selectSpeed(3, this.speedThreeRadio)}/>
            </Form.Group>
            <Form.Group>
              <Form.Label>Unit Name</Form.Label>
              <Form.Control type="text" placeholder="Enter the name of the unit" ref={this.nameInput} onChange={() => this.setState({Name: this.nameInput.current.value})}/>
            </Form.Group>
            <Form.Group>
              <Form.Label>Unit Cost</Form.Label>
              <Form.Control type="text" placeholder="Cost of Unit" ref={this.costInput} onChange={() => this.setState({Cost: this.costInput.current.value})}/>
            </Form.Group>
            <Form.Group>
              <Form.Label>Unit Type</Form.Label>
              <Form.Control type="text" placeholder="Type of Unit" ref={this.typeInput} onChange={() => this.setState({Type: this.typeInput.current.value})}/>
            </Form.Group>
            <Form.Group>
              <Form.Label>Unit Rank</Form.Label>
              <Form.Control type="text" placeholder="Rank of Unit" ref={this.rankInput} onChange={() => this.setState({Rank: this.rankInput.current.value})}/>
            </Form.Group>
            <Form.Group>
              <Form.Label>Upgrade Slots</Form.Label>
              <Form.Control type="text" placeholder="Upgrade Slots of Unit" ref={this.upgradeSlotsInput} onChange={() => this.setState({UpgradeSlots: this.upgradeSlotsInput.current.value})}/>
            </Form.Group>
            <Form.Group>
              <Form.Label>Unit Base Model Count</Form.Label>
              <Form.Control type="text" placeholder="Base Model Count of Unit" ref={this.modelCountInput} onChange={() => this.setState({ModelCount: this.modelCountInput.current.value})}/>
            </Form.Group>

            {/* <Form.Group hidden={!this.state.isCommander}>
              <Form.Label>Commander Name</Form.Label>
              <Form.Control type="text" placeholder="Enter commander name" ref={this.nameInput} onChange={() => this.setState({CommanderName: this.nameInput.current.value})}/>
            </Form.Group>
            <Form.Group hidden={!this.state.isCommander}>
              <Form.Label>Commander Image</Form.Label>
              <Form.Control type="text" placeholder="Link to commander image" ref={this.commanderImageInput} onChange={() => this.setState({CommanderImage: this.commanderImageInput.current.value})}/>
            </Form.Group>
            <Form.Group>
              <Form.Label>Orders</Form.Label>
              <Form.Control type="text" placeholder="Enter the card's orders" ref={this.ordersInput} onChange={() => this.setState({Orders: this.ordersInput.current.value})}/>
            </Form.Group>
            <Form.Group>
              <Form.Label>Flavor Text</Form.Label>
              <Form.Control as="textarea" rows="3" placeholder="Enter your card's flavor text" ref={this.abilityTextInput} onChange={() => this.setState({AbilityText: this.abilityTextInput.current.value})}/>
            </Form.Group> */}
          </Form>
        </Col>
      </Container>
    );
  }
}

export default connect(null, { saveUnitCardConfig })(UnitCardEditor);