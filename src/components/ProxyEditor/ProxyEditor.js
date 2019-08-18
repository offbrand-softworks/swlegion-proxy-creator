import React from 'react';
import '../App/App.css';
import './ProxyEditor.css';
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
        <div className="container editor-container">
          <div className="row header-row">
            <h1 className="proxy-editor-header">Proxy Editor</h1>
          </div>
          <div className="content-row">
            <div className="col-xs-4 card-renderer-container">
              <div className="row card-type-dropdown-row">
                <DropdownButton title="Proxy Type" >
                  <Dropdown.Item onSelect={() => this.selectCommandCard()}>Command</Dropdown.Item>
                  <Dropdown.Item onSelect={() => this.selectCard()}>Other</Dropdown.Item>
                </DropdownButton>
              </div>
              <div className="row renderer">
                <ImageRenderer cardType={this.state.cardType}/>
              </div>
            </div>
            <div className="col-xs-12 editor-fields">
                {/*//Conditionally Rendered based off of select dropdown*/}
                {/*//<CommandEditorFields></CommandEditorFields>*/}
                {/*//<SomeOtherCardTypeFields></SomeOtherCardTypeFields>*/}
            </div>
          </div>
        </div>
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