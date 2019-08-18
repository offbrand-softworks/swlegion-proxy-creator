import React from 'react';
import CommandCardEditor from './CommandCardEditor/CommandCardEditor';

class ImageEditor extends React.Component {
  render() {
    if(this.props.cardType === 'COMMAND'){
      return <CommandCardEditor/>
    } else {
      return <div>IMAGE EDITOR: {this.props.cardType}</div>
    }
  }
}

export default ImageEditor