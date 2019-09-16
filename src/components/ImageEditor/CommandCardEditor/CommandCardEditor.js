import React from 'react';
import { connect } from 'react-redux';
import { saveCommandCardConfig } from "../../../redux/actions/commandCardActions";
import { Container, Col, Row, Form, FormCheck } from 'react-bootstrap'
import './CommandCardEditor.css';

class CommandCardEditor extends React.Component {
  constructor(props){
    super(props);
    this.commanderCheck = React.createRef();
    this.nameInput = React.createRef();
    this.onePipRadio = React.createRef();
    this.twoPipRadio = React.createRef();
    this.threePipRadio = React.createRef();
    this.fourPipRadio = React.createRef();
    this.titleInput = React.createRef();
    this.ordersInput = React.createRef();
    this.abilityTextInput = React.createRef();
    this.commanderImageInput = React.createRef();
    this.cardImageInput = React.createRef();

    this.state = {
      isCommander: false,
      CardImage: "",
      CommanderName: "",
      CommanderImage: "",
      PipValue: 0,
      CardTitle: "",
      Orders: "",
      AbilityText: ""
    };

  }

  handleCheckboxUpdate(){
    if(this.commanderCheck.current.value === 'on' && !this.state.isCommander){
      this.setState({isCommander: true});
    } else {
      this.setState({isCommander: false});
    }
  }

  componentDidUpdate(){
    this.saveCommandCardConfig();
  }

  saveCommandCardConfig(){
    this.props.saveCommandCardConfig(this.state);//Dispatches updated editor configuration to redux state;
  }

  _selectPipValue(integerValue, inputRef){
    if(inputRef.current.value === 'on' && this.state.PipValue !== integerValue){
      this.setState({PipValue: integerValue});
    } else {
      this.setState({PipValue: 0});
    }
  }

  render() {
    return(
      <Container className="editorFormContainer">
        <Col xs="12">
          <Form>
            <Form.Group>
              <Form.Check type="checkbox" label="Commander?" ref={this.commanderCheck} checked={this.state.isCommander} onChange={() => this.handleCheckboxUpdate()}/>
            </Form.Group>
            <Form.Group hidden={!this.state.isCommander}>
              <Form.Label>Commander Name</Form.Label>
              <Form.Control type="text" placeholder="Enter commander name" ref={this.nameInput} onChange={() => this.setState({CommanderName: this.nameInput.current.value})}/>
            </Form.Group>
            <Form.Group hidden={!this.state.isCommander}>
              <Form.Label>Commander Image</Form.Label>
              <Form.Control type="text" placeholder="Link to commander image" ref={this.commanderImageInput} onChange={() => this.setState({CommanderImage: this.commanderImageInput.current.value})}/>
            </Form.Group>
            <Form.Group>
              <Form.Label className="pipgroup-label">Select a Pip Value</Form.Label>
              <Form.Check inline type="radio" label="1" ref={this.onePipRadio} checked={this.state.PipValue === 1} onChange={() => this._selectPipValue(1, this.onePipRadio)}/>
              <Form.Check inline type="radio" label="2" ref={this.twoPipRadio} checked={this.state.PipValue === 2} onChange={() => this._selectPipValue(2, this.twoPipRadio)}/>
              <Form.Check inline type="radio" label="3" ref={this.threePipRadio} checked={this.state.PipValue === 3} onChange={() => this._selectPipValue(3, this.threePipRadio)}/>
              <Form.Check inline type="radio" label="4" ref={this.fourPipRadio} checked={this.state.PipValue === 4} onChange={() => this._selectPipValue(4, this.threePipRadio)}/>
            </Form.Group>
            <Form.Group>
              <Form.Label>Card Title</Form.Label>
              <Form.Control type="text" placeholder="Enter a title for your card" ref={this.titleInput} onChange={() => this.setState({CardTitle: this.titleInput.current.value})}/>
            </Form.Group>
            <Form.Group>
              <Form.Label>Card Image</Form.Label>
              <Form.Control type="text" placeholder="Link to card image" ref={this.cardImageInput} onChange={() => this.setState({CardImage: this.cardImageInput.current.value})}/>
            </Form.Group>
            <Form.Group>
              <Form.Label>Orders</Form.Label>
              <Form.Control type="text" placeholder="Enter the card's orders" ref={this.ordersInput} onChange={() => this.setState({Orders: this.ordersInput.current.value})}/>
            </Form.Group>
            <Form.Group>
              <Form.Label>Flavor Text</Form.Label>
              <Form.Control as="textarea" rows="3" placeholder="Enter your card's flavor text" ref={this.abilityTextInput} onChange={() => this.setState({AbilityText: this.abilityTextInput.current.value})}/>
            </Form.Group>
          </Form>
        </Col>
      </Container>
    );
  }
}

export default connect(null, { saveCommandCardConfig })(CommandCardEditor);
