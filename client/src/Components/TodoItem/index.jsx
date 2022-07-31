/** @format */

import React from "react";
import {
  Weapper,
  MainContainer,
  MainContainerOne,
  MainContainerTwo,
  Span,
  Heading,
  Button,
  Fillter,
  Delete,
} from "./TodoItem.style";
const Todo = ({ todo, editeTodo, updateTodo, deleteTodo, index }) => {
  return (
    <Weapper>
      <MainContainer>
        <MainContainerOne>
          <Heading status={todo.status == "1" ? true : false}>
            {todo.name}
          </Heading>
          <Span status={todo.status == "1" ? true : false}>{todo.desc}</Span>
        </MainContainerOne>
        <MainContainerTwo className="Card--button">
          {todo.status == "0" && (
            <Button btn="Edit" onClick={() => editeTodo(todo)}>
              Edit
            </Button>
          )}

          <Button btn="Complete" onClick={() => updateTodo(todo)}>
            {todo.status == "1" ? "UnComplete" : "Complete"}
          </Button>
          <Button btn="Delete" onClick={() => deleteTodo(todo.id)}>
            Delete
          </Button>
        </MainContainerTwo>
      </MainContainer>
    </Weapper>
  );
};

export default Todo;
