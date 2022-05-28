import React, { createContext, useEffect, useState } from "react";
export const BalloonContext = createContext();

const BalloonContextProvider = ({ children }) => {
  const [allBalloon, setAllBalloon] = useState([]);
  const [recBalloon, setRecBalloon] = useState([]);
  const [num, setNum] = useState(-1);
  useEffect(() => {
    let arr = [];
    for (let i = 0; i < 5; i++) {
      let r = Math.floor(Math.random() * (255 - i * 25));
      let g = Math.floor(Math.random() * (255 - i * 50));
      let b = Math.floor(Math.random() * (255 - i * 100));
      let color = `rgb(${r}, ${g}, ${b})`;
      let detail = {
        current: i + 1,
        original: i + 1,
        color,
      };
      arr.push(detail);
    }
    setAllBalloon([...arr]);
  }, []);
  const handleChange = (e) => {
    console.log(e);
    setNum(e.target.value);
  };
  const handleShoot = () => {
    let findit;
    for (let i = 0; i < allBalloon.length; i++) {
      //   console.log(allBalloon[i]);
      if (allBalloon[i].current == num) {
        allBalloon[i].current = -1;
        findit = allBalloon[i];
        setRecBalloon([...recBalloon, allBalloon[i]]);
      }
    }
    refreshAllBalloon(findit);
  };
  const refreshAllBalloon = (findit) => {
    let arr = allBalloon;
    arr = arr.filter((ele) => ele.current >= 0);
    arr = arr.sort((a, b) => a.original - b.original);
    arr.map((ele, i) => (ele.current = i + 1));
    setAllBalloon([...arr]);
    // console.log(allBalloon);
  };
  const handleRecRemove = (balloon) => {
    let recarr = recBalloon;
    recarr = recarr.filter((ele) => ele.original != balloon.original);
    setRecBalloon([...recarr]);
    let arr = [...allBalloon, balloon];
    arr = arr.sort((a, b) => a.original - b.original);
    arr.map((ele, i) => (ele.current = i + 1));
    setAllBalloon([...arr]);
  };

  return (
    <BalloonContext.Provider
      value={{
        allBalloon,
        setAllBalloon,
        recBalloon,
        setRecBalloon,
        handleChange,
        handleShoot,
        handleRecRemove,
      }}
    >
      {children}
    </BalloonContext.Provider>
  );
};

export default BalloonContextProvider;
