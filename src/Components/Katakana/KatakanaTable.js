import React from 'react';
import KatakanaSounds from './KatakanaSounds';
import KatakanaCombined from './KatakanaCombined';

const KatakanaTable = () => {
  return (
    <div className="table-container">
        <KatakanaSounds />
        <KatakanaCombined />
    </div>
  )
}

export default KatakanaTable;