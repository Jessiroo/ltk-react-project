import { useDispatch } from "react-redux";
import Button from "../layout/Button";
import Card from "../layout/Card";
import classes from './ToDoItem.module.css';
import { todoActions } from "../store/todo-slice";

const ToDoItem = (props) => {
  const dispatch = useDispatch();

  const removeToDoHandler = () => {
    dispatch(todoActions.removeToDo(props.id));
  };

  return (
    <Card className={classes.itemCard}>
      <div>
        <p>{props.text}</p>
      </div>
      <div>
        <Button onClick={removeToDoHandler}>x</Button>
      </div>
    </Card>
  );
};

export default ToDoItem;