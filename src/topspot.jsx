import React from 'react';

export default props => (

    <div className='well'>
        <h4>{props.name}</h4>
        <p>{props.description}</p>
        <a className="btn btn-primary btn-lg btn-change3" href={`https://maps.google.com/?q=${props.location[0]},${props.location[1]}`} role="button">View in Google Maps!</a>
    </div>
);


// `https://maps.google.com/?q= ${location[0]},${location[1]}`