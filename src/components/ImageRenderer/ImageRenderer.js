import React from 'react';
import CommandCardRenderer from './CommandCardImageRenderer/CommandCardRenderer';
import ReactToPrint from 'react-to-print';

class ImageRenderer extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div>
        {this.getCardRenderer()}
      </div>
    )
  }

  getCardRenderer(){
    if(this.props.cardType === 'COMMAND'){
      return <CommandCardRenderer/>
    } else {
      return <div>IMAGE RENDERER: {this.props.cardType}</div>
    }
  }
}
class PrintableImageRenderer extends React.Component{
  render() {
    return (
      <div>
        <ReactToPrint
          trigger={() => <a href="#">Print this out!</a>}
          content={() => this.componentRef}
        />
        <ImageRenderer ref={el => (this.componentRef = el)} cardType={this.props.cardType} />
      </div>
    );
  }
}
export default PrintableImageRenderer;