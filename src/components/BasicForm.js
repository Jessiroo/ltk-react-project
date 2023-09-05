import React from 'react';
import { uid } from 'uid';

import { Formik, Field, Form } from 'formik';
import Card from '../layout/Card';
import Button from '../layout/Button';
import classes from './BasicForm.module.css';
import { useDispatch } from 'react-redux';
import { todoActions } from '../store/todo-slice';


const BasicForm = () => {
  const dispatch = useDispatch();

  return (
    <Card>
      <Formik
        initialValues={{
          addToDo: '',
        }}
        onSubmit={(values) => {
          if (values.addToDo.trim() === '') {
            return;
          };
          const postId = uid();
          dispatch(todoActions.addToDo({
            text: values.addToDo,
            id: postId,
          }));
        }}
      >
        <Form>
          <div className={classes.input}>
            <label htmlFor="todo">Add To Do:</label>
            <Field id="todo" name="addToDo" placeholder="Text Here" />
          </div>
          <div className={classes.button}>
            <Button type="submit">Submit</Button>
          </div>
        </Form>
      </Formik>
    </Card>
  );

};

export default BasicForm
