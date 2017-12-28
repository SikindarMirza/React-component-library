import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Dropdown from './Components/ui-components/Dropdown';
import css from './css/app.scss'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.onResize = this.onResize.bind(this   )
  }
  render() {
    return(
      <div>
        <Dropdown />
      </div>
    );
  }
}

export default App
