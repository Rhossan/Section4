import React, { Component } from 'react';
import '../assets/section4fonts.css';
import { Provider } from 'react-redux';
import store from '../store/store';
import Search from './Search';
import Views from './Views';
import Toggle from './Toggle';
import Section4Logo from '../assets/section4Logo.svg';


class App extends Component {

  render() {
    return (
      <div>
        <header>
          <img src={Section4Logo} alt='logo' />
        </header>
        <Provider store={store}>
        <div className='search'>
          <Search />
        </div>
        
         <Toggle />
         <Views /> 
        </Provider>
      </div>
    );
  }
}

export default App;
