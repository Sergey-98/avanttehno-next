import React, { useContext } from 'react';
import { Context } from '../../Context/Context';


export default function Hamburger() {
  const { isBurger, setIsBurger } = useContext(Context);
  const changeButton = () => {
    if (!isBurger) {
      setIsBurger(true);
    } else {
      setIsBurger(false);
    }
  };

  return (
    <div className={isBurger ? 'b_hamburger is_active' : 'b_hamburger'} onClick={changeButton}>
      <span className="h_line line1"></span>
      <span className="h_line line2"></span>
      <span className="h_line line3"></span>
    </div>
  );
}
