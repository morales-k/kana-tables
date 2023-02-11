import React from 'react'
import KatakanaCombinedPractice from './KatakanaCombinedPractice';
import KatakanaSoundsPractice from './KatakanaSoundsPractice';

const KatakanaTablePractice = () => {
  return (
    <div className="table-container practice-table">
        <KatakanaSoundsPractice />
        <KatakanaCombinedPractice />
    </div>
  )
}

export default KatakanaTablePractice;