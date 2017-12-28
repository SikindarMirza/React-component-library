import React, {Component} from 'react';
import ReactDOM from 'react-dom';
// import styles from '../../css/app.css';

export default class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
      value: 'Cake'
    };
  }
   

  expand() {
    this.setState({ expanded: true });
  }
    
  collapse() {
    this.setState({ expanded: false });
  }
    
  handleItemClick(e) {
    this.setState({
      expanded: false,
      value: e.target.innerText
    });
  }
    
  handleTriggerClick() {
    this.setState({ expanded: !this.state.expanded });
  }
    
    render() {
      let dropdown = undefined;
      if (this.state.expanded) {
          dropdown = (
              <div className="content">
              {
                  this.props.options.map((item, i) => {
                      return <div key = {i} onClick={(e) => { this.handleItemClick(e); }} className="item">{item}</div>;
                  })
              }
              </div>
          );
      }
        
        return (
            <div className={`dropdown ${this.state.expanded ? 'active' : ''}`}
                tabIndex="0"
                onBlur={() => { this.collapse(); }}>
                <div className="trigger" onClick={() => { this.handleTriggerClick(); }}>
                    {this.state.value}
                </div>
                {dropdown}
            </div>
        );
    }
}

ReactDOM.render(<Dropdown options={['Strawberry Cream', 'Chocolate Flakes', 'Marshmallow Sprinkles']} />, document.getElementById('app'));
