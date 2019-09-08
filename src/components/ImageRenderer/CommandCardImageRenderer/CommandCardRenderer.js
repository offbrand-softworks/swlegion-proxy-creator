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
import commandTemplate from '../../../assets/images/command/commandTemplate.png';

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
      :  <img className="template" id="commandTemplate" src={commandTemplate} alt="commandTemplate" />;
  }

  renderSelectiveCardInfo(){
    if(this.props.config.isCommander){
      return (
        <div>
          <div className="commanderImageContainer">
            <img className="commanderImage" src={this.props.config.CommanderImage} alt=""/>
          </div>
          <div className="commanderNameContainer">
            <p className="commanderNameText">{this.props.config.CommanderName}</p>
          </div>
          <div className="commanderCardImageContainer">
            <img className="cardImage" id="cardImage" src={this.props.config.CardImage} alt=""/>
          </div>
          <div className="commanderCardTitleContainer">
            <p className="cardTitleText">{this.props.config.CardTitle}</p>
          </div>
          <div className="commanderCardOrdersContainer">
            <p className="cardOrdersText">{this.props.config.Orders}</p>
          </div>
          <div className="commanderCardFlavorContainer">
            <p className="cardFlavorText">{this.props.config.AbilityText}</p>
          </div>
        </div>
      )
    }
    else{
      return (
        <div>
          <div className="cardImageContainer">
            <img className="cardImage" id="cardImage" src={this.props.config.CardImage} alt=""/>
          </div>
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
              {this.renderSelectiveCardInfo()}
              {this.renderPipValue()}
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
