import React from 'react';
import CommandCardRenderer from './CommandCardImageRenderer/CommandCardRenderer';

class ImageRenderer extends React.Component{
  constructor(props){
    super(props);
    console.log(props);
  }
  render(){

    if(this.props.cardType === 'COMMAND'){
      return <CommandCardRenderer/>
    } else {
      return <div>IMAGE RENDERER: {this.props.cardType}</div>
    }
  }
}

export default ImageRenderer;