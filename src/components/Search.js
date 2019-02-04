import React, {Component} from 'react';
import { connect } from "react-redux";
import changeSearchParams from '../actionCreators/changeSearchParams';

class Search extends Component {

    render(){
        const {searchParams} = this.props;
        return(
        <div className='search-field'>
            <input
                className='tk-benton-sans-wide'
                onChange={this.props.update}
                value={searchParams}
                placeholder='Search "Walmart"'
            ></input>
        </div>
        );
    }
}

const mapStateToProps = ( { searchParams } ) => ({
    searchParams
})

const mapDispatchToProps = dispatch => ({
  update(event){
    dispatch(changeSearchParams(event.target.value));
  }
});


export default connect(mapStateToProps, mapDispatchToProps)(Search);