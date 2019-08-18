import React from 'react';
import { connect } from 'react-redux';
import { saveCommandCardConfig } from "../../../redux/actions/commandCardActions";

class CommandCardRenderer extends React.Component{
  constructor(props){
    super(props)
  }
  //This will run when our config state is updated from the editor.
  componentWillReceiveProps(nextProps){
    console.log(nextProps.config);
  }
  render(){
    return <div col-xs-4>Command Card Renderer</div>
  }
}

const mapStateToProps = state => ({
  config: state.commandCardConfig.item
});
export default connect(mapStateToProps, {saveCommandCardConfig})(CommandCardRenderer);