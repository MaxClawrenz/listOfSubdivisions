import { IPosition } from "../interfaces/IPosition";
import style from "../style.module.css";

function ListElemChildren(props: IPosition) {
  return (
    <li className={style.children_item}>
      <div className={style.children_item_block}>{props.name}</div>
      <div className={style.children_item_block}>
        {props.collaboratorFullname}
      </div>
    </li>
  );
}

export default ListElemChildren;
