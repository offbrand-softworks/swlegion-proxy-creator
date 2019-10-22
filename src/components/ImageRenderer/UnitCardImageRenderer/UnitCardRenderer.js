import React from 'react';
import './UnitCardRenderer.css'
import { connect } from 'react-redux';
import { saveUnitCardConfig } from "../../../redux/actions/unitCardActions";
import { Container, Col, Row } from 'react-bootstrap';
import rebelTemplate from '../../../assets/images/unit/rebel.png'
import empireTemplate from '../../../assets/images/unit/imperial.png'

class UnitCardRenderer extends React.Component{
  constructor(props){
    super(props);
    this.factionMap = {
      'Rebel': rebelTemplate,
      'Empire': empireTemplate
    }
    this.defenseDieMap = {
      'White': 'WhiteDefenseDieImage',
      'Red': 'RedDefenseDieImage'
    }
    this.rankMap = {
      'Commander': 5,
      'Operative': 'b',
      'Support': 8,
      'Special Forces': 7,
      'Heavy': 9,
      'Corps': 6
    }
  }

  renderUnitCardTemplate(){
    return <img className="unitCardTemplate" id="image" src={this.factionMap[this.props.config.UnitFaction]} alt="Faction Template"/>
  }

  renderDefenseDie(){
    return <img className="defenseDieValue" id="image" src={this.defenseDieMap[this.props.config.UnitDefDie]} alt="Defense Die"/>
  }

  // TODO: get the rest of these rendering properly with CSS additions
  renderCardInfo(){
    return (
      <div>
        <div className="unitNameContainer">
          <p className="unitNameText">{this.props.config.UnitName}</p>
        </div>
        <div className="unitCostContainer">
          <p className="unitCostText">{this.props.config.UnitCost}</p>
        </div>
        <div className="unitTypeContainer">
          <p className="unitTypeText">{this.props.config.UnitType}</p>
        </div>
        <div className="unitRankContainer">
          <p className="unitRankText">{this.rankMap[this.props.config.UnitRank]}</p>
        </div>
        {/* <div className="unitImageContainer">
          <img className="unitImage" src={this.props.config.UnitImage} alt=""/>
        </div>
        <div className="unitModelCountContainer">
          <p className="unitModelCountText">{this.props.config.UnitModelCount}</p>
        </div>
        <div className="unitUpgradeSlotsCountContainer">
          <p className="unitUpgradeSlotsCountText">{this.props.config.UnitUpgradeSlots}</p>
        </div>
        <div className="unitSpeedContainer">
          <p className="unitSpeedText">{this.props.config.UnitSpeed}</p>
        </div>
        <div className="unitDefDieContainer">
          <p className="unitDefDieText">{this.props.config.UnitDefDie}</p>
        </div>
        <div className="unitAbilityTextContainer">
          <p className="unitAbilityTextText">{this.props.config.UnitAbilityText}</p>
        </div> */}
      </div>
    )
  }

  render(){
    return (
      <Container>
        <Row className="headerRow">
          <Col xs="12">Unit Card</Col>
        </Row>
        <Row className="contentRow">

          <Col xs="12">
            <div className="unitCardRender">
              {this.renderUnitCardTemplate()}
              {this.renderCardInfo()}
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  config: state.unitCardConfig.item
});
export default connect(mapStateToProps, {saveUnitCardConfig})(UnitCardRenderer);