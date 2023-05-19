import React, { useState } from 'react';
import MPGInput from './MPGInput';
import GasCostInput from './GasCostInput';
import RouteInput from './RouteInput';
import TotalCost from './TotalCost';

const App = () => {
    const [mpg, setMPG] = useState('');
    const [gasCost, setGasCost] = useState('');
    const [distance, setDistance] = useState('');

    return (
        <div>
            <MPGInput mpg={mpg} setMPG={setMPG} />
            <GasCostInput gasCost={gasCost} setGasCost={setGasCost} />
            <RouteInput setDistance={setDistance} />
            <TotalCost distance={distance} mpg={mpg} gasCost={gasCost} />
        </div>
    );
}

export default App;
