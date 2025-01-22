import "./index.css";

import React from 'react';

interface Props {
}

export const Header: React.FC<Props> = ( ) => {
  return (
    <div className="header">
      Исторические<br/>
      Даты</div>
  );
};
