import React from 'react';
import ReactDOM from 'react-dom';

const Header = ( ) => {
  return (
    <div className='header'>
      <h1 className='title'>REACT COMPONENT LIBRARY</h1>
    </div>
    );
}

ReactDOM.render(<Header />, document.getElementById('header'));
export default Header;
