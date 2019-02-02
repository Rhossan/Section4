import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import './assets/section4fonts.css';
import { Provider } from 'react-redux';
import store from './store';
import data from './data.json';
import Search from './Search';
import Views from './Views';


class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      data: null,
      sliderView: true,
      listView: false,
      searchParams: ''
    }
    this.updateSearchParams = this.updateSearchParams.bind(this);
  }

  updateSearchParams(event){
    this.setState({ searchParams: event.target.value });
  }
  componentDidMount(){
    //fetch data and add to state 
    // fetch('https://api.section4.com')
    //   .then(res => res.json())
    //   .then(data => this.setState({ data }));
    // console.log('data',data);
    this.setState({ data })

  }
  render() {
    const {searchParams} = this.state;
    return (
      <div>
        <header>
          <Search searchParams={searchParams} updateSearchParams={this.updateSearchParams}/>
        </header>
        <h1 className='tk-benton-sans'>hi there</h1>
        {/* <Provider value={this.state}>
        </Provider> */}
        <Views {...data} />
      </div>
    );
  }
}

export default App;
