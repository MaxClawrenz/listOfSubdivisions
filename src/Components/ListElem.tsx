import { useState } from "react";
import { ISubdivision } from "../interfaces/ISubdivision";
import style from "../style.module.css";
import Triangle from "./Triangle";
import ChildrenList from "./ChildrenList";

function ListElem(props: ISubdivision) {
  const [isOpen, setOpen] = useState<boolean>(false);
  const [isGreen, setGreen] = useState<boolean>(false);

  function listOpen() {
    if (!isGreen) setGreen(true);
    setOpen(!isOpen);
  }

  return (
    <>
      <li onClick={listOpen} className={style.main_list_elem}>
        <div className={style.main_list_elem_left}>
          <div className={style.main_list_elem_left_box}>{props.code}</div>
          <div className={style.main_list_elem_left_box}>{props.name}</div>
        </div>
        <div className={style.main_list_elem_right}>
          <div
            className={`${
              isGreen ? style.indicator_green : style.indicator_red
            }`}
          ></div>
          <div
            className={`${
              isOpen ? style.triangle_opened : style.triangle_closed
            }`}
          >
            <Triangle />
          </div>
        </div>
      </li>
      {isOpen && <ChildrenList listOfPositions={props.listOfPositions} />}
    </>
  );
}

export default ListElem;
