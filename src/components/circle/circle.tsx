import "./index.css";

interface Props {
  points: string[];
  active: number;
  setActive: (id:number) => void;
  className?: string;
}

export const Circle = ({ points, className,active, setActive }: Props,) => {
  console.log(points)
  const radius = 200; // Радиус круга
  const pointCount = points.length; // Количество точек
  const rotateAngle = 360 / pointCount; // Угол вращения;
  const centerX = 200; // Центр X
  const centerY = 200; // Центр Y

  // Функция для генерации точек
  const dots = points.map((item, index) => {
    const angle = (2 * Math.PI * index) / pointCount; // Угол для точки
    const x = centerX + radius * Math.cos(angle);
    const y = centerY + radius * Math.sin(angle);
    const name = Object.keys(item)[0];

    return (
      <div
        key={index}
        className={"point " + (active === index ? "active" : "")}
        style={{
          left: `${x}px`,
          top: `${y}px`,
          transform: `translate(-50%, -50%) rotate(${
            rotateAngle * active + rotateAngle
          }deg)`,
        }}
        onClick={() => setActive(index)}
      >
        <div> {index + 1} </div>
        <div className="point-name">{`${active === index ? item : ""}`}</div>
      </div>
    );
  });

  return (
    <div
      className="circle-container"
      style={{ transform: `rotate(-${rotateAngle * active + rotateAngle}deg)` }}
    >
      {dots}
    </div>
  );
};
