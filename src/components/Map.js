import { GoogleMap, DirectionsService, DirectionsRenderer } from '@react-google-maps/api';

function Map() {
  const [response, setResponse] = useState(null);

  const directionsCallback = (res) => {
    if (res !== null) {
      if (res.status === 'OK') {
        setResponse(res);
      } else {
        console.log('response: ', res);
      }
    }
  }

  return (
    <GoogleMap
      id="directions-example"
      mapContainerStyle={{ height: "400px", width: "800px" }}
      zoom={2}
      center={{ lat: 40.748817, lng: -73.985428 }}
    >
      <DirectionsService
        options={{ 
          origin: 'Chicago',
          destination: 'New York',
          travelMode: 'DRIVING' 
        }}
        callback={directionsCallback}
      />

      {response !== null && (
        <DirectionsRenderer
          options={{ 
            directions: response
          }}
        />
      )}
    </GoogleMap>
  );
}
