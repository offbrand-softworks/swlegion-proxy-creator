import React from 'react';
import './CommandCardRenderer.css'
import { connect } from 'react-redux';
import { saveCommandCardConfig } from "../../../redux/actions/commandCardActions";
import { Container, Col, Row } from 'react-bootstrap';
import onePip from '../../../assets/images/command/1pip.png';
import twoPip from '../../../assets/images/command/2pip.png';
import commanderTemplate from '../../../assets/images/command/commanderTemplate.png';

class CommandCardRenderer extends React.Component{
  constructor(props){
    super(props)
  }
  //This will run when our config state is updated from the editor.
  componentWillReceiveProps(nextProps){
    console.log(nextProps.config);
  }
  render(){
    return (
      <Container>
        <Row className="headerRow">
          <Col xs="12">Command Card Renderer</Col>
        </Row>
        <Row className="contentRow">
          <Col xs="12">
            <div className="cardRender">
              <img className="template" id="commanderTemplate" src={commanderTemplate} alt="commanderTemplate"/>
              <div className="cardImageContainer">
                <img className="cardImage" id="cardImage" src="https://cdn3.movieweb.com/i/article/IHAig79xMJGx985W8gFYok3AkP14or/738:50/Last-Jedi-Darth-Revan-Official-Star-Wars-Canon.jpg" alt="revan"/>
              </div>
              <div className="commanderImageContainer">
                <img className="commanderImage" src="https://media.tenor.com/images/8b6056754067f72ea2bb781fa979fcce/tenor.png" alt="revanagain"/>
              </div>
              <div className="commanderNameContainer">
                <p className="commanderNameText">Darth Revan</p>
              </div>
              <img className="pipValue" id="image" src={twoPip} alt="pipValue"/>
              <div className="cardTitleContainer">
                <p className="cardTitleText">New Ways To Motivate Them</p>
              </div>
              <div className="cardOrdersContainer">
                <p className="cardOrdersText">2 Troopers</p>
              </div>
              <div className="cardFlavorContainer">
                <p className="cardFlavorText">When a friendly non-Darth Revan trooper unit with a faceup order token activates, it may suffer 1 wound to perform 1 free action.</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  config: state.commandCardConfig.item
});
export default connect(mapStateToProps, {saveCommandCardConfig})(CommandCardRenderer);
