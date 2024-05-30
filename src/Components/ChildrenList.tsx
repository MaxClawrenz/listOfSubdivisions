import { IPosition } from "../interfaces/IPosition";
import style from "../style.module.css";
import ListElemChildren from "./ListElemChildren";

function ChildrenList({ listOfPositions }: { listOfPositions: IPosition[] }) {
  return (
    <ul className={style.children_list}>
      {listOfPositions.length
        ? listOfPositions.map((elem) => (
            <ListElemChildren
              key={elem.id}
              id={elem.id}
              name={elem.name}
              collaboratorFullname={elem.collaboratorFullname}
            />
          ))
        : "Нет сотрудников в этом подразделении"}
    </ul>
  );
}

export default ChildrenList;
