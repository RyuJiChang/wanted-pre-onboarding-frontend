import TodoList from "../TodoList";
import TodoLists from "./styles";

function TodoWrapper(listData) {
  console.log(listData.listData);
  return (
    <TodoLists>
      {listData.listData.map((el) => {
        return <TodoList props={el}></TodoList>;
      })}
    </TodoLists>
  );
}

export default TodoWrapper;
