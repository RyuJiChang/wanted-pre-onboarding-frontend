import TodoList from "../TodoList";
import TodoLists from "./styles";

function TodoWrapper(listData) {
  return (
    <TodoLists>
      {listData.listData.map((el) => {
        return <TodoList key={el.id} props={el}></TodoList>;
      })}
    </TodoLists>
  );
}

export default TodoWrapper;
