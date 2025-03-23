import { useState } from "react";
import { useDrop } from "react-dnd";

const parts = [
  { id: 1, icon: "skull" },
  { id: 2, icon: "spine" },
  { id: 3, icon: "center" },
  { id: 4, icon: "HumerusLeft" },
  { id: 5, icon: "HumerusRight" },
  { id: 6, icon: "radiusLeft" },
  { id: 7, icon: "radiusRight" },
  { id: 8, icon: "leftHand" },
  { id: 9, icon: "rightHand" },
  { id: 10, icon: "thighLeft", className: "w-[140px] h-fit" },
  { id: 11, icon: "thighRight" },
  { id: 12, icon: "legLeft" },
  { id: 13, icon: "legRight" },
  { id: 14, icon: "toeRight" },
  { id: 15, icon: "toeLeft" },
];

const TargetBox = (prop) => {
  const [droppedPart, setDroppedPart] = useState(null);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "parts",
    drop: (item) => {
      if (item.id === prop.id) {
        const matchedPart = parts.find((part) => part.id === item.id);
        setDroppedPart(matchedPart);
        prop.onDrop(item.id, prop.id);
      }
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));

  return (
    <div
      ref={drop}
      className={`${
        droppedPart
          ? "bg-transparent border-none"
          : isOver
          ? "bg-green-200"
          : "bg-white/50"
      } ${prop.className}`}
    >
      {droppedPart && (
        <img
          src={`/${droppedPart.icon}.png`}
          alt=""
          className="w-full h-full object-contain"
        />
      )}
    </div>
  );
};

export default TargetBox;