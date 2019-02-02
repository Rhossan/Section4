import React, {Component} from 'react';

export default class Search extends Component {

    render(){
        const {searchParams} = this.props;
        return(
        <div className='search-field'>
            <input
                onChange={this.props.updateSearchParams}
                value={searchParams}
            ></input>
        </div>
        );
    }
}