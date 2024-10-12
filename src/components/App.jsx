import React from 'react';
import SectionTitle from './SectionTitle';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        fontSize: 20,
        color: 'black',
        backgroundColor: 'lightgrey',
      }}
    >
      <SectionTitle />
    </div>
  );
};

export default App;
