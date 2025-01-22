import React from "react";
import "./index.css";

interface Props {
  date1?: number;
  date2?: number;
}

export const Dates: React.FC<Props> = ({ date1, date2 }) => {
  const curDate=date1
  console.log(curDate)
  return (
    <div className="dates">
      <div className="date-1">{date1}</div>
      <div className="date-2">{date2}</div>
    </div>
  );
};
