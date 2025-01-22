import React from 'react';
import './style.css';

interface Props {
  active: number;
  setActive: (id: number) => void;
  length: number;
  className?: string;
}

export const Navigate: React.FC<Props> = ({ active, setActive, length }) => {
  const onClickPrev = () => {
    if (active === 0) {
      setActive(length - 1);
    }else {
      setActive(active - 1);
    }
  };
  const onClickNext = () => {
    if (active === length - 1) {
      setActive(0);
    }else {
      setActive(active + 1);
      console.log('first')
    }
  };
  return (
    <div className='navigate-block'>
      <span className='navigate-info'>{active + 1}/{length}</span>
      <div className='navigate-buttons'>
        <div className='prev-button' onClick={onClickPrev}>{`<`}</div>
        <div className='next-button' onClick={onClickNext}>{`>`}</div>
      </div>
    </div>
  );
};
