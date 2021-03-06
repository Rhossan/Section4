import React, { Component } from 'react';
import { connect } from "react-redux";
import { filterData } from '../reducers/selectors';
import Flickity from "react-flickity-component";
import '../assets/section4fonts.css';
import "../assets/flickity.css";

class Views extends Component {
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

        // const flickityOptions = {
        //         pageDots: false,
        //         wrapAround: false,
        //         cellAlign: 'left',
        //         prevNextButtons: false
        //     };
        const flickityOptions = carousalMappings.length < 5 ? 
            {
                pageDots: false,
                wrapAround: false,
                cellAlign: 'left',
                prevNextButtons: false
            }
            :
            {
                pageDots: false,
                wrapAround: true,
                cellAlign: 'left'
            };
            
         
        let nextButtonOptions = (carousalMappings.length < 5) ? 'next-button-options' : ''
        if (carousalMappings.length === 1) nextButtonOptions = 'single-card'; 
        return(
            this.props.sliderView ? 
            <div className={`slider-view ${nextButtonOptions}`} >
                <h1 className='tk-benton-sans-wide'>Headline</h1>
                <Flickity options={flickityOptions} reloadOnUpdate>
                    {carousalMappings}
                </Flickity>
            </div> 
            :
             <div className='list-view'>
                <h1 className='tk-benton-sans-wide'>Headline</h1>
                {carousalMappings}
             </div>
        );
    }
}
const mapStateToProps = ( { apiData, sliderView, listView, searchParams } ) => {
    const data = filterData(apiData.data, searchParams);
    return(
        {
            data,
            sliderView,
            listView
        }
    );
}
    


export default connect(mapStateToProps)(Views);
