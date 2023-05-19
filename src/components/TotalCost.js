import React from 'react';

const TotalCost = ({ distance, mpg, gasCost }) => {
    const totalCost = (distance / mpg) * gasCost;

    return (
        <div>
            <p>Total Cost of Gas for Trip: ${totalCost.toFixed(2)}</p>
        </div>
    );
}

export default TotalCost;
