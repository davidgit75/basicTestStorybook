import React from 'react';

export default ({ onClick, disabled }) => {
  return (
    <div>
      <button type='button' onClick={() => onClick()} disabled={disabled}>Add</button>
    </div>
  );
};