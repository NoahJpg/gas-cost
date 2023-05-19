import React, { useState } from 'react';

const RouteInput = ({ setDistance }) => {
    const [origin, setOrigin] = useState('');
    const [destination, setDestination] = useState('');

    const getDirections = async (origin, destination) => {
      try {
        const response = await fetch(
          `https://maps.googleapis.com/maps/api/directions/json?origin=${origin}&destination=${destination}&key=${process.env.REACT_APP_GMAP_KEY}`
        );
        const data = await response.json();
        
        if (data.routes && data.routes.length > 0) {
          const distance = data.routes[0].legs[0].distance.value;
          setDistance(distance / 1000); // convert distance to kilometers
        } else {
          console.error('No route found');
        }
      } catch (error) {
        console.error('Failed to fetch directions:', error);
      }
    }

    return (
        <div>
            <label htmlFor="origin">Origin:</label>
            <input 
                type="text" 
                id="origin" 
                value={origin}
                onChange={e => setOrigin(e.target.value)}
            />
            
            <label htmlFor="destination">Destination:</label>
            <input 
                type="text" 
                id="destination" 
                value={destination}
                onChange={e => setDestination(e.target.value)}
            />

            <button onClick={getDirections}>Get Directions</button>
        </div>
    );
}

export default RouteInput;
