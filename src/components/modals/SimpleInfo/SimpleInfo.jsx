import React from 'react';
import {useSelector} from 'react-redux'

import {simpleInfoModalTextSelector} from '../../../selectors'

import './SimpleInfo.scss';

export const SimpleInfo = () => {
  const infoText = useSelector(simpleInfoModalTextSelector)
  return (
    <div className="simpleInfo">
        <p>{infoText}</p>
    </div>
  )
}

