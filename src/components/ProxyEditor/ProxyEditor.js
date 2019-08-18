import React from 'react';
import ImageEditor from '../ImageEditor/ImageEditor'
import '../App/App.css';
import './ProxyEditor.css';
import { Container, Row, Col } from 'react-bootstrap';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import ImageRenderer from '../ImageRenderer/ImageRenderer';

class ProxyEditor extends React.Component {
  constructor(props){
    super(props);
    this.state = {cardType: ''}
  }

  render(){
    return(
      <div className="App-content">
        <Container className="container editor-container">
          <Row className="header-row">
            <h1 className="proxy-editor-header">Proxy Editor</h1>
          </Row>
          <Row className="content-row">
            <Col className="xs=4 card-renderer-container">
              <Row className="card-type-dropdown-row">
                <DropdownButton title="Proxy Type" >
                  <Dropdown.Item onSelect={() => this.selectCommandCard()}>Command</Dropdown.Item>
                  <Dropdown.Item onSelect={() => this.selectCard()}>Other</Dropdown.Item>
                </DropdownButton>
              </Row>
              <Row className="renderer">
                <ImageRenderer cardType={this.state.cardType}/>
              </Row>
            </Col>
            <Col className="xs=8 editor-fields">
                <ImageEditor cardType={this.state.cardType}/>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }

  selectCommandCard(){
    this.setState({cardType: 'COMMAND'});
  }

  selectCard(){//TODO: This is placeholder
    this.setState({cardType: 'OTHER'});
  }
}

export default ProxyEditor;