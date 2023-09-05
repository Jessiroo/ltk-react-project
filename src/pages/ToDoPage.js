import { Fragment } from "react";
import BasicForm from "../components/BasicForm";
import ToDoCard from "../components/ToDoCard";

const ToDoPage = () => {
  return (
    <Fragment>
      <h1>TO DO:</h1>
      <BasicForm />
      <ToDoCard />
    </Fragment>
  );
};

export default ToDoPage;