import React from 'react';
import { connect } from 'react-redux';
import { saveUnitCardConfig } from "../../../redux/actions/unitCardActions";
import { Container, Col, Row, Form, FormCheck } from 'react-bootstrap'
import './UnitCardEditor.css';

class UnitCardEditor extends React.Component {
  constructor(props){
    super(props);
    this.nameInput = React.createRef();
    this.costInput = React.createRef();
    this.typeInput = React.createRef();
    this.modelCountInput = React.createRef();
    this.upgradeSlotsInput = React.createRef();
    this.abilityTextInput = React.createRef();

    // Faction Radio Buttons
    this.rebelRadio = React.createRef();
    this.empireRadio = React.createRef();
    this.republicRadio = React.createRef();
    this.separatistRadio = React.createRef();

    // Defense Die Radio Buttons
    this.whiteDefDieRadio = React.createRef();
    this.redDefDieRadio = React.createRef();
    // Speed Radio Buttons
    this.speedOneRadio = React.createRef();
    this.speedTwoRadio = React.createRef();
    this.speedThreeRadio = React.createRef();

    // Rank Radio Buttons
    this.corpsRadio = React.createRef();
    this.supportRadio = React.createRef();
    this.heavyRadio = React.createRef();
    this.operativeRadio = React.createRef();
    this.specialForcesRadio = React.createRef();
    this.commanderRadio = React.createRef();

    this.state = {
      UnitFaction: "",
      UnitName: "",
      UnitCost: "",
      UnitType: "",
      UnitRank: "",
      UnitModelCount: "",
      UnitUpgradeSlots: "",
      UnitDefDie: "",
      UnitSpeed: 0,
      UnitAbilityText: ""
    };

  }

  componentDidUpdate(){
    this.saveUnitCardConfig();
  }

  saveUnitCardConfig(){
    this.props.saveUnitCardConfig(this.state);//Dispatches updated editor configuration to redux state;
  }

  _selectFactionType(factionType, inputRef){
    if(inputRef.current.value === 'on' && this.state.UnitFaction !== factionType){
      this.setState({UnitFaction: factionType});
    } else {
      this.setState({UnitFaction: "Rebel"});
    }
  }

  _selectDefenseDie(defenseDieType, inputRef){
    if(inputRef.current.value === 'on' && this.state.UnitDefDie !== defenseDieType){
      this.setState({UnitDefDie: defenseDieType});
    } else {
      this.setState({UnitDefDie: "White"});
    }
  }

  _selectSpeed(speed, inputRef){
    if(inputRef.current.value === 'on' && this.state.UnitSpeed !== speed){
      this.setState({UnitSpeed: speed});
    } else {
      this.setState({UnitSpeed: 1});
    }
  }

  _selectRank(rank, inputRef){
    if(inputRef.current.value === 'on' && this.state.UnitRank !== rank){
      this.setState({UnitRank: rank});
    } else {
      this.setState({UnitRank: "Corps"})
    }
  }

  render() {
    return(
      <Container className="editorFormContainer">
        <Col xs="12">
          <Form>
            <Form.Group>
              <Form.Label className="pipgroup-label">Select a Faction Type:</Form.Label>
              <Form.Check inline type="radio" label="Rebel" ref={this.rebelRadio} checked={this.state.UnitFaction === "Rebel"} onChange={() => this._selectFactionType("Rebel", this.rebelRadio)}/>
              <Form.Check inline type="radio" label="Empire" ref={this.empireRadio} checked={this.state.UnitFaction === "Empire"} onChange={() => this._selectFactionType("Empire", this.empireRadio)}/>
              <Form.Check inline type="radio" label="Republic" ref={this.republicRadio} checked={this.state.UnitFaction === "Republic"} onChange={() => this._selectFactionType("Republic", this.republicRadio)}/>
              <Form.Check inline type="radio" label="Separatist" ref={this.separatistRadio} checked={this.state.UnitFaction === "Separatist"} onChange={() => this._selectFactionType("Separatist", this.separatistRadio)}/>
            </Form.Group>
            <Form.Group>
              <Form.Label className="pipgroup-label">Defense Die:</Form.Label>
              <Form.Check inline type="radio" label="White" ref={this.whiteDefDieRadio} checked={this.state.UnitDefDie === "White"} onChange={() => this._selectDefenseDie("White", this.whiteDefDieRadio)}/>
              <Form.Check inline type="radio" label="Red" ref={this.redDefDieRadio} checked={this.state.UnitDefDie === "Red"} onChange={() => this._selectDefenseDie("Red", this.redDefDieRadio)}/>
            </Form.Group>
            <Form.Group>
              <Form.Label className="pipgroup-label">Speed:</Form.Label>
              <Form.Check inline type="radio" label="1" ref={this.speedOneRadio} checked={this.state.UnitSpeed === 1} onChange={() => this._selectSpeed(1, this.speedOneRadio)}/>
              <Form.Check inline type="radio" label="2" ref={this.speedTwoRadio} checked={this.state.UnitSpeed === 2} onChange={() => this._selectSpeed(2, this.speedTwoRadio)}/>
              <Form.Check inline type="radio" label="3" ref={this.speedThreeRadio} checked={this.state.UnitSpeed === 3} onChange={() => this._selectSpeed(3, this.speedThreeRadio)}/>
            </Form.Group>
            <Form.Group>
              <Form.Label className="pipgroup-label">Rank:</Form.Label>
              <Form.Check inline type="radio" label="Commander" ref={this.commanderRadio} checked={this.state.UnitRank === "Commander"} onChange={() => this._selectRank("Commander", this.commanderRadio)}/>
              <Form.Check inline type="radio" label="Corps" ref={this.corpsRadio} checked={this.state.UnitRank === "Corps"} onChange={() => this._selectRank("Corps", this.corpsRadio)}/>
              <Form.Check inline type="radio" label="Heavy" ref={this.heavyRadio} checked={this.state.UnitRank === "Heavy"} onChange={() => this._selectRank("Heavy", this.heavyRadio)}/>
              <Form.Check inline type="radio" label="Operative" ref={this.operativeRadio} checked={this.state.UnitRank === "Operative"} onChange={() => this._selectRank("Operative", this.operativeRadio)}/>
              <Form.Check inline type="radio" label="Special Forces" ref={this.specialForcesRadio} checked={this.state.UnitRank === "Special Forces"} onChange={() => this._selectRank("Special Forces", this.specialForcesRadio)}/>
              <Form.Check inline type="radio" label="Support" ref={this.supportRadio} checked={this.state.UnitRank === "Support"} onChange={() => this._selectRank("Support", this.supportRadio)}/>
            </Form.Group>
            <Form.Group>
              <Form.Label>Unit Name</Form.Label>
              <Form.Control type="text" placeholder="Enter the name of the unit" ref={this.nameInput} onChange={() => this.setState({UnitName: this.nameInput.current.value})}/>
            </Form.Group>
            <Form.Group>
              <Form.Label>Unit Cost</Form.Label>
              <Form.Control type="text" placeholder="Cost of Unit" ref={this.costInput} onChange={() => this.setState({UnitCost: this.costInput.current.value})}/>
            </Form.Group>
            <Form.Group>
              <Form.Label>Unit Type</Form.Label>
              <Form.Control type="text" placeholder="Type of Unit" ref={this.typeInput} onChange={() => this.setState({UnitType: this.typeInput.current.value})}/>
            </Form.Group>
            <Form.Group>
              <Form.Label>Upgrade Slots</Form.Label>
              <Form.Control type="text" placeholder="Upgrade Slots of Unit" ref={this.upgradeSlotsInput} onChange={() => this.setState({UnitUpgradeSlots: this.upgradeSlotsInput.current.value})}/>
            </Form.Group>
            <Form.Group>
              <Form.Label>Unit Base Model Count</Form.Label>
              <Form.Control type="text" placeholder="Base Model Count of Unit" ref={this.modelCountInput} onChange={() => this.setState({UnitModelCount: this.modelCountInput.current.value})}/>
            </Form.Group>
            <Form.Group>
              <Form.Label>Ability Text</Form.Label>
              <Form.Control as="textarea" rows="3" placeholder="Enter your card's flavor text" ref={this.abilityTextInput} onChange={() => this.setState({UnitAbilityText: this.abilityTextInput.current.value})}/>
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
            </Form.Group> */}

          </Form>
        </Col>
      </Container>
    );
  }
}

export default connect(null, { saveUnitCardConfig })(UnitCardEditor);