import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import css from './css/app.scss'
import Dropdown from './Components/ui-components/Dropdown';
import Header from './Components/ui-components/Header';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.onResize = this.onResize.bind(this   )
  }
  render() {
    return(
      <div>
        <Dropdown />
        <Header />
      </div>
    );
  }
}

export default App
