import React, { useMemo } from 'react';
import './FirstBlock.scss';

const FirstBlock = () =>
  useMemo(() => (
    <div className="firstBlock">
      <p>Первый блок</p>
    </div>
  ));

export default FirstBlock;
