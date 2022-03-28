import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState, useRef } from "react";
import s from "./Carousal.module.scss";
import { CarousalCard } from "./CarousalCard/CarousalCard";

export const Carousal = () => {
  const [promotions, setPromotions] = useState([]);
  const scrl = useRef(null);
  const [scrollX, setscrollX] = useState(0);
  const [scrolEnd, setscrolEnd] = useState(false);
  const slide = (shift) => {
    scrl.current.scrollLeft += shift;
    setscrollX(scrollX + shift);

    if (
      Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
      scrl.current.offsetWidth
    ) {
      setscrolEnd(true);
    } else {
      setscrolEnd(false);
    }
  };

  const scrollCheck = () => {
    setscrollX(scrl.current.scrollLeft);
    if (
      Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
      scrl.current.offsetWidth
    ) {
      setscrolEnd(true);
    } else {
      setscrolEnd(false);
    }
  };

  const getPromotions = async () => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    const response = await fetch(
      `http://training.panorbitprojects.com/api/GetCarousalData/`,
      requestOptions
    );
    const responseJson = await response.json();

    return responseJson.data;
  };

  useEffect(() => {
    getPromotions().then((result) => {
      setPromotions(result);
    });
  }, []);

  return (
    <div style={{ position: "relative" }}>
      {scrollX !== 0 && (
        <button className={`${s.arrow} ${s.left}`} onClick={() => slide(-325)}>
          <FontAwesomeIcon icon={faArrowLeft} className={s.larrow} />
        </button>
      )}
      <div className={s.carousalContainer} ref={scrl} onScroll={scrollCheck}>
        <div className={s.slideBar}>
          {promotions.map((p) => (
            <CarousalCard data={p} key={p.backgroundImage} />
          ))}
        </div>
      </div>
      {!scrolEnd && (
        <button className={`${s.arrow} ${s.right}`} onClick={() => slide(+325)}>
          <FontAwesomeIcon
            icon={faArrowRight}
            id="rarrow"
            className={s.rarrow}
          />
        </button>
      )}
    </div>
  );
};
