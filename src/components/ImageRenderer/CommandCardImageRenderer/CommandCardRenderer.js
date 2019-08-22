import React from 'react';
import './CommandCardRenderer.css'
import { connect } from 'react-redux';
import { saveCommandCardConfig } from "../../../redux/actions/commandCardActions";
import { Container, Col, Row } from 'react-bootstrap';
import onePip from '../../../assets/images/command/1pip.png';
import twoPip from '../../../assets/images/command/2pip.png';
import threePip from '../../../assets/images/command/3pip.png';
import fourPip from '../../../assets/images/command/4pip.png';
import commanderTemplate from '../../../assets/images/command/commanderTemplate.png';

class CommandCardRenderer extends React.Component{
  constructor(props){
    super(props);
    this.pipValueMap = {
      1: onePip,
      2: twoPip,
      3: threePip,
      4: fourPip
    }
  }

  getCommandCardTemplate(){
   return this.props.config.isCommander
      ? <img className="template" id="commanderTemplate" src={commanderTemplate} alt="commanderTemplate"/>
      :  <div className="emptyContents">No Card Template selected.</div>;
  }

  renderCommanderNameIfApplicable(){
    if(this.props.config.isCommander){
      return (
        <div className="commanderNameContainer">
          <p className="commanderNameText">{this.props.config.CommanderName}</p>
        </div>
      )
    }
  }

  renderPipValue(){
    return <img className="pipValue" id="image" src={this.pipValueMap[this.props.config.PipValue]}/>
  }

  render(){
    return (
      <Container>
        <Row className="headerRow">
          <Col xs="12">Command Card</Col>
        </Row>
        <Row className="contentRow">

          <Col xs="12">
            <div className="cardRender">
              {this.getCommandCardTemplate()}
              <div className="cardImageContainer">
                <img className="cardImage" id="cardImage" src="https://cdn3.movieweb.com/i/article/IHAig79xMJGx985W8gFYok3AkP14or/738:50/Last-Jedi-Darth-Revan-Official-Star-Wars-Canon.jpg" alt="revan"/>
              </div>
              <div className="commanderImageContainer">
                <img className="commanderImage" src="https://media.tenor.com/images/8b6056754067f72ea2bb781fa979fcce/tenor.png" alt="revanagain"/>
              </div>
              {this.renderCommanderNameIfApplicable()}
              {this.renderPipValue()}
              <div className="cardTitleContainer">
                <p className="cardTitleText">{this.props.config.CardTitle}</p>
              </div>
              <div className="cardOrdersContainer">
                <p className="cardOrdersText">{this.props.config.Orders}</p>
              </div>
              <div className="cardFlavorContainer">
                <p className="cardFlavorText">{this.props.config.AbilityText}</p>
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
