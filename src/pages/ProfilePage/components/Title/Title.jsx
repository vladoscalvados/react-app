import React, { useMemo } from 'react';
import './Title.scss';

const Title = () =>
  useMemo(() => (
    <div className="title">
      <div className="title__inner">
        <div className="title-wrapper">
            <div className="title__mask"></div>

          <div className="title__content">
              <div className="title__close">
                  <a href="/">X</a>
              </div>
            <div className="title__content-title">Заголовок</div>
            <div className="title__content-subtitle">Далеко-далеко за словесными горами в стране
              гласных и согласных живут рыбные тексты.</div>
          </div>
        </div>

      </div>
    </div>
  ));

export default Title;
