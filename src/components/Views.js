import React, { Component } from 'react';
// import { connect } from "react-redux";
// import Carousal from './Carousal';
import '../assets/section4fonts.css';
import Flickity from "react-flickity-component";
import "../assets/flickity.css";

// const flickityOptions = {
//   pageDots: false,
//   wrapAround: true,
//   cellAlign: 'left',
  
// };
export default class Views extends Component {
        // img  
        // show name 
        // video name

    
    render(){
        const { data } = this.props;
        const carousalMappings = data.map(d => {
            return(
            <div className='card' key={d.timestamp}>
                <img src={`/images/${d.backgroundImage}`} alt={d.description}/> 
                <div>
                    <h2 className='tk-benton-sans-wide'>{d.show}</h2>
                    <p className='tk-benton-sans-wide'>{d.name}</p>
                </div> 
            </div>
            );
        });
        const flickityOptions = carousalMappings.length > 4 ? 
            {
                pageDots: false,
                wrapAround: true,
                cellAlign: 'left'
            } : 
            {
                pageDots: false,
                wrapAround: false,
                cellAlign: 'left',
                prevNextButtons: false
            };
        return(
            this.props.sliderView ? 
            <div className='slider-view'>
                <h1 className='tk-benton-sans-wide'>Headline</h1>
                <Flickity  options={flickityOptions}>
                    {carousalMappings}
                </Flickity>
            </div> :

             <div className='list-view'>
                <h1 className='tk-benton-sans-wide'>Headline</h1>
                {carousalMappings}
             </div>
        );
    }
}
// const mapStateToProps = ( { data } ) => ({
//     data
// })


// export default connect(mapStateToProps)(Views);
