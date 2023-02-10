import React from 'react';
import HiraganaSounds from './HirganaSounds';
import HiraganaCombined from './HiraganaCombined';

const HiraganaTable = () => {
  return (
    <div className="table-container">
        <HiraganaSounds />
        <HiraganaCombined />
    </div>
  )
}

export default HiraganaTable;