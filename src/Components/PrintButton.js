import React from 'react';

const PrintButton = () => {
  return (
    <button 
        id="printBtn"
        type="button" 
        onClick={() => window.print()}>Print</button>
  )
}

export default PrintButton;