import React, { Component } from 'react';
import '../assets/section4fonts.css';
import { Provider } from 'react-redux';
import store from '../store/store';
import data from '../data.json';
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
        <Provider store={store}>
          <div>
            <h3>Toggle Display</h3>
            <button>Slider</button>
            <button>List</button>
          </div>
          <div>
            <h1>Headline</h1>
            <Views {...data} />
          </div>
        </Provider>
      </div>
    );
  }
}

export default App;
