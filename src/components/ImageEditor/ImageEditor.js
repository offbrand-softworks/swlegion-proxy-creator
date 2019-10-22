import React from 'react';
import CommandCardEditor from './CommandCardEditor/CommandCardEditor';
import UnitCardEditor from './UnitCardEditor/UnitCardEditor';

class ImageEditor extends React.Component {
  render() {
    if(this.props.cardType === 'COMMAND'){
      return <CommandCardEditor/>
    }
    else if(this.props.cardType === 'UNIT'){
      return <UnitCardEditor/>
    }
    else {
      return <div>IMAGE EDITOR: {this.props.cardType}</div>
    }
  }
}

export default ImageEditor