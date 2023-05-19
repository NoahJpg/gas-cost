import React, { useState } from 'react';
import MPGInput from './MPGInput';
import GasCostInput from './GasCostInput';

const App = () => {
    const [mpg, setMPG] = useState('');
    const [gasCost, setGasCost] = useState('');

    return (
        <div>
            <MPGInput mpg={mpg} setMPG={setMPG} />
            <GasCostInput gasCost={gasCost} setGasCost={setGasCost} />
        </div>
    );
}

export default App;
