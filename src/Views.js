import React, { Component } from 'react';
import { connect } from "react-redux";

export default class Views extends Component {
        // img  
        // show name 
        // video name
    render(){
        const { data } = this.props;
        const carousalMappings = data.map(d => {
            return(
            <div key={d.timestamp}>
                <img src={`/images/${d.backgroundImage}`} alt={d.description}/> 
                <h2>{d.show}</h2>
                <h3>{d.name}</h3>
            </div>
            );
        })
        return(
            <React.Fragment>
                {carousalMappings}
            </React.Fragment>
        );
    }
}
// const mapStateToProps = ( { data } ) => ({
//     data
// })


// export default connect(mapStateToProps)(Views);
