import React, {Component} from 'react';

export default class Search extends Component {

    render(){
        const {searchParams} = this.props;
        return(
        <div className='search-field'>
            <input
                className='tk-benton-sans-wide'
                onChange={this.props.updateSearchParams}
                value={searchParams}
                placeholder='Search "Walmart"'
            ></input>
        </div>
        );
    }
}