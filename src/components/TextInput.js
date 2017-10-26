import React from 'react';

export default ({ text, onChange }) => {
  return (
    <div>
      <input type='text' value={text} onChange={e => onChange(e.target.value)} />
    </div>
  );
};