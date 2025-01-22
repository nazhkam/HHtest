import React from "react";
import { Circle } from "../components/circle/circle";
import { data } from "../data";
import { SwiperComponent } from "../components/swiperComponent/swiperComponent";
import { Header } from "../components/header/header";
import { Dates } from "../components/dates/dates";
import { Navigate } from "../components/navigate/navigate";
import "./home.css";

interface Props {
}

export const Home: React.FC<Props> = () => {
  const points = data.map((item, index) => Object.keys(item)[0]);
  const [active, setActive] = React.useState(0);
  const activeCategory = points[active];
  const dataProps = data
    .find((item) => activeCategory in item)
    ?.[activeCategory]?.sort((a, b) => a.year - b.year);//делаем сортировку по году чтобы не рушилась структура при добавлении новых дат по заданию


  return (
    <div className="home" >
      <Header/>
      {dataProps && <Dates date1={dataProps[0].year} date2={dataProps[dataProps.length - 1].year} />}

        <Circle
          points={points}
          active={active}
          setActive={(id) => setActive(id)}
        />
        <Navigate active={active} setActive={setActive} length={points.length}/>
        {dataProps && <SwiperComponent data={dataProps} />}

    </div>
  );
};
