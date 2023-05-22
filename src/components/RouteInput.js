import React, { useState } from 'react';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';

const RouteInput = ({ setDistance }) => {
    const [origin, setOrigin] = useState('');
    const [destination, setDestination] = useState('');

    const handleSelect = async (address, setter) => {
      const results = await geocodeByAddress(address);
      const latLng = await getLatLng(results[0]);
      setter(address);
    }

    const getDirections = async (origin, destination) => {
      try {
        const response = await fetch('http://localhost:3000/api/directions', {
          method: 'POST',
          body: JSON.stringify({ origin: origin, destination: destination }),
          headers: { 'Content-Type': 'application/json' },
        });
        
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
            <PlacesAutocomplete
              value={origin}
              onChange={setOrigin}
              onSelect={(address) => handleSelect(address, setOrigin)}
              searchOptions={{
                componentRestrictions: { country: ["us"] },
                apiKey: process.env.REACT_APP_CLIENT_SIDE_MAPS_KEY,
                libraries: ["places"],
              }}
            >
              {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                <div>
                  <input {...getInputProps({ placeholder: "Origin" })} />
                  <div>
                    {loading && <div>Loading...</div>}
                    {suggestions.map((suggestion) => {
                      const style = {
                        backgroundColor: suggestion.active ? "#41b6e6" : "#fff",
                      };

                      return (
                        <div {...getSuggestionItemProps(suggestion, { style })}>
                          {suggestion.description}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </PlacesAutocomplete>
            
            <label htmlFor="destination">Destination:</label>
            <PlacesAutocomplete
              value={destination}
              onChange={setDestination}
              onSelect={(address) => handleSelect(address, setDestination)}
            >
              {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                <div>
                  <input {...getInputProps({ placeholder: "Destination" })} />
                  <div>
                    {loading && <div>Loading...</div>}
                    {suggestions.map((suggestion) => {
                      const style = {
                        backgroundColor: suggestion.active ? "#41b6e6" : "#fff",
                      };

                      return (
                        <div {...getSuggestionItemProps(suggestion, { style })}>
                          {suggestion.description}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </PlacesAutocomplete>

            <button onClick={() => getDirections(origin, destination)}>Get Directions</button>
        </div>
    );
}

export default RouteInput;
