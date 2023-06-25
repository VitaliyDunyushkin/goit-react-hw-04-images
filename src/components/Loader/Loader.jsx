import React from 'react';
import { FidgetSpinner } from 'react-loader-spinner';

export function Loader() {
  return (
    <FidgetSpinner
      visible={true}
      height="110"
      width="110"
      ariaLabel="dna-loading"
      wrapperStyle={{ marginLeft: '40vw' }}
      wrapperClass="dna-wrapper"
      ballColors={['#ff0000', '#00ff00', '#0000ff']}
      backgroundColor="#F4442E"
    />
  );
}
