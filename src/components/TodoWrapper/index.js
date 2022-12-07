import TodoList from "../TodoList";
import TodoLists from "./styles";

function TodoWrapper(props) {
  return (
    <TodoLists>
      {props.listData.map((el) => {
        return (
          <TodoList
            key={el.id}
            data={el}
            isChanged={props.isChanged}
            setIsChanged={props.setIsChanged}
          ></TodoList>
        );
      })}
    </TodoLists>
  );
}

export default TodoWrapper;
