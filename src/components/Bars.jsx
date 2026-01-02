import { useSelector } from "react-redux";
import "../index.css";

export default function Bars() {
  const { array, activeIndices } = useSelector(
    (state) => state.visualizer
  );

  return (
    <div className="bars-container">
      {array.map((value, index) => {
        const isActive = activeIndices.includes(index);

        return (
          <div
            key={index}
            className={`bar ${isActive ? "active-bar" : ""}`}
            style={{ height: `${value}px` }}
          />
        );
      })}
    </div>
  );
}

