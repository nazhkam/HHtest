import React from 'react';
import "./index.css"

interface Props {
  className?: string;
  data?: { year: number, value: string }
}

export const SLiderCOntent: React.FC<Props> = ({ className, data}) => {
  return (
    <div className='slider-content'>
      <div className='year'>{data?.year}</div>
      <div className='value'>{data?.value}</div>


      </div>
  );
};
