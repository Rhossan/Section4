import React, { Component } from 'react';
import '../assets/section4fonts.css';
import { Provider } from 'react-redux';
import store from '../store/store';
import data from '../data.json';
import Search from './Search';
import Views from './Views';
import Carousel from './Carousal';
import Section4Logo from '../assets/section4Logo.svg';


class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      data: null,
      filteredData: null,
      sliderView: true,
      listView: false,
      searchParams: ''
    }
    this.updateSearchParams = this.updateSearchParams.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  toggle(button){
    const {sliderView, listView} = this.state;
    switch (button) {
      case 'slider':
        if(sliderView) break;
        this.setState({sliderView: true, listView: false});
        break;
      case 'list':
        if(listView) break;
        this.setState({listView: true, sliderView: false});
        break;
      default:
        break;
    }
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
    const {searchParams, sliderView, listView} = this.state;
    return (
      <div>
        <header>
          <img src={Section4Logo} alt='logo' />
        </header>
        <div className='search'>
          <Search searchParams={searchParams} updateSearchParams={this.updateSearchParams}/>
        </div>
        <Provider store={store}>
          <div className='toggles'>
            <h3 className='tk-benton-sans'>Toggle Display</h3>
            <button className={`tk-benton-sans-wide ${sliderView ? 'button-active' : 'button-disable'}`} 
              onClick={(e) => this.toggle('slider')}>Slider
            </button>
            <button className={`tk-benton-sans-wide ${listView ? 'button-active' : 'button-disable'}`}
              onClick={(e) => this.toggle('list')}>List
            </button>
          </div>
          {/* <div> */}
            {/* <h1>Headline</h1> */}
            <Views {...data} sliderView={sliderView} listView={listView} />
          {/* </div> */}
        </Provider>
      </div>
    );
  }
}

export default App;
