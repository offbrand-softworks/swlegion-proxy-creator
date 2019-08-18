import React from 'react';
import ImageEditor from '../ImageEditor/ImageEditor'
import '../App/App.css';
import './ProxyEditor.css';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

class ProxyEditor extends React.Component {
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
                  <Dropdown.Item onSelect={this.onCardTypeSelect}>Command</Dropdown.Item>
                </DropdownButton>
              </div>
              <div className="row renderer">
                {/*<ImageRenderer></ImageRenderer>*/}
              </div>
            </div>
            <div className="col-xs-12 editor-fields">
                <ImageEditor />
            </div>
          </div>
        </div>
      </div>
    )
  }

  onCardTypeSelect(){
    console.log("card type dropdown selected")
  }
}

export default ProxyEditor;