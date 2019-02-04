import React, {Component} from 'react';
import { connect } from "react-redux";
import changeView from '../actionCreators/changeView';

class Toggle extends Component{
    render(){
        const {sliderView, listView} = this.props;
        return(
          <div className='toggles'>
            <h3 className='tk-benton-sans'>Toggle Display</h3>
            <button className={`tk-benton-sans-wide ${sliderView ? 'button-active' : 'button-disable'}`} 
              onClick={(e) => this.props.toggle('slider')}>Slider
            </button>
            <button className={`tk-benton-sans-wide ${listView ? 'button-active' : 'button-disable'}`}
              onClick={(e) => this.props.toggle('list')}>List
            </button>
          </div>
        );
    }

}
const mapStateToProps = ( {sliderView, listView } ) => ({
    sliderView,
    listView
});

const mapDispatchToProps = dispatch => ({
  toggle(view) {
      dispatch(changeView(view));
  }
});


export default connect(mapStateToProps, mapDispatchToProps)(Toggle);