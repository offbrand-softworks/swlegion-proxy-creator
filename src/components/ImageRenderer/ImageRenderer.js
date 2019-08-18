import React from 'react';

class ImageRenderer extends React.Component{
  constructor(props){
    super(props);
    console.log(props);
  }
  render(){
    return <div>IMAGE RENDERER: {this.props.cardType}</div>
  }
}

export default ImageRenderer;