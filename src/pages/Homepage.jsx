import { useState, useTransition } from "react";
import Parts from "../components/Parts";
import TargetBox from "../components/TargetBox";

const parts = [
  { id: 1, icon: "skull", className: " w-[180px] h-fit " },
  { id: 2, icon: "spine", className: " w-[180px] h-fit " },
  { id: 3, icon: "center", className: " w-[80px] h-fit " },
  {
    id: 4,
    icon: "HumerusLeft",
    className: "  w-[200px] h-fit  ",
  },
  {
    id: 5,
    icon: "HumerusRight",
    className: "  w-[200px] h-fit  ",
  },
  {
    id: 6,
    icon: "radiusLeft",
    className: "  w-[173px] h-fit ",
  },
  {
    id: 7,
    icon: "radiusRight",
    className: "  w-[173px] h-fit ",
  },
  { id: 8, icon: "leftHand", className: "  w-[23px] h-fit  " },
  { id: 9, icon: "rightHand", className: "  w-[23px] h-fit " },
  {
    id: 10,
    icon: "thighLeft",
    className: "  w-[140px] h-fit   ",
  },
  {
    id: 11,
    icon: "thighRight",
    className: "  w-[140px] h-fit ",
  },
  { id: 12, icon: "legLeft", className: "  w-[130px] h-fit  " },
  { id: 13, icon: "legRight", className: "  w-[130px] h-fit " },
  { id: 14, icon: "toeRight", className: "  w-[44px] h-fit  " },
  { id: 15, icon: "toeLeft", className: "  w-[44px] h-fit " },
];

const Popup = () => {
  return (
    <div className="aboslute w-screen h-screen bg-[#ffffff83] text-black text-2xl flex flex-col justify-center items-center">
      <h1>Congratulations! All parts are correctly placed</h1>
      <h1 className="text-red-500">Respect++</h1>
      <button
        onClick={() => window.location.reload()}
        className="bg-blue-500 text-white p-2 rounded-lg mt-5"
      >
        Restart Game
      </button>
    </div>
  );
};

const Homepage = () => {
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const handleDrop = (draggedId, targetId) => {
    if (draggedId === targetId) {
      setScore((prevScore) => {
        const newScore = prevScore + 1;
        if (newScore === parts.length) {
          setInterval(()=>setGameOver(true), 1000);
        }
        return newScore;
      });
    } else {
      alert("Try Again!");
    }
  };

  return (
    <>
      {gameOver && <Popup />}
      <main className="w-screen h-screen bg-green-400 flex justify-center items-center gap-2 p-5">
        <div className="h-full w-2/5 bg-white p-5 flex flex-col justify-between items-center relative overflow-hidden">
          <img
            src="/wooden.jpg"
            alt=""
            className="absolute inset-0 w-full h-full object-cover z-10"
          />
          <h1 className="text-4xl font-bold w-full text-center z-20">
            Container
          </h1>
          <div className="w-full h-[88vh] bg-inherit z-20 relative">
            {/* <img
              src="/container.png"
              alt=""
              className="absolute inset-0 w-full h-full object-cover z-10"
            /> */}
            <div className="w-full h-full flex flex-wrap z-30">
              {parts.map((part) => (
                <Parts
                  key={part.id}
                  id={part.id}
                  icon={part.icon}
                  className={part.className}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="h-full w-3/5 bg-white">
          <h1 className="text-4xl font-bold w-full text-center z-20">
            Operation Area
          </h1>
          <div className="relative w-[740px] h-[650px] bg-white border-4 rounded-lg overflow-hidden">
            <TargetBox
              id={1}
              onDrop={handleDrop}
              className="absolute w-[180px] h-[124px] left-[38%]"
            />
            <TargetBox
              id={2}
              onDrop={handleDrop}
              className="absolute  w-[180px] h-[221px] left-[38.5%] top-[12.23%] z-10"
            />
            <TargetBox
              id={3}
              onDrop={handleDrop}
              className="absolute  w-[80px] h-[100px] left-[45.45%] top-[39.12%] z-50"
            />
            <TargetBox
              id={4}
              onDrop={handleDrop}
              className="absolute  w-[200px] h-[138px] left-[45.35%] top-[16.89%] z-40"
            />
            <TargetBox
              id={5}
              onDrop={handleDrop}
              className="absolute  w-[200px] h-[138px] left-[28.90%] top-[16.89%] z-40"
            />
            <TargetBox
              id={6}
              onDrop={handleDrop}
              className="absolute  w-[173px] h-[120px] left-[48%] top-[32.79%] z-50"
            />
            <TargetBox
              id={7}
              onDrop={handleDrop}
              className="absolute   w-[173px] h-[120px] left-[29.9%] top-[32.79%] z-50"
            />
            <TargetBox
              id={8}
              onDrop={handleDrop}
              className="absolute   w-[23px] h-[56px] left-[58.29%] top-[48.28%] z-50"
            />
            <TargetBox
              id={9}
              onDrop={handleDrop}
              className="absolute   w-[23px] h-[56px] left-[40.2%] top-[48.28%] z-50"
            />
            <TargetBox
              id={10}
              onDrop={handleDrop}
              className="absolute   w-[140px] h-[171px] left-[46.87%] top-[42.48%] rotate-358"
            />
            <TargetBox
              id={11}
              onDrop={handleDrop}
              className="absolute   w-[140px] h-[171px] left-[36.0%] top-[42.48%] rotate-2"
            />
            <TargetBox
              id={12}
              onDrop={handleDrop}
              className="absolute   w-[130px] h-[126px] left-[47.82%] top-[66.35%]"
            />
            <TargetBox
              id={13}
              onDrop={handleDrop}
              className="absolute   w-[130px] h-[126px] left-[36.5%] top-[66.35%]"
            />
            <TargetBox
              id={14}
              onDrop={handleDrop}
              className="absolute   w-[44px] h-[53px] left-[42.35%] top-[84.6%] pt-[2px]"
            />
            <TargetBox
              id={15}
              onDrop={handleDrop}
              className="absolute   w-[44px] h-[53px] left-[53.8%] top-[84.6%] pt-[2px]"
            />
          </div>
          {/* <div className="relative w-[740px] h-[650px] bg-gray-100 border-4 rounded-lg overflow-hidden">
            <img
              src="/skull.png"
              alt=""
              className="absolute border-2 w-[180px] h-fit left-[38%]"
            />
            <img
              src="/spine.png"
              alt=""
              className="absolute border-2 w-[180px] h-fit left-[38.5%] top-[13.53%]"
            />
            <img
              src="/center.png"
              alt=""
              className="absolute border-2 w-[80px] h-fit left-[45.45%] top-[38.78%]"
            />
            <img
              src="/HumerusLeft.png"
              alt=""
              className="absolute border-2 w-[200px] h-fit left-[45.35%] top-[16.89%]"
            />
            <img
              src="/HumerusRight.png"
              alt=""
              className="absolute border-2 w-[200px] h-fit left-[28.90%] top-[16.89%]"
            />
            <img
              src="/radiusLeft.png"
              alt=""
              className="absolute border-2 w-[173px] h-fit left-[48%] top-[32.49%]"
            />
            <img
              src="/radiusRight.png"
              alt=""
              className="absolute border-2 w-[173px] h-fit left-[29.9%] top-[32.49%]"
            />
            <img
              src="/leftHand.png"
              alt=""
              className="absolute border-2 w-[23px] h-fit left-[58.29%] top-[46.84%]"
            />
            <img
              src="/rightHand.png"
              alt=""
              className="absolute border-2 w-[23px] h-fit left-[40.2%] top-[46.84%]"
            />
            <img
              src="/thighLeft.png"
              alt=""
              className="absolute border-2 w-[140px] h-fit left-[46.87%] top-[43.08%] rotate-358"
            />
            <img
              src="/thighRight.png"
              alt=""
              className="absolute border-2 w-[140px] h-fit left-[36.0%] top-[43.08%] rotate-2"
            />
            <img
              src="/legLeft.png"
              alt=""
              className="absolute border-2 w-[130px] h-fit left-[47.82%] top-[64.50%]"
            />
            <img
              src="/legRight.png"
              alt=""
              className="absolute border-2 w-[130px] h-fit left-[36.5%] top-[64.50%]"
            />
            <img
              src="/toeRight.png"
              alt=""
              className="absolute border-2 w-[44px] h-fit left-[42.35%] top-[84.30%]"
            />
            <img
              src="/toeLeft.png"
              alt=""
              className="absolute border-2 w-[44px] h-fit left-[53.8%] top-[84.30%]"
            />
          </div> */}
        </div>
        <div className="h-full w-1/5 bg-white/90 relative">
          <img
            src="/frontsidefull.png"
            alt=""
            className="absolute inset-0 w-full h-full object-contain z-10"
          />
        </div>
      </main>
    </>
  );
};

export default Homepage;
