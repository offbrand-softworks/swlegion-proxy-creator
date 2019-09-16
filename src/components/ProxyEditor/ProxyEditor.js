import React from 'react';
import ImageEditor from '../ImageEditor/ImageEditor'
import '../App/App.css';
import './ProxyEditor.css';
import { Container, Row, Col } from 'react-bootstrap';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import PrintableImageRenderer from '../ImageRenderer/ImageRenderer';

class ProxyEditor extends React.Component {
  constructor(props){
    super(props);
    this.state = {cardType: ''}
  }

  render(){
    return(
      <Container className="container editor-container">
        <Row className="header-row">
          <h1 className="proxy-editor-header">Proxy Editor</h1>
        </Row>
        <Row className="content-row">
          <Col xs="4" className="card-renderer-container">
            <Row className="card-type-dropdown-row">
              <DropdownButton title="Proxy Type" >
                <Dropdown.Item onSelect={() => this.selectCommandCard()}>Command</Dropdown.Item>
                <Dropdown.Item onSelect={() => this.selectUnitCard()}>Unit</Dropdown.Item>
              </DropdownButton>
            </Row>
            <Row className="renderer">
              <PrintableImageRenderer cardType={this.state.cardType}/>
            </Row>
          </Col>
          <Col xs="8" className="editor-fields">
              <ImageEditor cardType={this.state.cardType}/>
          </Col>
        </Row>
      </Container>
    )
  }

  selectCommandCard(){
    this.setState({cardType: 'COMMAND'});
  }

  selectUnitCard(){
    this.setState({cardType: 'UNIT'});
  }

  selectCard(){//TODO: This is placeholder
    this.setState({cardType: 'OTHER'});
  }
}

export default ProxyEditor;