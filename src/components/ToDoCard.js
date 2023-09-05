import { useSelector } from "react-redux";
import Card from "../layout/Card";
import classes from './ToDoCard.module.css';
import ToDoItem from "./ToDoItem";

const ToDoCard = () => {
  const todoList = useSelector(state => state.todo);

  // Dynamic Content
  let content = <p>No tasks found...</p>;

  if (todoList.length > 0) {
    content = todoList.map(todo => (
      <ToDoItem 
        text={todo.text}
        id={todo.id}
        key={todo.id}
      />
    ));
  };

  return (
    <Card className={classes.card}>
      {content}
    </Card>
  );
};

export default ToDoCard;