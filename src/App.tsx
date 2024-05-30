import "./App.css";
import ListElem from "./Components/ListElem";
import { sortedListOfSubdivisions } from "./store/subdivisions";
import style from "./style.module.css";

function App() {
  return (
    <ul className={style.main_list}>
      {sortedListOfSubdivisions.map((elem) => (
        <ListElem
          key={elem.id}
          id={elem.id}
          code={elem.code}
          name={elem.name}
          listOfPositions={elem.listOfPositions}
        />
      ))}
    </ul>
  );
}

export default App;
