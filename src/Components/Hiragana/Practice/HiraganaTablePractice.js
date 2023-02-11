import React from 'react'
import HiraganaCombinedPractice from './HiraganaCombinedPractice';
import HiraganaSoundsPractice from './HiraganaSoundsPractice';

const HiraganaTablePractice = () => {
  return (
    <div className="table-container practice-table">
        <HiraganaSoundsPractice />
        <HiraganaCombinedPractice />
    </div>
  )
}

export default HiraganaTablePractice;