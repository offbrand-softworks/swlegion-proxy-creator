import React from 'react';
import { connect } from 'react-redux';
import { saveCommandCardConfig } from "../../../redux/actions/commandCardActions";
import { Col } from 'react-bootstrap';

class CommandCardRenderer extends React.Component{
  constructor(props){
    super(props)
  }
  //This will run when our config state is updated from the editor.
  componentWillReceiveProps(nextProps){
    console.log(nextProps.config);
  }
  render(){
    return <Col xs="12">Command Card Renderer</Col>
  }
}

const mapStateToProps = state => ({
  config: state.commandCardConfig.item
});
export default connect(mapStateToProps, {saveCommandCardConfig})(CommandCardRenderer);
